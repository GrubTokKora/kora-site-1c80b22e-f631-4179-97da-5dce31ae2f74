# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Dre's Island Food Services – Jamaican Catering in Dade City, FL
purpose: Showcase Chef Dre's Jamaican catering services, event dishes, and contact details.
sections:
- `#hero` — Hero introduction and call to action
- `#story` — Business story and service types: Drop-off, Full service
- `#gallery` "Featured authentic dishes and platters" — Photo gallery of past event dishes
- `#reviews` — Customer reviews and testimonials: Camille York Adrien, Jean-Luc Adrien, Madelyn M, Donyelle Lark-Hill, Chiquitta Nash
- `#offerings` — Past event record: Flavor Oasis — The Second Edition
- `#contact` "Tell Chef Dre what you're celebrating." — Contact and catering enquiry form
also: The business address and map link appear in the JSON-LD local business block and the contact section.
also: The business description appears in the meta description, open graph tags, and JSON-LD local business block.

## 404.html → /404
title: Page not found | Dre's Island Food Services
purpose: Display a 404 error when a page is not found.
sections:
- `#nf-title` "This plate has been cleared." — Error message and navigation links: Back to the homepage

## flavor-oasis.html → /flavor-oasis
title: Flavor Oasis Tasting Event | Dre's Island Food Services
purpose: Show details for Chef Dre's Flavor Oasis tasting event and provide a contact form for catering enquiries.
sections:
- `#offerings` — Event details, features, and imagery for Flavor Oasis — The Second Edition: Flavor Oasis — The Second Edition, Factory 22, Wesley Chapel, FL, Discover Exquisite Tastes, A Feast for the Senses, Curated Tasting Stations, Intimate Setting, Meet the Culinary Creator, Entertainment and Ambiance
- `#contact` — Contact details, address, and catering enquiry form: Dade City, FL
also: The Flavor Oasis event name, description, and location in Wesley Chapel appear in the visible content and JSON-LD structured data.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — 175 bytes — too small to hold content
- `robots.txt` — 45 bytes — too small to hold content
- `sitemap.xml` — 160 bytes — too small to hold content
- `assets/site.js` — Site behaviour scripts (header, mobile menu, scroll reveal, tabs, action bar, anchor handling, footer year)

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
