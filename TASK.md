# TASK.md — Higgins Digital Labs Phase 4: Cinematic Showcase Replacement

## Objective

This is now the most important phase of the Higgins Digital Labs site.

The current site includes a section titled:

```txt
Real builds, floating in 3D space.
```

This section currently appears on both the Home tab and the Work tab. It needs to be removed from both places and replaced with something significantly more impressive, more cinematic, more immersive, and more aligned with the elite interaction quality of the Lando Norris website.

Do not copy the Lando Norris website directly. Use it only as inspiration for:

- Cinematic interaction quality.
    
- Bold visual storytelling.
    
- High-end page motion.
    
- Immersive scene transitions.
    
- Layered content reveals.
    
- Premium dark UI.
    
- Sharp brand-specific motion.
    
- App-like interaction design.
    

This phase should make Higgins Digital Labs feel less like a nice website and more like an interactive digital experience.

Also remove the hover motion from the **Start a Project** button. It should still look premium, but it should not move, magnetize, jump, pull, tilt, or shift when hovered.

---

# Primary Required Changes

## 1. Remove the “Real builds, floating in 3D space.” Section

Remove this section from:

```txt
Home tab
Work tab
```

Remove:

- The heading “Real builds, floating in 3D space.”
    
- Any matching subtitle/copy.
    
- The floating mockup section attached to it.
    
- Any duplicate use of that section on the Work page.
    
- Any empty spacing left behind.
    
- Any unused component imports if the component becomes unused.
    
- Any unused CSS related only to that removed section.
    

Do not remove project screenshots globally. The real screenshots should still be used in the Work page, but in a more impressive new way.

Do not break the build.

---

## 2. Replace It With a Better Cinematic Feature

Replace the removed section with a new high-end feature called:

```txt
The Transformation Engine
```

This should become one of the most impressive parts of the site.

It should appear on:

```txt
Home page: as a preview/teaser
Work page: as the full cinematic experience
```

The Home version should be shorter and more atmospheric.

The Work version should be the full, immersive interactive showcase.

---

# New Feature: The Transformation Engine

## Concept

The Transformation Engine should visually show how Higgins Digital turns outdated or ordinary websites into premium digital systems.

It should feel like an interactive machine, cinematic workflow, or digital command center.

The user should feel like they are watching a business’s digital presence being rebuilt in real time.

Core idea:

```txt
Input: outdated web presence
Process: structure, design, motion, performance
Output: premium digital system
```

This should be more impressive than floating screenshots.

It should combine:

- Real project screenshots.
    
- Animated interface panels.
    
- Gold diagnostic lines.
    
- Stage-based transformation.
    
- Scroll-triggered reveals.
    
- Motion synced to user progression.
    
- Premium before/after energy.
    
- Dark cinematic visual design.
    
- HD Labs branding.
    

---

# Transformation Engine Content

Use these four stages:

## 01 — Audit

```txt
Weak first impressions, unclear structure, and outdated visuals are identified before design begins.
```

Visual idea:

- Screenshot is scanned by a gold diagnostic line.
    
- Small labels appear:
    
    - First impression
        
    - Navigation
        
    - Visual trust
        
    - Mobile clarity
        
- Red/amber/gold issue markers may appear subtly.
    
- Avoid ugly warning UI. Keep it premium.
    

## 02 — Structure

```txt
The page is rebuilt around hierarchy, clarity, conversion paths, and the way real visitors judge a business online.
```

Visual idea:

- Wireframe blocks align into place.
    
- Navigation and CTA structure snap into a cleaner layout.
    
- Thin lines connect sections.
    
- Content cards move from scattered to organized.
    

## 03 — Interface

```txt
The brand receives a sharper visual system with stronger spacing, modern UI, responsive layouts, and intentional motion.
```

Visual idea:

- Dark premium interface panels slide in.
    
- Screenshot shifts into a refined browser frame.
    
- Gold accents draw across the design.
    
- HD logo appears as a quality seal/watermark.
    

## 04 — Launch

```txt
The site is optimized, domain-ready, mobile-responsive, and prepared to represent the business with confidence.
```

