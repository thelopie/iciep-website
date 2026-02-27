# Azure Static Web Apps Deployment Guide

This project is configured to deploy to Azure Static Web Apps with automatic CI/CD through GitHub Actions.

## Prerequisites

1. **Azure Account**: Sign up at [portal.azure.com](https://portal.azure.com)
2. **GitHub Repository**: Push this code to a GitHub repository
3. **Azure CLI** (optional): Install from [docs.microsoft.com/cli/azure/install-azure-cli](https://docs.microsoft.com/cli/azure/install-azure-cli)

## Setup Instructions

### Option 1: Azure Portal (Recommended)

1. **Log into Azure Portal**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Sign in with your Microsoft account

2. **Create Azure Static Web App**
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

3. **Configure the Static Web App**

   **Basics Tab:**
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or select existing (e.g., `ici-equity-partners-rg`)
   - **Name**: `ici-equity-partners` (or your preferred name)
   - **Plan type**: Free (or Standard for custom domains/SLA)
   - **Region**: Choose closest to your users (e.g., East US, West Europe)
   - **Deployment source**: GitHub

4. **Connect to GitHub**
   - Click "Sign in with GitHub"
   - Authorize Azure Static Web Apps
   - **Organization**: Select your GitHub account/org
   - **Repository**: Select your repository
   - **Branch**: Select `main` (or your default branch)

5. **Build Configuration**
   - **Build Presets**: Select "React"
   - **App location**: `/` (root)
   - **Api location**: Leave empty
   - **Output location**: `dist`

6. **Review + Create**
   - Click "Review + create"
   - Click "Create"

7. **Wait for Deployment**
   - Azure will:
     - Create the Static Web App resource
     - Add a GitHub Actions workflow to your repository
     - Trigger the first build and deployment
   - This takes 2-5 minutes

8. **Access Your Site**
   - Once deployed, you'll see a URL like: `https://[random-name].azurestaticapps.net`
   - Click the URL to view your live site

### Option 2: Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create \
  --name ici-equity-partners-rg \
  --location eastus

# Create Static Web App
az staticwebapp create \
  --name ici-equity-partners \
  --resource-group ici-equity-partners-rg \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

## GitHub Actions Workflow

The workflow file (`.github/workflows/azure-static-web-apps.yml`) is automatically created by Azure, but we've included a pre-configured version.

### What it does:
- **On Push to Main**: Builds and deploys to production
- **On Pull Request**: Creates a staging environment
- **On PR Close**: Removes the staging environment

### Required Secret

The workflow needs the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click "New repository secret"
4. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. Value: Get from Azure Portal:
   - Open your Static Web App in Azure
   - Click "Manage deployment token"
   - Copy the token
   - Paste into GitHub

## Custom Domain Setup

### Add Custom Domain (requires Standard plan)

1. **In Azure Portal**:
   - Open your Static Web App
   - Click "Custom domains" in the left menu
   - Click "+ Add"
   - Enter your domain (e.g., `www.iciep.com`)

2. **Configure DNS**:
   - **CNAME Record**:
     ```
     www  CNAME  [your-app-name].azurestaticapps.net
     ```
   - **Root Domain** (optional):
     ```
     @  ALIAS  [your-app-name].azurestaticapps.net
     ```

3. **Validate Domain**:
   - Azure will verify DNS records
   - SSL certificate is automatically provisioned
   - Takes 5-10 minutes

## Environment Variables

If you need environment variables (API keys, etc.):

1. In Azure Portal → Your Static Web App
2. Click "Configuration" in the left menu
3. Add application settings:
   - `VITE_API_URL`: Your API endpoint
   - `VITE_GA_TRACKING_ID`: Google Analytics ID
   - etc.

**Note**: Vite requires variables to start with `VITE_` to be exposed to the browser.

## Deployment Process

### Automatic Deployment
- Push to `main` branch → Auto-deploys to production
- Open a Pull Request → Auto-creates preview environment
- Merge PR → Preview environment deleted, production updated

### Manual Deployment
```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Build your app
npm run build

# Deploy
swa deploy --app-location . --output-location dist
```

## Monitoring & Logs

1. **View Deployments**:
   - GitHub → Actions tab
   - See build logs and deployment status

2. **Azure Logs**:
   - Azure Portal → Your Static Web App
   - Click "Log stream" for real-time logs
   - Click "Application Insights" for analytics

3. **GitHub Deployments**:
   - Repository → Environments
   - See deployment history and rollback options

## Troubleshooting

### Build Fails
- Check GitHub Actions logs
- Ensure `package.json` scripts are correct
- Verify `output_location` is set to `dist`

### 404 Errors on Routes
- Ensure `staticwebapp.config.json` exists
- Check `navigationFallback` configuration

### Custom Domain Not Working
- Verify DNS propagation: `nslookup www.iciep.com`
- Wait up to 24 hours for DNS changes
- Check SSL certificate status in Azure Portal

## Cost Estimation

**Free Tier:**
- 100 GB bandwidth/month
- 0.5 GB storage
- 2 custom domains
- Free SSL certificates
- Perfect for this project!

**Standard Tier** ($9/month):
- Everything in Free
- SLA guarantee
- More bandwidth
- Staging environments

## Useful Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for errors
npm run lint
```

## Additional Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Vite Build Configuration](https://vitejs.dev/config/)

## Support

For issues:
1. Check GitHub Actions logs
2. Review Azure Portal logs
3. Check DNS configuration (if using custom domain)
4. Verify all secrets are set correctly in GitHub
