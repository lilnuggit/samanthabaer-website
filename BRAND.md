# Samantha Baer Brand System

## Brand Essence
**Bold. Modern. Elevated.**

A premium equestrian brand that combines athletic dynamism with refined luxury. We're not your grandmother's riding academy — we're the future of equestrian education.

## Voice & Tone
- Confident but not arrogant
- Expert but accessible  
- Direct and action-oriented
- Warm when personal, bold when professional

## Color Palette

### Primary
- **Charcoal** `#3D4450` — Primary backgrounds, text
- **Gold** `#C9A962` — Accent, CTAs, highlights
- **Cream** `#F5F5F0` — Light backgrounds, text on dark

### Secondary
- **Slate** `#4A5568` — Secondary text, subtle elements
- **Deep Black** `#1A1D23` — Hero overlays, dramatic sections
- **White** `#FFFFFF` — Cards, clean sections

### Usage Rules
- Gold is precious — use sparingly for maximum impact
- High contrast always (accessibility + boldness)
- Dark sections = drama, light sections = breathing room

## Typography

### Headings: Cormorant Garamond
- Elegant serif with sharp details
- Use **Semibold (600)** or **Bold (700)** — never light
- Generous letter-spacing on smaller headings
- ALL CAPS for labels/eyebrows only

### Body: Inter
- Clean, modern sans-serif
- Regular (400) for body, Medium (500) for emphasis
- 1.6-1.8 line height for readability

### Type Scale
- Hero: 5xl-7xl (48-72px) — bold statements
- Section headings: 3xl-4xl (30-36px)
- Card headings: xl-2xl (20-24px)
- Body: base-lg (16-18px)
- Labels/small: sm (14px), uppercase, tracked

## Layout Principles

### Spacing
- Generous whitespace = luxury feel
- Section padding: py-24 (96px) minimum
- Content max-width: 6xl (1152px) for readability
- Grid gaps: 8-12 (32-48px)

### Visual Rhythm
- Alternate dark/light sections for drama
- Use full-bleed images with bold overlays
- Asymmetric layouts feel more dynamic

## Components

### Buttons
**Primary (Gold)**
```
bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90
```
- Bold, confident, no rounded corners (sharp = modern)
- Generous padding

**Secondary (Outline)**
```
border border-cream/30 text-cream px-8 py-4 font-medium hover:bg-cream/10
```
- Use on dark backgrounds

**Ghost (Text link)**
```
text-gold font-medium inline-flex items-center gap-2 hover:gap-3 transition-all
```
- Arrow animates on hover

### Cards
- Sharp corners (no border-radius)
- Subtle shadow: `shadow-sm hover:shadow-md`
- Clean white background on cream sections
- Dark cards on dark sections with `bg-slate/20`

### Images
- Full-bleed when possible
- Dark gradient overlays: `from-charcoal/70 via-charcoal/50 to-charcoal/80`
- object-cover, never distort
- Lazy load with blur placeholder

### Section Patterns

**Hero (Dark)**
- Full viewport height (min-h-[90vh])
- Background image with gradient overlay
- Centered text, bold headline
- Two CTAs max

**Content (Light)**
- Cream or white background
- Max-width container
- Generous padding

**Feature Grid**
- 3-column on desktop, stack on mobile
- Icon + heading + description + link
- Cards with hover states

**Split (Image + Text)**
- 50/50 grid
- Image full-height
- Text side with comfortable padding

**CTA Band (Gold)**
- Full-width gold background
- High contrast dark text
- Single focused action

## Imagery Guidelines

### Photo Style
- High-quality action shots
- Natural lighting preferred
- Focus on horse-rider connection
- Professional but not stiff

### Overlays
- Always use gradient overlays on hero images
- Ensure text contrast meets WCAG AA
- Dark overlays: 60-80% opacity

## Animation & Interaction

### Micro-interactions
- Button hover: subtle background shift
- Links: arrow/icon movement
- Cards: shadow elevation on hover

### Transitions
- Default: `transition-all` or `transition-colors`
- Duration: 150-300ms
- Easing: default (ease)

### Scroll Behavior
- Smooth scroll for anchor links
- Consider subtle fade-in on scroll (future)

## Do's and Don'ts

### Do
✓ Use bold, confident headlines
✓ Let images breathe with overlays
✓ Maintain high contrast
✓ Keep CTAs clear and actionable
✓ Use whitespace generously

### Don't
✗ Overuse gold (it loses impact)
✗ Use rounded corners (stay sharp)
✗ Crowd content together
✗ Use light text on light backgrounds
✗ Make everything "luxury" — balance with bold energy