Visual idea:

- Final screenshot locks into a premium frame.
    
- Status indicators light up:
    
    - Responsive
        
    - Domain-ready
        
    - Client-owned source
        
    - Performance-minded
        
    - Quote-ready
        
- A final gold line completes the sequence.
    

---

# Home Page Implementation

On the Home page, remove the old “Real builds, floating in 3D space.” section and replace it with a teaser version:

```txt
The Transformation Engine
```

Suggested headline:

```txt
A cinematic system for turning ordinary websites into premium digital presence.
```

Suggested copy:

```txt
Higgins Digital Labs visualizes the process behind sharper structure, stronger interfaces, and high-performance web systems.
```

CTA:

```txt
View the Engine
```

Clicking the CTA should navigate to the Work page, ideally to the full Transformation Engine section if possible.

Home teaser visual:

- Compact version of the engine.
    
- 3 or 4 layered panels.
    
- Animated gold scan line.
    
- Small HD Labs badge.
    
- One real project screenshot preview if available.
    
- Subtle idle animation.
    
- No generic floating mockup cards.
    

This should feel like a preview of a much larger system.

---

# Work Page Implementation

On the Work page, remove the old “Real builds, floating in 3D space.” section and replace it with the full Transformation Engine.

This should be the most impressive section of the Work page.

## Required Work Page Layout

Create a cinematic section:

```txt
The Transformation Engine
```

Subtitle:

```txt
A scroll-driven look at how Higgins Digital Labs turns outdated web presence into sharper, faster, more credible digital systems.
```

The section should include:

- Sticky/pinned stage navigation on desktop.
    
- Four stages: Audit, Structure, Interface, Launch.
    
- Large animated visual panel.
    
- Real project screenshot integration.
    
- Stage progress indicator.
    
- HD logo or HD Labs marker.
    
- Gold diagnostic motion.
    
- Strong dark navy/gold visual system.
    
- Smooth transitions between stages.
    
- Mobile fallback that stacks stages cleanly.
    

---

# Transformation Engine Interaction Requirements

## Desktop

Use GSAP ScrollTrigger or Framer Motion depending on current architecture.

Preferred:

- Use GSAP ScrollTrigger for scroll-linked stage progression.
    
- Pin the engine section while the four stages progress.
    
- Update active stage based on scroll progress.
    
- Animate visual layers per stage.
    
- Move diagnostic lines, panels, labels, and screenshot frames.
    
- Keep interaction smooth and not overwhelming.
    

Desktop behavior:

- Left side: stage list / progress.
    
- Right side: animated transformation visual.
    
- Or center: massive visual with stage info overlay.
    
- Active stage should be obvious.
    
- Progress should feel intentional.
    
- The section should not trap the user for too long.
    

## Mobile

Do not pin aggressively on mobile.

Mobile behavior:

- Stack stages vertically.
    
- Each stage has its own visual.
    
- Keep animations lighter.
    
- No horizontal overflow.
    
- No scroll trap.
    
- Maintain premium spacing.
    

---

# Visual Direction

This should look like a cinematic digital reconstruction system.

Use visual elements like:

- Browser frames.
    
- Screenshot slices.
    
- Wireframe blocks.
    
- Diagnostic labels.
    
- Thin gold scan lines.
    
- Moving grid lines.
    
- HD logo watermark.
    
- Status chips.
    
- Animated progress rail.
    
- Subtle glass panels.
    
- Transforming layout blocks.
    
- Gold completion line.
    
- Deep navy background.
    
- Soft reflections.
    
- High-contrast typography.
    

Avoid:

- Generic floating cards.
    
- Basic screenshot carousel.
    
- Cheap neon overload.
    
- Random animations.
    
- Overly playful movement.
    
- Fake-looking metrics.
    
- Large empty gaps.
    
- Clutter.
    

---

# New Component Requirements

Create or update components as needed:

```txt
src/components/TransformationEngine.jsx
src/components/TransformationEngine.css
```

Optional supporting components:

