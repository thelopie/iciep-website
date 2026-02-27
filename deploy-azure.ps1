# Azure Static Web Apps Deployment Script (PowerShell)
# This script sets up Azure Static Web Apps and GitHub integration

$ErrorActionPreference = "Stop"

Write-Host "🚀 ICI Equity Partners - Azure Deployment Setup" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$ResourceGroup = "ici-equity-partners-rg"
$StaticAppName = "ici-equity-partners"
$Location = "eastus"
$Sku = "Free"  # or "Standard" for production features

# Check if Azure CLI is installed
Write-Host "📋 Checking prerequisites..." -ForegroundColor Yellow
try {
    $null = az version 2>&1
    Write-Host "✅ Azure CLI installed" -ForegroundColor Green
} catch {
    Write-Host "❌ Azure CLI is not installed" -ForegroundColor Red
    Write-Host "Install from: https://docs.microsoft.com/cli/azure/install-azure-cli"
    exit 1
}

# Check if logged in to Azure
Write-Host ""
Write-Host "🔐 Checking Azure login status..." -ForegroundColor Yellow
try {
    $account = az account show --query "name" -o tsv 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Not logged in"
    }
    Write-Host "✅ Logged in as: $account" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Not logged in to Azure" -ForegroundColor Yellow
    Write-Host "Logging in..."
    az login
}

# Select subscription if multiple exist
$subscriptionCount = (az account list --query "length([])" -o tsv)
if ($subscriptionCount -gt 1) {
    Write-Host ""
    Write-Host "📋 Multiple subscriptions found. Please select one:" -ForegroundColor Yellow
    az account list --output table
    $subscription = Read-Host "Enter subscription ID or name"
    az account set --subscription $subscription
}

$currentSubscription = az account show --query "name" -o tsv
Write-Host "✅ Using subscription: $currentSubscription" -ForegroundColor Green

# Create Resource Group
Write-Host ""
Write-Host "📦 Creating resource group..." -ForegroundColor Yellow
try {
    $null = az group show --name $ResourceGroup 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "⚠️  Resource group '$ResourceGroup' already exists" -ForegroundColor Yellow
    }
} catch {
    az group create `
        --name $ResourceGroup `
        --location $Location
    Write-Host "✅ Resource group created: $ResourceGroup" -ForegroundColor Green
}

# Get GitHub repository URL
Write-Host ""
Write-Host "🔗 GitHub Repository Setup" -ForegroundColor Cyan
Write-Host "Please enter your GitHub repository URL (e.g., https://github.com/username/iciep-website)"
$githubRepo = Read-Host "Repository URL"

if ([string]::IsNullOrEmpty($githubRepo)) {
    Write-Host "❌ Repository URL is required" -ForegroundColor Red
    exit 1
}

# Extract owner and repo name
if ($githubRepo -match 'github\.com/([^/]+)/([^/\.]+)') {
    $repoOwner = $matches[1]
    $repoName = $matches[2]
    Write-Host "✅ Repository: $repoOwner/$repoName" -ForegroundColor Green
} else {
    Write-Host "❌ Invalid GitHub URL format" -ForegroundColor Red
    exit 1
}

# Get GitHub token
Write-Host ""
Write-Host "🔑 GitHub Personal Access Token Required" -ForegroundColor Cyan
Write-Host "Create one at: https://github.com/settings/tokens/new"
Write-Host "Required scopes: repo, workflow"
$githubToken = Read-Host "GitHub Token" -AsSecureString
$githubTokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($githubToken)
)

if ([string]::IsNullOrEmpty($githubTokenPlain)) {
    Write-Host "❌ GitHub token is required" -ForegroundColor Red
    exit 1
}

# Create Azure Static Web App
Write-Host ""
Write-Host "🌐 Creating Azure Static Web App..." -ForegroundColor Yellow
az staticwebapp create `
    --name $StaticAppName `
    --resource-group $ResourceGroup `
    --source $githubRepo `
    --location $Location `
    --branch main `
    --app-location "/" `
    --output-location "dist" `
    --token $githubTokenPlain `
    --sku $Sku

Write-Host "✅ Static Web App created successfully!" -ForegroundColor Green

# Get deployment details
Write-Host ""
Write-Host "📊 Deployment Information" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan

$appUrl = az staticwebapp show `
    --name $StaticAppName `
    --resource-group $ResourceGroup `
    --query "defaultHostname" -o tsv

$deploymentToken = az staticwebapp secrets list `
    --name $StaticAppName `
    --resource-group $ResourceGroup `
    --query "properties.apiKey" -o tsv

Write-Host ""
Write-Host "🎉 Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 App URL: https://$appUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔐 Deployment Token (save this!):" -ForegroundColor Yellow
Write-Host $deploymentToken -ForegroundColor White
Write-Host ""
Write-Host "⚙️  Next Steps:" -ForegroundColor Cyan
Write-Host "1. Add deployment token to GitHub secrets:"
Write-Host "   - Go to: https://github.com/$repoOwner/$repoName/settings/secrets/actions"
Write-Host "   - Click 'New repository secret'"
Write-Host "   - Name: AZURE_STATIC_WEB_APPS_API_TOKEN"
Write-Host "   - Value: (paste the token above)"
Write-Host ""
Write-Host "2. Push code to GitHub (if not already done):"
Write-Host "   git push -u origin main"
Write-Host ""
Write-Host "3. GitHub Actions will automatically deploy your app!"
Write-Host "   Monitor at: https://github.com/$repoOwner/$repoName/actions"
Write-Host ""
Write-Host "✨ Your site will be live at: https://$appUrl" -ForegroundColor Green
