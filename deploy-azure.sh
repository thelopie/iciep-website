#!/bin/bash

# Azure Static Web Apps Deployment Script
# This script sets up Azure Static Web Apps and GitHub integration

set -e  # Exit on any error

echo "🚀 ICI Equity Partners - Azure Deployment Setup"
echo "================================================"
echo ""

# Configuration
RESOURCE_GROUP="ici-equity-partners-rg"
STATIC_APP_NAME="ici-equity-partners"
LOCATION="eastus"
SKU="Free"  # or "Standard" for production features

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Azure CLI is installed
echo "📋 Checking prerequisites..."
if ! command -v az &> /dev/null; then
    echo -e "${RED}❌ Azure CLI is not installed${NC}"
    echo "Install from: https://docs.microsoft.com/cli/azure/install-azure-cli"
    exit 1
fi
echo -e "${GREEN}✅ Azure CLI installed${NC}"

# Check if logged in to Azure
echo ""
echo "🔐 Checking Azure login status..."
if ! az account show &> /dev/null; then
    echo -e "${YELLOW}⚠️  Not logged in to Azure${NC}"
    echo "Logging in..."
    az login
else
    ACCOUNT=$(az account show --query "name" -o tsv)
    echo -e "${GREEN}✅ Logged in as: $ACCOUNT${NC}"
fi

# Select subscription if multiple exist
SUBSCRIPTION_COUNT=$(az account list --query "length([])" -o tsv)
if [ "$SUBSCRIPTION_COUNT" -gt 1 ]; then
    echo ""
    echo "📋 Multiple subscriptions found. Please select one:"
    az account list --output table
    read -p "Enter subscription ID or name: " SUBSCRIPTION
    az account set --subscription "$SUBSCRIPTION"
fi

CURRENT_SUBSCRIPTION=$(az account show --query "name" -o tsv)
echo -e "${GREEN}✅ Using subscription: $CURRENT_SUBSCRIPTION${NC}"

# Create Resource Group
echo ""
echo "📦 Creating resource group..."
if az group show --name "$RESOURCE_GROUP" &> /dev/null; then
    echo -e "${YELLOW}⚠️  Resource group '$RESOURCE_GROUP' already exists${NC}"
else
    az group create \
        --name "$RESOURCE_GROUP" \
        --location "$LOCATION"
    echo -e "${GREEN}✅ Resource group created: $RESOURCE_GROUP${NC}"
fi

# Get GitHub repository URL
echo ""
echo "🔗 GitHub Repository Setup"
echo "Please enter your GitHub repository URL (e.g., https://github.com/username/iciep-website)"
read -p "Repository URL: " GITHUB_REPO

if [ -z "$GITHUB_REPO" ]; then
    echo -e "${RED}❌ Repository URL is required${NC}"
    exit 1
fi

# Extract owner and repo name
REPO_OWNER=$(echo "$GITHUB_REPO" | sed -E 's|https://github.com/([^/]+)/.*|\1|')
REPO_NAME=$(echo "$GITHUB_REPO" | sed -E 's|https://github.com/[^/]+/([^/]+)(\.git)?$|\1|')

echo -e "${GREEN}✅ Repository: $REPO_OWNER/$REPO_NAME${NC}"

# Get GitHub token
echo ""
echo "🔑 GitHub Personal Access Token Required"
echo "Create one at: https://github.com/settings/tokens/new"
echo "Required scopes: repo, workflow"
read -sp "GitHub Token: " GITHUB_TOKEN
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}❌ GitHub token is required${NC}"
    exit 1
fi

# Create Azure Static Web App
echo ""
echo "🌐 Creating Azure Static Web App..."
az staticwebapp create \
    --name "$STATIC_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --source "$GITHUB_REPO" \
    --location "$LOCATION" \
    --branch main \
    --app-location "/" \
    --output-location "dist" \
    --token "$GITHUB_TOKEN" \
    --sku "$SKU"

echo -e "${GREEN}✅ Static Web App created successfully!${NC}"

# Get deployment details
echo ""
echo "📊 Deployment Information"
echo "========================="

APP_URL=$(az staticwebapp show \
    --name "$STATIC_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --query "defaultHostname" -o tsv)

DEPLOYMENT_TOKEN=$(az staticwebapp secrets list \
    --name "$STATIC_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --query "properties.apiKey" -o tsv)

echo ""
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo ""
echo "📍 App URL: https://$APP_URL"
echo ""
echo "🔐 Deployment Token (save this!):"
echo "$DEPLOYMENT_TOKEN"
echo ""
echo "⚙️  Next Steps:"
echo "1. Add deployment token to GitHub secrets:"
echo "   - Go to: https://github.com/$REPO_OWNER/$REPO_NAME/settings/secrets/actions"
echo "   - Click 'New repository secret'"
echo "   - Name: AZURE_STATIC_WEB_APPS_API_TOKEN"
echo "   - Value: (paste the token above)"
echo ""
echo "2. Push code to GitHub (if not already done):"
echo "   git push -u origin main"
echo ""
echo "3. GitHub Actions will automatically deploy your app!"
echo "   Monitor at: https://github.com/$REPO_OWNER/$REPO_NAME/actions"
echo ""
echo -e "${GREEN}✨ Your site will be live at: https://$APP_URL${NC}"