```txt
src/components/EngineStageVisual.jsx
src/components/EngineStageVisual.css
src/components/DiagnosticScan.jsx
src/components/DiagnosticScan.css
src/components/StatusChips.jsx
src/components/StatusChips.css
```

If the old floating mockup component is now unused, either remove it or leave it only if used elsewhere. Do not keep unused imports.

---

# Data Requirement

Update or create data in:

```txt
src/data/siteContent.js
```

Add:

```js
export const transformationEngineStages = [
  {
    number: "01",
    title: "Audit",
    copy: "Weak first impressions, unclear structure, and outdated visuals are identified before design begins.",
    tags: ["First impression", "Navigation", "Visual trust", "Mobile clarity"]
  },
  {
    number: "02",
    title: "Structure",
    copy: "The page is rebuilt around hierarchy, clarity, conversion paths, and the way real visitors judge a business online.",
    tags: ["Hierarchy", "CTA paths", "Content flow", "Clarity"]
  },
  {
    number: "03",
    title: "Interface",
    copy: "The brand receives a sharper visual system with stronger spacing, modern UI, responsive layouts, and intentional motion.",
    tags: ["Spacing", "Responsive UI", "Motion", "Brand system"]
  },
  {
    number: "04",
    title: "Launch",
    copy: "The site is optimized, domain-ready, mobile-responsive, and prepared to represent the business with confidence.",
    tags: ["Responsive", "Domain-ready", "Client-owned source", "Performance-minded"]
  }
];
```

Use project screenshot data already available in the project. Prefer screenshots from:

```txt
Higgins Building Group
Wyatt Bullock Photography
Davis Higgins Portfolio
AI Workflow System
```

The engine can rotate between screenshots or use one primary screenshot with layered interface overlays.

---

# More Incredible UI/UX Features to Add in This Phase

In addition to replacing the floating builds section, add the following upgrades.

---

## A. Cinematic Project Focus Mode

On the Work page, project cards/screenshots should support a premium focus mode.

When a user clicks a project card or screenshot:

- Open a full-screen or large cinematic overlay.
    
- Use the project screenshot prominently.
    
- Show project details:
    
    - Project name
        
    - Category
        
    - Problem
        
    - Built
        
    - Outcome
        
    - Status
        
- Add a close button.
    
- Use Framer Motion transition.
    
- Dark glass background.
    
- HD Labs branding.
    
- Cursor should show `VIEW` over clickable screenshots.
    
- Escape key should close the overlay.
    
- Overlay should not break mobile.
    

This should feel like opening a premium case-study preview.

Do not create fake metrics.

Component suggestion:

```txt
src/components/ProjectFocusOverlay.jsx
src/components/ProjectFocusOverlay.css
```

---

## B. Cinematic Page Transition Upgrade

Upgrade page transitions so route changes feel more premium.

Current page transitions may already exist. Improve them without breaking routing.

Add one or more:

- Thin gold line wipe.
    
- HD logo pulse.
    
- Brief “Higgins Digital Labs” micro-label.
    
- Directional blur/slide.
    
- Background darkens slightly during transition.
    

Rules:

- Keep transition fast.
    
- Do not create blank-page bugs.
    
- Do not make navigation feel slow.
    
- Respect reduced motion.
    

---

## C. Interactive Section Index

Add a page-specific mini section index to the Work page and optionally the Home page.

For Work page:

```txt
HDL / WORK
01 — Engine
02 — Projects
03 — Focus
04 — Launch
```

Clicking each item should scroll to the section within the page.

This is allowed even though main tabs are pages. The main nav should remain page-based; this section index is only internal page navigation.

Make it subtle and premium.

---

## D. Engine Status Rail

Inside the Transformation Engine, add a status rail showing progress:

```txt
AUDIT → STRUCTURE → INTERFACE → LAUNCH
```

Requirements:

- Gold progress line fills as the user moves through stages.
    
- Active stage glows subtly.
    
- Completed stages show a small active marker.
    
- On mobile, display as horizontal mini rail above cards.
    

---

## E. HD Labs Microcopy Layer

Add small premium microcopy labels throughout the engine and work page.

Examples:

