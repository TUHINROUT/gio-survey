# Shrihari Geo Services – Website (Next.js 14, App Router)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
```
app/            pages (/, /about, /services, /services/[slug], /projects, /industries, /insights, /contact), api/contact
components/     Header, Footer, Logo, Icon, Photo, Bits (SectionHead, PageHero, Cta, IconCard), ContactForm
data/           site.js (contact, nav, content) and services.js (all 10 services) – edit text here
public/images/  put photos here (see below)
```

## Images
Photos from your profile are already in `public/images/`. Still missing (brand gradient shows): railway, highway, dam, wildlife. Add JPGs with those names to fill them.
Logo: `public/logo.png` (transparent) and `public/logo-card.jpg` (footer); favicon is `app/icon.png`.

## Contact form
`app/api/contact/route.js` validates and logs enquiries. Add Resend/Nodemailer there to receive emails.
"# geo" 
"# gio-survey" 
