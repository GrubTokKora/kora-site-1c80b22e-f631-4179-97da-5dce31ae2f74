# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Jamaican Catering in Tampa Bay, FL | Dre's Island Food Services
purpose: Homepage for Dre's Island Food Services, a Jamaican-rooted caterer serving Tampa Bay and Central Florida: collage hero, service styles, tabbed signature menu, reviews, Chef Dre, the Flavor Oasis tasting series and the catering quote form.
sections:
- `#top` — editorial hero headline, quote and menu calls to action, food photo collage and rating badge
- scrolling marquee of signature dish names: Braised Oxtail, Jerk Chicken, Escovitch Snapper, Curry Goat, Festival
- `#about` — brand story (about), drop-cap copy and credential facts
- numbered service style rows with thumbnails (no prices): Small Bites, Drop-off Feasts, Onsite Family-Style, The Chef's Table
- `#menu` "Straight outta Jamaica." — tabbed signature menu: Island Classics, From the Sea, Sides & Fusion (no prices): Braised Oxtail, Jerk Chicken, Curry Goat, Ackee & Saltfish, Escovitch Snapper, Brown Stew Snapper, Jerk Salmon, Shrimp Pasta, Jerk Chicken Pasta, Rice & Peas, Sweet Plantains, Festival
- `#reviews` — pull-quote review band, two review cards and the aggregate rating: Gillene Nelson, Donyelle Lark-Hill, Madelyn M
- `#chef` — chef biography, quote and credential chips: Andre, Miss Mavis, Sandals Resorts
- `#flavor-oasis` "Flavor Oasis." — signature tasting-series feature with event artwork, numbered features, latest edition card and event photos: Flavor Oasis, Five-course tasting, Meet the chef, Intimate seating, Live music, Factory 22, Wesley Chapel
- three-step booking process and occasion list: Weddings, Galas, Corporate, Birthdays, Brunches, Tastings
- event photo gallery with Instagram link
- `#faq` — FAQ accordion: Where do you cater?, How much does catering cost?, How far ahead should I book?
- `#quote` — catering quote form (name, email, event date, guest count, event type, message) posting to the Kora forms API, contact cards and map
also: Signature dish names appear in the marquee and again in the tabbed menu panels.
also: The Google rating appears in the hero badge, the facts strip and the reviews score card.
also: The quote form submit script is inline at the end of index.html, not in assets/site.js.

## 404.html → /404
title: Page not found | Dre's Island Food Services
purpose: Platform not-found page (noindex) linking back to the homepage and the phone line.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — business summary for AI crawlers: services, dishes, Flavor Oasis, chef, contact: Flavor Oasis, Small Bites, Drop-off Feasts, Onsite Family-Style, Braised oxtail, jerk chicken  [content]
- `robots.txt` — 101 bytes — too small to hold content
- `sitemap.xml` — sitemap listing the homepage (rewritten at deploy)
- `assets/site.js` — header scroll state, mobile menu, scroll reveal, menu tabs, sticky mobile action bar and the 404 anchor rewrite

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
