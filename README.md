# Bison Business Alliance

A build-free, five-page website for GitHub Pages.

## Publish

1. Set `contactEmail` in `contact.js` to the Alliance's public inbox. With the value blank, visitors can download an inquiry draft. With an address set, they can also open a prefilled email in their mail app.
2. Put the contents of this folder in the root of your GitHub repository, including the `assets` folder.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose your publishing branch (usually `main`), select **/ (root)**, and save.

To preview locally, run `python3 -m http.server 8000` from the site folder and open http://localhost:8000.

The site uses relative links, so it can be hosted at a GitHub project path or custom domain. The emblem is the Alliance's supplied seal. The prairie bison hero is generated imagery. Google Fonts are optional at runtime and have system fallbacks.