```txt
HDL PROCESS
INTERFACE RECONSTRUCTION
DIGITAL PRESENCE UPGRADE
SYSTEM CHECK
CLIENT-READY STANDARD
```

These should appear as tiny labels, chips, or corner markers.

Do not overuse them.

---

## F. Screenshot Treatment Upgrade

All project screenshots should look more premium.

Add:

- Browser chrome/frame.
    
- Reflective glass edge.
    
- Subtle shadow.
    
- Gold hairline border.
    
- Soft overlay gradient.
    
- Better object-fit/object-position.
    
- Hover focus state.
    
- Optional small status chip:
    
    - LIVE BUILD
        
    - CASE STUDY
        
    - CLIENT WORK
        
    - LAB FEATURE
        

Do not distort screenshots.

---

## G. Button Interaction Cleanup

Remove hover motion from the **Start a Project** button.

This applies to all Start a Project buttons:

- Header CTA.
    
- Home CTA.
    
- Work CTA.
    
- Pricing CTA.
    
- Start page main CTA.
    

The Start a Project button may still have:

- Color transition.
    
- Border transition.
    
- Glow transition.
    
- Underline/line draw.
    
- Background gradient shift.
    

But it must not have:

- Magnetic pull.
    
- Movement.
    
- Translate.
    
- Scale.
    
- Tilt.
    
- Bounce.
    
- Jump.
    
- Parallax.
    

The hover should feel premium but stable.

Update any magnetic wrapper logic so it excludes Start a Project buttons.

Use a class or attribute such as:

```txt
data-no-magnetic="true"
```

or:

```txt
className="no-motion-cta"
```

---

# Existing Features That Must Not Break

Do not break:

- Multi-page tab/routing system.
    
- Header navigation.
    
- HD logo usage.
    
- Higgins Digital Labs naming.
    
- Custom cursor.
    
- Cursor color/style states.
    
- Sound toggle if already implemented.
    
- Command palette if already implemented.
    
- Live metrics if already implemented.
    
- Loading sequence if already implemented.
    
- Route-specific backgrounds.
    
- Footer moving gold line.
    
- Real project screenshots.
    
- Mobile responsiveness.
    
- Reduced motion.
    
- Vercel build.
    

---

# Implementation Workflow

## Step 1 — Inspect Current App

Run:

```bash
pwd
ls
find . -maxdepth 3 -type f | sed 's#^\./##' | sort | head -350
```

Inspect:

```txt
package.json
src/App.jsx
src/main.jsx
src/components
src/pages
src/sections
src/data
src/assets
public
```

Find:

- Where “Real builds, floating in 3D space.” is rendered.
    
- Whether it is a component, data string, or hardcoded section.
    
- Where it appears on Home and Work.
    
- Where Start a Project buttons are implemented.
    
- Whether magnetic effects wrap those buttons.
    
- Where project screenshots are defined.
    
- Current cursor implementation.
    
- Current route transition implementation.
    

---

## Step 2 — Remove the Old Section

Remove the “Real builds, floating in 3D space.” section from Home and Work.

Ensure:

- No leftover empty spacing.
    
- No unused imports.
    
- No duplicate old section.
    
- No broken layout.
    

---

## Step 3 — Build Transformation Engine

Create:

```txt
TransformationEngine.jsx
TransformationEngine.css
```

Implement:

- `variant="teaser"` for Home.
    
- `variant="full"` for Work.
    

Example usage:

```jsx
<TransformationEngine variant="teaser" />
<TransformationEngine variant="full" />
```

Home teaser should be compact and link to Work.

Work full version should be cinematic and scroll-driven.

---

## Step 4 — Add Scroll/Stage Animation

For the full Work version:

- Use GSAP ScrollTrigger if already used in the project.
    
- Pin on desktop only if stable.
    
- Update active stage through scroll progress.
    
- Animate diagnostic visuals per stage.
    
- Refresh ScrollTrigger after route changes if needed.
    
- Disable pinning on mobile/reduced motion.
    

If GSAP pinning is too risky, use an advanced sticky layout with Framer Motion and IntersectionObserver. It still needs to feel cinematic.

