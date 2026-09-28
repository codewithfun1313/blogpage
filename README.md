# Sanctuary & Mind — Modern Responsive Holistic Blog

A modern, responsive blog platform featuring comprehensive category navigation, interactive reading modals, dark/light themes, and an integrated **Resources & Offerings** hub inspired by the Optimal Happiness blog framework.

---

## ✨ Features & Architecture

### 1. Categories Implemented as Dedicated Tabs
All required categories are implemented with dynamic filtering, active pill animations, count badges, and horizontal scrolling:
* **Healing**
* **Spirituality**
* **Lifestyle and wellness**
* **Women**
* **Ancestral healing**
* **Literature and movies**
* **Religion and mythology**
* **Culture**
* **Psychology**
* **Philosophy**
* **Relationships**
* **Miscellaneous**
* **Resources & Offerings** (Highlighted Hub Tab)
* *(Note: **Musings** tab has been removed as specified)*

### 2. Resources & Offerings Hub (Modeled after Optimal Happiness)
Located directly beneath the blog articles and accessible via the category tabs:
* **Free Resources**:
  - *The Ancestral Lineage & Somatic Harmony Workbook* (PDF download modal)
  - *7 Sacred Contemplations Audio Meditation Series* (with 432Hz sample player)
  - *Holistic Archetype & Wellness Diagnostic Quiz* (interactive 3-step quiz)
* **Sacred Offerings & Containers**:
  - *1-on-1 Ancestral & Somatic Restorative Immersion* (90-min session booking modal)
  - *The Sovereign Mind: 6-Week Contemplative Mentorship*
  - *Women's Infradian Rhythm & Sacred Council*

### 3. Modern Design System & Interactivity
- **Tailwind CSS**: Modern typography, custom warm stone/amber palette, frosted glassmorphism, responsive grid.
- **Full Reading Modal**: Distraction-free reading view with author credentials, tags, pull quotes, social share, and bookmarking.
- **Bookmarks Sanctuary**: Save favorite articles locally in `localStorage`.
- **Live Search**: Instant real-time filtering across titles, excerpts, tags, and category names.
- **Dark & Light Mode**: Seamless theme toggle with ambient gradient lighting.

---

## 🚀 How to Run Locally

You can simply open `index.html` directly in any web browser, or serve it locally:

```bash
# Using Python
python -m http.server 8080

# Using Node.js npx serve
npx -y serve .
```

Then visit: [http://localhost:8080](http://localhost:8080)
