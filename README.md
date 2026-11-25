# Bison Business Alliance

The six-page website is ready to upload to the GitHub Pages repository. Extract
the ZIP and upload the files inside it directly to the repository root in one
commit. `index.html`, `styles.css`, `emblem.png`, and the photos all belong
at the same level. An existing copy of `.nojekyll` can stay in place.

## Logos

`emblem.png` is the Alliance logo used in the header, footer, and homepage hero.
It lives at the repository root. Replace that file with your preferred PNG
using the same name.

Each card in `businesses.html` has a labeled space for its own logo. Upload the
five files to the repository root and replace each corresponding logo-space
div with an image like this:

```html
<img class="tier-logo" src="community-partner.png" alt="">
```

Suggested filenames are `community-partner.png`, `supporting-partner.png`,
`conservation-partner.png`, `premier-partner.png`, and
`distinguished-partner.png`. The adjacent tier heading supplies the name.

`lokhonia-engineering.png` is the logo in the Conservation Partner listing.
The Partners page presents benefits as proposed until the program terms are
confirmed. Review contribution currency and frequency before publishing terms
for both Canada and the United States.

## Contact

The email link and contact form open the visitor’s email app with
`info@bisonbusinessalliance.org` as the recipient. The visitor sends the message
from that app.

To preview locally, open `index.html` or run `python3 -m http.server 8000`
from this directory and visit http://localhost:8000.
