# Bison Business Alliance

A build-free, six-page website for GitHub Pages.

## Publish

1. Set `contactEmail` in `contact.js` to the Alliance's public inbox. With the value blank, visitors can download an inquiry draft. With an address set, they can also open a prefilled email in their mail app.
2. Put the contents of this folder in the root of your GitHub repository, including the `assets` folder.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose your publishing branch (usually `main`), select **/ (root)**, and save.

To preview locally, run `python3 -m http.server 8000` from the site folder and open http://localhost:8000.

The site uses relative links, so it can be hosted at a GitHub project path or custom domain. The emblem is the Alliance's supplied seal. Google Fonts are optional at runtime and have system fallbacks.

## Image placeholders

The homepage, About, Our Work, Partners, and Leadership pages include labeled
image slots. To fill an inline slot, upload a photo to `assets/` and replace the
corresponding `<div class="image-slot …">` element with an `<img>` element.
Keep the `feature-photo` class for the wide homepage and Our Work images.
Give meaningful images concise alt text.

To set the homepage hero image, remove the `hero-placeholder` class and the
`hero-image-label` span from `index.html`. The supplied sunset image in
`assets/prairie-bison.webp` will show by default. To use a different file, change
the background URL in the `.hero` rule in `styles.css`.

## Update an existing GitHub Pages site

Upload the six HTML files and `styles.css` to the repository root, replacing
files with matching names. The existing logo and contact script can stay in
place. Keeping your existing `contact.js` also preserves your public inbox
setting if you already added one.
