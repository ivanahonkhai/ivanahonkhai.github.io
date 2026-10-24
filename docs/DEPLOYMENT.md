# Deployment guide

Everything below uses only the GitHub website. You never need a terminal.

## How it works
Every time something changes on the `main` branch, GitHub automatically rebuilds and publishes the site. This is configured in `.github/workflows/deploy.yml`.

## One-time setup
1. Open the repository on github.com.
2. Click **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

## Review the redesign before it goes live
The redesign arrives as a pull request. The live site does not change until you merge it.
1. Click the **Pull requests** tab and open the redesign pull request.
2. Click **Files changed** to read the changes.
3. Click the **Checks** area at the bottom: a green tick means the checks passed. Link and Lighthouse reports never block you.
4. Happy with it? Click **Merge pull request** > **Confirm merge**. To discard it, click **Close pull request**.

GitHub Pages cannot host a separate preview for a pull request. To see it first, open the **Actions** tab, click the run for the pull request, and download the **lighthouse** report; or merge, and revert if you dislike it (below).

## Check that a deployment worked
Open the **Actions** tab. A green tick next to the latest run means the site is live. A red cross means something failed: click the run, click the red step, and read the message. Click **Re-run jobs** after fixing it.

## Update content
1. Open the file (for example `index.html`) and click the pencil icon.
2. Edit the text, then click **Commit changes**.
3. Wait about a minute and refresh the site.

## Roll back
1. Open the **Pull requests** tab, then **Closed**, and open the merged redesign.
2. Click **Revert**, then **Create pull request**, then merge it. The previous version returns.

## Custom domain (optional)
**Settings** > **Pages** > **Custom domain**. Type your domain and click **Save**, then add the DNS records GitHub shows at your domain provider. Tick **Enforce HTTPS** once it appears.
