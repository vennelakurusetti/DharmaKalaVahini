# Dharma Kala Vahini — Website

> *Serving Society Through Culture | సంస్కృతి ద్వారా సమాజ సేవ*

A bilingual (English / Telugu) website for **Dharma Kala Vahini**, a non-profit organization dedicated to cultural preservation, community welfare, and spiritual initiatives.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Home — hero, about, stats, board members slider |
| `projects.html` | Projects — 3 completed initiatives with photos |
| `join.html` | Join Us — volunteer registration with Google Form |
| `donations.html` | Donations — UPI/QR payment + Google Form |
| `contact.html` | Contact — Email, Instagram DM, WhatsApp |

---

## File Structure

```
dharma-kala-vahini/
│
├── index.html
├── projects.html
├── join.html
├── donations.html
├── contact.html
│
├── style.css          # Shared styles for all pages
├── donations.css      # Donations page styles
├── contact.css        # Contact page styles
├── script.js          # Shared JS — navbar, slider, language toggle
│
└── images/
      logo.png         # Organization logo
      qr-code.jpeg     # UPI payment QR code
      board1.png       # Teja Mullapudi
      board2.png       # Vivek Chowdary
      board3.png       # Nishkal Pamula
      board4.png       # Sirnija Somisetty
      board5.png       # Siri Chowhan
      project_1_1.jpeg
      project_1_2.jpeg
      project_1_3.jpeg
      project_2_1.jpeg
      project_2_2.jpeg
      project_2_3.jpeg
      project_3_1.jpeg
      project_3_2.jpeg
      project_3_3.jpeg
```

---

## Features

- **Bilingual** — English ↔ Telugu toggle on every page
- **Board member slider** — auto-plays with swipe support
- **Animated stats counter** — triggers on scroll
- **UPI donations** — QR code + copy UPI ID button
- **Google Forms** — embedded for volunteer registration and donor details
- **Fully responsive** — works on mobile, tablet, and desktop

---

## Tech Stack

- HTML, CSS, JavaScript — no frameworks, no dependencies
- Google Fonts — Playfair Display, Cormorant Garamond, Noto Serif Telugu
- Google Forms — for data collection

---

## To Customize

- **UPI ID** — update `9182291202@ybl` in `donations.html`
- **WhatsApp** — update number in `contact.html` (`wa.me/91XXXXXXXXXX`)
- **Email** — update `dharmakalavahini@gmail.com` in `contact.html`
- **Board photos** — replace `images/board1.png` through `board5.png`
- **Project photos** — replace `images/project_1_1.jpeg` etc.
- **Google Form links** — update `iframe src` in `join.html` and `donations.html`

---

*© 2024 Dharma Kala Vahini. All rights reserved.*
