<!-- Design decision for Dre's Island Food Services (DEV). Source: Claude Code homepage concept B - Coastal Editorial,
     rebuilt as static HTML for Kora (homepage + 404). Concept file: homepage-variants/variant-b-coastal-editorial.html -->

# DESIGN.md: Dre's Island Food Services

archetype: coastal-editorial
interaction_level: L2
light_only: true   # owner decision: no dark design / no dark mode

typography:
  display: "Newsreader"
  body: "Plus Jakarta Sans"

palette:
  primary: "#B4452A"
  secondary: "#FFFBF4"
  accent: "#F2A93B"
  application: |
    Warm cream #FFFBF4 ground with sand #F3E8D6 and mango-soft #FCE9C8 bands, ink #231F1A text, terracotta #B4452A as the action/emphasis colour, mango #F2A93B as the highlight, palm #2E5B45 sparingly. Newsreader display (upright; emphasis words in terracotta, no italics), Plus Jakarta Sans body. Light design only, no dark mode. Rounded 18px cards, pill buttons, numbered section kickers.

composition: |
  Oversized editorial hero headline over a three-photo food collage with a rotating '5.0 Google' badge; dish-name marquee; numbered service rows with thumbnails; tabbed signature menu on white plates; mango pull-quote review band; terracotta-framed chef portrait; sticky Call / Request a Quote bar on mobile.

content_rules:
  - Hero leads with food (whole red snapper with orchids).
  - Quote-only: never show prices. Four service styles: Small Bites, Drop-off Feasts, Onsite Family-Style, The Chef's Table.
  - Catering only: no jerk-sauce shop section and no link to dresislandflava.com.
  - Flavor Oasis (owner-approved 2026-10-09): signature tasting-series section (#flavor-oasis) built from the Eventbrite listing; 2nd edition Sat Aug 1, 2026, Factory 22 Wesley Chapel. Past event: CTAs ask about the next edition / private tastings.
  - "Chef Dre" throughout; introduced once as Andre "Dre" Christie.
  - Reviews: Gillene Nelson, Donyelle Lark-Hill, Madelyn M. (Google); 5.0 from 15 Google reviews. Trims are marked with an ellipsis.
  - Quote form fields: name*, email*, event date, guest count, event type, message (no package field). Posts to the Kora forms API (form_type catering_quote) with reCAPTCHA v2.
  - Contact: (772) 475-4460, info@dresislandfoodservices.com, 15029 14th St, Dade City, FL 33523, hours "By appointment", Google map embed + directions link.

files:
  - index.html / 404.html share byte-identical kora:shell header/footer blocks.
  - src/input.css holds @theme tokens and the page CSS in @layer components; assets/styles.css is compiled at deploy.
  - assets/site.js: header state, mobile menu, reveal, tabs, mobile action bar, 404 anchor rewrite.
  - All images are local WebP in assets/img (full + -sm 800w); logos are PNG in assets/logo.