---

## Step 5 — Add Project Focus Overlay

Implement project focus overlay for Work project cards.

Requirements:

- Click screenshot/card opens overlay.
    
- Escape closes overlay.
    
- Close button closes overlay.
    
- Overlay uses Framer Motion.
    
- Uses real screenshot.
    
- Shows project details.
    
- Looks premium.
    
- Mobile safe.
    

---

## Step 6 — Upgrade Screenshot Frames

Create a reusable screenshot frame if helpful:

```txt
ProjectScreenshotFrame.jsx
ProjectScreenshotFrame.css
```

Use it in:

- Transformation Engine.
    
- Work project cards.
    
- Focus overlay.
    
- Any other project screenshot display.
    

---

## Step 7 — Upgrade Page Transitions

Improve existing page transitions if possible.

Do not break routing.

Add:

- Gold line wipe or pulse.
    
- HD logo micro moment.
    
- Fast transition.
    
- Reduced motion fallback.
    

---

## Step 8 — Add Work Page Section Index

Add internal section index for Work page:

```txt
HDL / WORK
01 — Engine
02 — Projects
03 — Focus
04 — Launch
```

Clicking items scrolls within Work page only.

Do not change main nav behavior.

---

## Step 9 — Remove Start a Project Hover Motion

Find all Start a Project buttons and remove movement-based hover/magnetic effects.

Ensure:

- No translate.
    
- No scale.
    
- No tilt.
    
- No magnetic pull.
    
- No jumping.
    

Keep:

- Premium color/glow/border transition.
    

---

## Step 10 — Build and Verify

Run:

```bash
npm run build
```

Fix all errors.

If lint exists:

```bash
npm run lint
```

Fix practical lint errors.

---

# Acceptance Criteria

This phase is complete only when:

- “Real builds, floating in 3D space.” is removed from Home.
    
- “Real builds, floating in 3D space.” is removed from Work.
    
- The new Transformation Engine appears on Home as a teaser.
    
- The new Transformation Engine appears on Work as a full cinematic section.
    
- The Work Transformation Engine uses four stages:
    
    - Audit
        
    - Structure
        
    - Interface
        
    - Launch
        
- The engine feels significantly more impressive than the removed section.
    
- Real screenshots are integrated into the engine or Work visuals.
    
- The engine includes diagnostic lines, status chips, gold progress, HD Labs branding, and premium screenshot frames.
    
- Project Focus Mode works on Work page.
    
- Project screenshots have upgraded premium frames.
    
- Work page has a subtle internal section index.
    
- Page transitions are upgraded without causing blank pages.
    
- Start a Project buttons no longer move on hover.
    
- Start a Project buttons still look premium.
    
- Magnetic effects do not apply to Start a Project buttons.
    
- Custom cursor still works.
    
- Cursor shows VIEW state over project screenshots/cards.
    
- Sound toggle, command palette, loading sequence, live metrics, route backgrounds, and other existing features still work if present.
    
- Mobile layout remains clean.
    
- Reduced motion is respected.
    
- No horizontal overflow.
    
- `npm run build` passes.
    

---

# Final Claude Code Response Format

When finished, respond with:

```txt
Summary:
- What was removed.
- What replaced it.
- Why the new experience is better.

Files changed:
- List every created/modified file.

Transformation Engine:
- Explain Home teaser.
- Explain Work full version.
- Explain stages and animations.

Project Focus Mode:
- Explain how it works.

Screenshot upgrades:
- Explain new frame/treatment.

Start a Project button:
- Confirm hover movement/magnetic effects were removed.

Build result:
- State whether npm run build passed.

Remaining recommended upgrades:
- Short list only.
```

Do not claim completion unless the build passes.

---

# Final Instruction

Make this special.

The removed floating builds section should be replaced with something much more impressive, cinematic, and specific to Higgins Digital Labs.

This should feel like an interactive transformation system, not another screenshot section.

Keep it original. Keep it premium. Keep it aligned with Higgins Digital. Push the site closer to the interaction quality of elite cinematic websites while maintaining usability, performance, and build stability.