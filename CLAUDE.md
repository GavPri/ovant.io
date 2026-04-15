# Ovant.io — Landing Page Project Context

## Project Overview
Landing page for **Ovant.io**, a web development agency targeting small local businesses (cafés, salons, tradespeople, etc.). The site should feel **minimal and premium** — clean, confident, and professional without being flashy.

---

## Brand

- **Agency Name:** Ovant.io
- **Tone:** Minimal, premium, trustworthy. Sharp copy, no filler.
- **Target Client:** Small local businesses who want a professional online presence.
- **Primary Selling Point:** All-in-one package — everything a business needs is included by default.
- **Location:** Not specified / location-agnostic.

---

## Tech Stack

- **Framework:** Next.js
- **Analytics:** Google Analytics (included in every build)
- **Performance Target:** 95+ across all Google PageSpeed Insights metrics on every project.

---

## Services & Pricing

| Package       | Pages    | Price  |
|---------------|----------|--------|
| Landing Page  | 1 page   | €600   |
| Starter Site  | 1–5 pages | €800  |
| Growth Site   | 5–12 pages | €1,200 |

**Every package includes:**
- 95+ Google PageSpeed score (guaranteed)
- Light & dark mode
- Google Analytics integration
- Contact form routed to client's email
- Call-now buttons (mobile-optimised)
- Gallery section for past work
- Testimonials section

---

## Page Structure

The landing page consists of **6 sections in this order:**

### 1. Hero
- **Headline:** Everything your business needs. One website, done right.
- **Subheadline:** Ovant.io builds fast, beautiful websites for local businesses — with analytics, dark mode, contact forms, and more, all included as standard.
- **CTA:** "Get a Free Quote" button (anchors to contact form)

### 2. What's Included
Icon grid showcasing all included features (see services section above). This is the primary differentiator and should be visually prominent.

### 3. How It Works
Three-step process to build trust (no past clients / social proof at this stage):
1. **Tell us about your business** — Hop on a 30 minute call to tell us about your business.
2. **We design & build** — Your site is crafted in Next.js, optimised for performance from day one.
3. **You go live, ready to grow** — Website crafted for performace with analytics, forms, and everything configured.

### 4. Pricing
Three-tier pricing cards. Include a supporting note:
> *All packages include dark mode, Google Analytics, contact forms, call buttons, and a 95+ PageSpeed score — guaranteed.*

### 5. Why Ovant.io
Short trust statement — no social proof, lead with philosophy and quality:
> We don't bolt on features after the fact. Every Ovant.io site is built from the ground up to be fast, complete, and ready for real business. No plugins. No shortcuts.

### 6. Contact Form
Fields: Name, Business Name, Email, Package Interest (dropdown), Message.
- **Heading:** Ready to get started?
- **Subtext:** Tell us a little about your business and we'll get back to you within 24 hours.
- No phone number — email/form only.

---

## Design Direction

- **Style:** Minimal and premium. Think clean whitespace, strong typography, subtle contrasts.
- **Colour scheme:** Support both light and dark modes.
- **No testimonials or portfolio content yet** — these sections are built but can be populated later.
- Avoid generic "agency" aesthetics — no stock photos of laptops or handshakes.

---

## Notes for Development

- The site itself should demonstrate the product: fast, performant, beautiful.
- PSI scores on the finished landing page should reflect the 95+ guarantee Ovant.io offers clients.
- Contact form should be wired to send submissions to the owner's email.
- Google Analytics tag should be added during build.
- All sections should have appropriate `id` anchors for smooth scroll navigation.