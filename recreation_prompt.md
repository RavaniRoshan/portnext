# Prompt: Recreate "The Minimalist Architect" Portfolio Template

**Role:** Expert Frontend Engineer & UI/UX Designer specialized in React, Tailwind CSS, and Framer Motion.

**Objective:** Build a pixel-perfect, single-page personal portfolio website based on the "Roshan" template. The site must feature high-end micro-interactions, seamless transitions, and a strict minimalist aesthetic. The code must be modular, allowing me to easily swap out the Name, Bio, Projects, and Accent Color for a different brand identity.

## 1. Technology Stack & Setup
*   **Framework:** React 19 (ESM Modules via `index.tsx` and `index.html`).
*   **Styling:** Tailwind CSS (injected via CDN in `index.html`).
*   **Animation:** `framer-motion` (v12+).
*   **Icons:** `lucide-react`.
*   **Fonts:** Inter (Body) and Satoshi (Display/Headings).

## 2. Design System (Critical for Pixel-Perfect Replication)
You must use the following Tailwind Configuration in the `<head>` of `index.html`. Do not deviate from these semantic tokens:

```javascript
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
      },
      colors: {
        background: { light: '#FAFAFA', dark: '#111111' },
        surface: { light: '#FFFFFF', dark: '#1A1A1A' },
        text: {
          primary: { light: '#171717', dark: '#EDEDED' },
          secondary: { light: '#525252', dark: '#A3A3A3' },
          muted: { light: '#A3A3A3', dark: '#525252' }
        },
        // CONFIGURABLE: Allow this to be changed easily
        accent: { light: '#4F46E5', dark: '#818CF8' } 
      }
    },
  },
}
```

## 3. Component Architecture & Behaviors

### A. Navigation (`Navigation.tsx`)
*   **Position:** Fixed floating pill at the top-center.
*   **Appearance:** Glassmorphism effect (backdrop-blur) that activates *only* after scrolling 50px. Before scroll, it is transparent.
*   **Interaction:** 
    *   The active section link must have a background pill that slides smoothly to the new active item using Framer Motion `layoutId`.
    *   Include a Theme Toggle (Sun/Moon) with a rotation/scale transition.
*   **Logic:** Implement a scroll spy to auto-update the active state based on viewport position.

### B. Hero Section (`Hero.tsx`)
*   **Typography:** Massive, tight-leading display text (e.g., "AI Engineer & Full-Stack Developer").
*   **Animation:** Staggered entrance. Text slides up and fades in. A horizontal divider line expands from width 0 to 60px.

### C. Selected Work (`Work.tsx`) - *Complex Interaction*
*   **Layout:** Vertical list of projects.
*   **Card Behavior:** 
    *   Clicking a project card expands it into a centralized Modal overlay.
    *   Use `layoutId` on the Title, Description, and Container to seamlessly morph the list item into the modal card.
    *   The background must dim with a backdrop blur when the modal is open.
    *   Disable body scroll when modal is open.
*   **Content:** The modal must show Title, Year, Description, a "Key Features" list (bullet points), Tags, and a Link.

### D. Skills (`Skills.tsx`) - *Spotlight Effect*
*   **Layout:** 3 Columns (Languages, AI Systems, Stack).
*   **Interaction:** 
    *   When hovering over a specific category (e.g., Languages), the other categories must fade out (opacity 0.5) and blur (0.5px).
    *   The items inside the hovered category should translate slightly to the right (`translate-x-1`).

### E. Contact (`Contact.tsx`)
*   **Button:** A "Get in touch" button.
*   **Animation:** On hover, do **not** use a standard drop shadow. Use a pulsating "Inner Glow" animation using `boxShadow`.
    *   *Keyframes:* Oscillate between a tight inner glow and a wider, softer inner glow using the theme's accent color.

## 4. Content Abstraction (For Reusability)
Create a `data.ts` or `constants.ts` file. All specific text content must be stored here so I can change the brand identity easily. Structure it like this:

```typescript
export const BRAND = {
  name: "Your Name",
  title: "Your Job Title",
  bio: "Your short bio...",
  email: "email@example.com",
  socials: [{ label: "GitHub", url: "..." }, ...],
};

export const PROJECTS = [ ... ]; // Array of project objects
export const SKILLS = [ ... ];   // Array of skill categories
```

## 5. Output Requirements
1.  Provide the full code for `index.html` (with styles), `types.ts`, `data.ts` (mock data), `App.tsx`, and all components.
2.  Ensure TypeScript interfaces in `types.ts` match the data structure.
3.  Ensure the "Scroll Spy" logic in `App.tsx` handles the active state of the Navigation correctly.

Generate the solution now.
