```
TASK.md — Higgins Digital Labs Phase 5: Cinematic Systems Upgrade## ObjectiveThis is the next major evolution of Higgins Digital Labs.The current site is already strong, but it still needs significantly more detail, better storytelling, more unique animations, and more “elite interactive site” implementation quality. The biggest current weakness is that the Transformation Engine does not actually feel like a real transformation system yet. It currently feels more like a styled section than a living reconstruction experience.This phase must upgrade Higgins Digital Labs into a more immersive, more original, more premium, more cinematic digital product.The site should remain original to Higgins Digital Labs, but the execution quality, motion ambition, scene transitions, and immersive interaction level should move noticeably closer to what makes a site like the Lando Norris website feel special.Do **not** copy the Lando Norris website directly. Use it only as inspiration for:- cinematic scene progression- sharper visual storytelling- stronger route transitions- layered motion- immersive section reveals- premium micro-interactions- interface systems that feel alive- a site that feels more like an experience than a normal websiteThis phase must implement **all** of the following ideas:1. Transformation Engine visual changes per stage  3. Before/after slider for HBG  4. Rebuild Timeline  5. Interface Deconstruction hover effects  6. Cinematic project open animation  8. HD Labs OS aesthetic  9. Route transition module switch behavior  11. Project-specific color moods  12. Services motion map  15. Scene-based Home page  16. Animated Higgins Digital Labs wordmark interactions  18. Scroll-synced screenshot slicing  20. Labs Manifesto micro-page or overlayIn addition, this phase must also fix the custom cursor lag:- The custom cursor currently trails behind too much.- It must be made as close to instant and in-line with the user’s real mouse position as possible.- Cursor movement should feel tight, responsive, and premium.- It should not feel floaty or delayed.---## Core GoalsBy the end of this phase, Higgins Digital Labs should feel like:- a premium experimental product- an interactive digital operating system for website transformation- a more cinematic experience- a clearer representation of how Higgins Digital thinks- a site with stronger page identity and more memorable motion systemsThis phase should especially improve:- the Transformation Engine- the Work page- the Home page- the Services page- overall storytelling- micro-interaction quality- route changes- UI detail density- visual variety across pages---## Existing Architecture to PreserveDo **not** break the current foundation unless replacing it with something clearly better and stable.Preserve and build on:- current multi-page/tab page architecture- Higgins Digital Labs naming- HD logo usage- current routing structure- existing page transitions (upgrade them, do not break them)- custom cursor system (improve it)- command palette if it already exists- sound toggle if it already exists- loading sequence if it already exists- route-specific backgrounds if they already exist- real project screenshots- mobile responsiveness- reduced-motion safety- Vercel build compatibility---## Technical StackUse the existing app architecture and libraries already in the project.Expected stack:- React- Vite- React Router or current routing solution- Framer Motion- GSAP- ScrollTrigger- Lenis- CSS / CSS Modules / current styling systemDo not add large unnecessary dependencies.If a helper utility is needed, keep it lightweight and easy to maintain.---# Part 1 — Transformation Engine Must Actually Transform## ProblemThe current Transformation Engine is not convincing enough because it visually shows too much of the same thing and does not clearly evolve from weak/original website to structured/rebuilt website to final polished output.## GoalRebuild the Transformation Engine so that each of the four stages has a clearly different visual state and the progression feels real.The user should feel like they are watching a website get reconstructed.---## Required Stages### Stage 01 — AuditShow the original / outdated / weaker site state.This stage should feel diagnostic.Content idea:- weaker first impression- unclear hierarchy- outdated visuals- mobile clarity issues- unclear CTA placementVisual behavior:- show the older/original HBG site state- a gold scan line passes across the interface- diagnostic pins/labels appear around the layout- certain areas are subtly highlighted as weak points- layout feels flatter / less refined- screenshot may be slightly dimmer or more neutral than later stages- do not put large info text inside the image itself unless the site already overlays labels externally### Stage 02 — StructureShow the site being rebuilt into a stronger layout.Visual behavior:- the old interface transitions into a wireframe / layout-structure system- sections break into blocks- navigation, hero, service areas, CTA regions, and page flow become clearer- thin gold / white linework organizes the layout- cards and blocks align into place- this should feel like the architecture of the page is being corrected### Stage 03 — InterfaceShow the wireframe / structure becoming a premium visual interface.Visual behavior:- color and visual polish fade in- typography becomes stronger- spacing becomes cleaner- refined browser frame appears- modern UI details come in- premium dark / gold / navy system feels more intentional- motion and polish appear- this should feel like the “design system being applied”### Stage 04 — LaunchShow the final polished HBG website.Visual behavior:- the final site should look finished, premium, and production-ready- status indicators can light up around the page externally or in overlay UI:  - responsive  - domain-ready  - client-owned source  - performance-minded  - quote-ready- final image sits in a premium browser frame- final line/scan/progress indicator completes- the stage should clearly feel like the finished product---## Required ImplementationCreate or upgrade a transformation engine component:- `src/components/TransformationEngine.jsx`- `src/components/TransformationEngine.css`Use real project assets for HBG stage visuals.The engine should support:- stage-aware visuals- different visual state per stage- scroll progression or controlled staged progression- desktop cinematic mode- mobile stacked modeUse data-driven structure if possible.Add to `src/data/siteContent.js` or a dedicated transformation data file:```jsexport const transformationEngineStages = [  {    number: "01",    title: "Audit",    description: "Weak first impressions, unclear structure, and outdated visuals are identified before design begins."  },  {    number: "02",    title: "Structure",    description: "The page is rebuilt around hierarchy, clarity, conversion paths, and the way real visitors judge a business online."  },  {    number: "03",    title: "Interface",    description: "The brand receives a sharper visual system with stronger spacing, modern UI, responsive layouts, and intentional motion."  },  {    number: "04",    title: "Launch",    description: "The site is optimized, domain-ready, mobile-responsive, and prepared to represent the business with confidence."  }];
```

---

# Part 2 — Before/After Slider for HBG

## Goal

Add a true before/after comparison module for the Higgins Building Group project.

This should be one of the clearest value-demonstration tools on the site.

## Required Behavior

- vertical draggable slider
- left side = before
- right side = after
- gold divider handle
- clear premium styling
- cursor changes to `DRAG` over the slider
- smooth drag behavior
- mobile fallback:
    - either drag still works well
    - or a clean Before / After toggle

## Placement

Place this in the Work page, likely near the HBG project or within the HBG project focus experience.

## Suggested Component

- `src/components/BeforeAfterSlider.jsx`
- `src/components/BeforeAfterSlider.css`

Use real HBG before and after images if available.

---

# Part 3 — Rebuild Timeline

## Goal

Replace or supplement generic project presentation with a more cinematic, story-driven “Rebuild Timeline.”

This should make Work feel more like a transformation narrative instead of a gallery.

## Required Steps

Timeline content:

1. Intake
2. Audit
3. Direction
4. Interface
5. Build
6. Launch

## Visual Behavior

- a vertical or diagonal gold timeline
- each stage activates when scrolled into view
- supporting visual fragments appear around the timeline
- cards or panels slide in with motion
- thin line connectors
- system-style labels
- status lighting / activation cues
- HD Labs micro labels

## Placement

Work page.

## Suggested Component

- `src/components/RebuildTimeline.jsx`
- `src/components/RebuildTimeline.css`

---

# Part 4 — Interface Deconstruction Hover Effects

## Goal

When hovering a project screenshot/card, visually separate the interface into layers.

This should show that Higgins Digital understands structure, not just surface styling.

## Required Behavior

For important project visuals:

- background layer
- nav layer
- hero layer
- content layer
- CTA layer
- footer layer

On hover:

- layers subtly separate in depth
- slight 3D translation / layered shift
- subtle light change
- cursor should show `VIEW`
- effect should remain premium and not excessive

Do this primarily for Work page project cards and/or screenshots.

## Suggested Component / Utility

- `src/components/DeconstructedScreenshot.jsx`
- `src/components/DeconstructedScreenshot.css`

If reusable, wrap project screenshot presentations in this system.

---

# Part 5 — Cinematic Project Open Animation

## Goal

Project opening should feel far more premium than a normal modal.

## Required Behavior

When user clicks a project:

- project screenshot/card expands from its place into a cinematic overlay
- overlay darkens the background
- screenshot transitions into a featured hero visual
- gold border / line can draw around the presentation
- project details appear in choreographed motion
- close animation should reverse cleanly
- Escape closes overlay
- mobile must remain usable

## Required Project Detail Content

For each project:

- Project name
- Category
- Problem
- Built
- Outcome
- Status

Do not invent fake metrics.

## Suggested Component

- `src/components/ProjectFocusOverlay.jsx`
- `src/components/ProjectFocusOverlay.css`

---

# Part 6 — HD Labs OS Aesthetic

## Goal

Make the site feel more like a digital operating system for web transformation.

This is not meant to become cheesy or overloaded. It should be subtle, premium, and consistent.

## Required UI Language / Micro Labels

Use micro labels like:

- `HDL_OS v5.0`
- `MOTION ENGINE: ACTIVE`
- `TRANSFORMATION PIPELINE: READY`
- `INTERFACE SYSTEM: ONLINE`
- `CLIENT-READY STANDARD`
- `CURRENT MODULE`
- `SYSTEM CHECK`

## Placement

Use selectively in:

- Transformation Engine
- Work page
- route transitions
- Home scenes
- Services motion map
- command palette hints if useful

Do not overuse them.

## Implementation

Work these into the visual system through small microcopy labels, chips, corners, status rows, etc.

---

# Part 7 — Route Transition Module Switch Behavior

## Goal

When switching pages/tabs, route changes should feel like switching modules in a system.

## Required Behavior

Instead of only a fade/slide, add a module-switch feel:

Examples of transition labels:

- `HDL / WORK MODULE`
- `HDL / SERVICES MODULE`
- `HDL / PRICING MODULE`
- `TRANSFORMATION ENGINE ONLINE`
- `LOADING SERVICES MAP`
- `ENTERING LABS MANIFESTO`

## Visual Behavior

- fast gold scan line or wipe
- HD logo pulse or glimmer
- darkened micro-transition overlay
- quick system label
- page enters cleanly after

## Requirements

- transitions must remain fast
- no blank page issues
- no excessive wait
- reduced-motion fallback required

Upgrade existing page transitions instead of replacing them recklessly.

---

# Part 8 — Project-Specific Color Moods

## Goal

Each project should influence its visual environment slightly.

This makes Work feel more immersive and less repetitive.

## Required Moods

### Higgins Building Group

- navy / gold luxury
- warm wood / homebuilder confidence

### Wyatt Bullock Photography

- black / white / elegant photography mood
- high contrast

### Davis Higgins Portfolio

- blue / gold / personal brand clean tech feel

### AI Workflow System

- darker technical mood
- electric blue / intelligent systems energy

## Implementation

When hovering/selecting/focusing a project:

- subtle background lighting shifts
- accent glow changes slightly
- color tone of surrounding UI reacts slightly

Do not change the whole site drastically. Keep it subtle and premium.

---

# Part 9 — Services Motion Map

## Goal

Replace or upgrade standard Services presentation into a connected system map.

## Services to Represent

- Website Development
- Brand Systems
- Modern UX
- Performance Optimization
- Domain Transition Support
- Conversion Paths
- Client-Owned Source Code
- SEO-Ready Structure

## Visual Concept

A connected node map.

Example logic:

Website Development  
↓  
Brand Systems → Modern UX → Conversion Paths  
↓  
Performance Optimization → Domain Transition → Client-Owned Source

## Required Behavior

- nodes connect with animated lines
- user hovers nodes
- active service becomes emphasized
- connected services animate in relation
- description panel updates
- lines glow or animate
- this should feel like a digital systems map

## Placement

Services page.

## Suggested Component

- `src/components/ServicesMotionMap.jsx`
- `src/components/ServicesMotionMap.css`

---

# Part 10 — Scene-Based Home Page

## Goal

Home should feel more like a progression of cinematic scenes rather than just stacked sections.

## Required Scene Structure

### Scene 01 — The Lab

Purpose:  
Introduce Higgins Digital Labs as an experimental environment.

Visual ideas:

- HD Labs identity
- premium wordmark animation
- subtle lab-like background
- system boot / current module language if it fits

### Scene 02 — The Engine

Purpose:  
Show the transformation system.

Visual ideas:

- teaser version of Transformation Engine
- system labels
- motion cues
- route into Work page

### Scene 03 — The Output

Purpose:  
Show what the lab produces.

Visual ideas:

- premium final websites
- client-ready systems
- launch standards
- CTA to Work / Start a Project

## Requirements

Each scene should have:

- distinct visual identity
- strong transitions between scenes
- different content emphasis
- route-consistent styling

---

# Part 11 — Animated Higgins Digital Labs Wordmark Interactions

## Goal

The Higgins Digital Labs wordmark should feel more alive and special.

## Required Behavior

Use this in a few key places, not everywhere.

Possible interactions:

- letters subtly separate then lock into place
- gold scan line moves across the wordmark
- `Experimental Interface Systems` appears beneath on hover or reveal
- HD logo glimmers once during load or reveal
- wordmark can animate on hero entry

## Suggested Placement

- Home scene 01
- header brand area
- Labs Manifesto overlay
- route transition micro moments

Keep it subtle and premium.

---

# Part 12 — Scroll-Synced Screenshot Slicing

## Goal

Add a high-end visual effect where screenshots slice and reassemble through scroll.

## Required Behavior

For selected visuals on Work page:

- screenshot breaks into horizontal slices
- slices shift subtly
- text or linework can move between slices
- slices reassemble into a final clean image
- effect should feel cinematic, not glitchy
- use sparingly and only where it strengthens the storytelling

## Suggested Placement

- Work page
- possibly within Transformation Engine or project focus overlay

## Suggested Component

- `src/components/SlicedScreenshotReveal.jsx`
- `src/components/SlicedScreenshotReveal.css`

---

# Part 13 — Labs Manifesto Micro-Page or Overlay

## Goal

Create a dedicated premium Labs Manifesto experience.

This can be a route or overlay. It must feel like a special internal system page.

## Preferred Access

- command palette command
- possible subtle trigger from About page
- optional button or micro-link in header / footer / About page

## Required Content

Core manifesto lines:

- Clarity before decoration.
- Motion with purpose.
- Performance as a feature.
- Trust as the outcome.

You may also include:

- Higgins Digital is the client-facing studio.
- Higgins Digital Labs is the experimental interface environment where new motion, layout, and conversion systems are tested before becoming client-ready.

## Required Behavior

- opens as a sleek overlay or dedicated micro-page
- premium entrance animation
- HD Labs wordmark interaction can appear here
- dark premium presentation
- close cleanly if overlay
- keyboard accessible
- Escape closes if overlay

## Suggested Component

- `src/components/LabsManifestoOverlay.jsx`
- `src/components/LabsManifestoOverlay.css`

or a dedicated route/page if cleaner.

---

# Part 14 — Custom Cursor Must Become Instant

## Problem

The custom cursor is currently too slow and trails behind the real mouse.

## Goal

Make the cursor feel nearly locked to the user’s pointer.

## Required Behavior

- cursor should move much faster and more tightly
- reduce lag significantly
- minimize smoothing delay
- keep it premium but responsive
- do not let it feel floaty
- do not break existing cursor states

## Requirements

- desktop only
- still disabled on touch/mobile devices
- keep all current cursor states, improving them if needed:
    - VIEW
    - DRAG
    - START
    - COMMAND
    - VISIT
    - AUDIO
    - LAB
- if current logic uses too much interpolation, reduce it
- if current logic uses requestAnimationFrame smoothing, tighten it aggressively
- prioritize pointer accuracy over dramatic lagged motion

## Suggested Technical Direction

Inspect current cursor implementation and optimize:

- movement calculations
- interpolation factor
- animation frame updates
- CSS transform timing
- transition durations

Potential strategies:

- make the primary cursor dot effectively instant
- if a secondary ring/trail exists, it can remain slightly softer
- but the main cursor position must feel immediate

Do not allow the main visible cursor to noticeably lag behind the actual mouse.

---

# Required File / Component Targets

These are suggested targets. Adapt to the existing project structure if needed.

## Likely Files to Create or Update

- `src/components/TransformationEngine.jsx`
- `src/components/TransformationEngine.css`
- `src/components/BeforeAfterSlider.jsx`
- `src/components/BeforeAfterSlider.css`
- `src/components/RebuildTimeline.jsx`
- `src/components/RebuildTimeline.css`
- `src/components/DeconstructedScreenshot.jsx`
- `src/components/DeconstructedScreenshot.css`
- `src/components/ProjectFocusOverlay.jsx`
- `src/components/ProjectFocusOverlay.css`
- `src/components/ServicesMotionMap.jsx`
- `src/components/ServicesMotionMap.css`
- `src/components/SlicedScreenshotReveal.jsx`
- `src/components/SlicedScreenshotReveal.css`
- `src/components/LabsManifestoOverlay.jsx`
- `src/components/LabsManifestoOverlay.css`

Likely files to update:

- `src/components/CustomCursor.jsx`
- `src/components/CustomCursor.css`
- `src/components/PageTransition.jsx`
- `src/components/PageTransition.css`
- `src/components/Header.jsx`
- `src/components/Header.css`
- `src/pages/HomePage.jsx`
- `src/pages/HomePage.css`
- `src/pages/WorkPage.jsx`
- `src/pages/WorkPage.css`
- `src/pages/ServicesPage.jsx`
- `src/pages/ServicesPage.css`
- `src/pages/AboutPage.jsx`
- `src/pages/AboutPage.css`
- `src/data/siteContent.js`
- `src/App.jsx`

Do not force this exact structure if the app already has a better pattern, but organize the code cleanly.

---

# Data Requirements

Update `src/data/siteContent.js` to support the new systems.

Add or expand:

- transformationEngineStages
- rebuild timeline steps
- services map nodes
- manifesto content
- route transition labels
- project-specific mood metadata
- project detail content
- cursor label metadata if needed

Possible structure:

```
export const labsManifesto = [  "Clarity before decoration.",  "Motion with purpose.",  "Performance as a feature.",  "Trust as the outcome."];
```

```
export const rebuildTimelineSteps = [  "Intake",  "Audit",  "Direction",  "Interface",  "Build",  "Launch"];
```

```
export const routeModuleLabels = {  "/": "HDL / HOME MODULE",  "/work": "HDL / WORK MODULE",  "/services": "HDL / SERVICES MODULE",  "/about": "HDL / ABOUT MODULE",  "/pricing": "HDL / PRICING MODULE",  "/start": "HDL / START MODULE"};
```

---

# Implementation Workflow for Claude Code

## Step 1 — Inspect Current Project

Before editing, inspect the repo carefully.

Run:

```
pwdlsfind . -maxdepth 3 -type f | sed 's#^\./##' | sort | head -350
```

Inspect:

- `package.json`
- `src/App.jsx`
- `src/main.jsx`
- `src/components`
- `src/pages`
- `src/data`
- `src/assets`
- `public`

Identify:

- how current Transformation Engine works
- how cursor is currently implemented
- how page transitions currently work
- how project screenshots are currently managed
- how Work page is structured
- how Services page is structured
- where command palette hooks into the app
- whether manifesto overlay already exists in some form

Do not assume anything. Read the real code first.

---

## Step 2 — Plan Before Editing

Make a short internal plan before touching files.

Plan should include:

1. which existing systems to upgrade
2. which new components to create
3. where each requested idea will live
4. how to preserve build stability
5. how to keep mobile safe

---

## Step 3 — Upgrade Transformation Engine First

This is the highest-priority system.

Implement:

- different visual state per stage
- meaningful progression
- stronger Work page version
- Home teaser version
- integration with HBG assets
- scroll/stage logic
- mobile fallback

Do not leave it as “same image in every stage.”

---

## Step 4 — Add HBG Before/After Slider

Implement cleanly with real assets.

Ensure:

- drag works
- cursor changes to DRAG
- mobile works
- it looks premium

---

## Step 5 — Upgrade Work Page

Implement:

- Rebuild Timeline
- interface deconstruction hover
- cinematic project open overlay
- project-specific color moods
- screenshot slicing
- improved project presentation

Work page should become one of the strongest pages on the entire site.

---

## Step 6 — Upgrade Services Page

Implement:

- Services Motion Map
- connected node logic
- active service interaction
- supporting copy panel
- animated line system

---

## Step 7 — Upgrade Home Page

Implement:

- 3-scene home structure
- stronger scene transitions
- transformation engine teaser
- output scene
- wordmark animation

---

## Step 8 — Add Labs Manifesto Experience

Implement the manifesto overlay or micro-page.

Make it polished and intentional.

Integrate with command palette and/or About page.

---

## Step 9 — Upgrade Route Transitions and OS Aesthetic

Implement:

- module-switch transition micro-moments
- system labels
- route labels
- premium fast transitions
- HD Labs OS aesthetic details

---

## Step 10 — Fix Cursor Responsiveness

This is a direct functional requirement.

The cursor must become much faster and more accurate.

Verify:

- desktop only
- no double cursor
- no performance degradation
- existing hover states still work
- main cursor position no longer feels laggy

---

## Step 11 — Polish and Verify

After implementation, review:

- page spacing
- z-index layers
- route transitions
- mobile layouts
- reduced motion
- cursor speed
- scroll behavior
- build stability
- overlay interactions
- close states
- keyboard support where applicable

---

## Step 12 — Build and Fix Errors

Run:

```
npm run build
```

If lint exists, also run:

```
npm run lint
```

Fix all meaningful errors before finishing.

Do not claim completion unless build passes.

---

# Acceptance Criteria

This phase is complete only when all of the following are true:

## Transformation Engine

- each stage has a clearly different visual state
- it no longer shows basically the same HBG image through every stage
- the progression feels like an actual transformation

## Before/After Slider

- HBG before/after slider exists
- drag works
- cursor changes to DRAG
- mobile works

## Rebuild Timeline

- Work page includes a cinematic rebuild timeline
- steps activate clearly
- it feels story-driven

## Interface Deconstruction

- project visuals support layered deconstruction hover behavior
- effect feels premium

## Project Overlay

- clicking a project opens a cinematic overlay
- transition is polished
- close works cleanly
- mobile works

## HD Labs OS Aesthetic

- site has more premium system-language details
- micro labels feel intentional, not spammy

## Route Transitions

- route transitions feel more like module changes
- they remain fast and stable
- no blank page issue

## Project Color Moods

- project-specific accent moods exist
- they are subtle and premium

## Services Motion Map

- Services page uses a connected system map
- hover logic and line animation work

## Home Page

- Home page is restructured into scenes
- scenes feel distinct and cinematic

## Wordmark Interactions

- Higgins Digital Labs wordmark has premium animated behavior in key places

## Screenshot Slicing

- selected screenshots use scroll-synced slicing effect
- effect feels cinematic, not gimmicky

## Labs Manifesto

- manifesto overlay or micro-page exists
- it is accessible via intended triggers
- it looks premium

## Cursor

- cursor feels much faster and nearly locked to the pointer
- noticeable lag is removed
- states still work
- mobile still disables custom cursor

## Stability

- mobile remains usable
- reduced motion is respected
- no horizontal overflow
- existing architecture remains intact
- `npm run build` passes

---

# Final Claude Code Response Format

When finished, respond with:

## Summary

- what changed
- why the update is stronger

## Major features implemented

- Transformation Engine upgrade
- Before/After slider
- Rebuild Timeline
- Interface Deconstruction
- Cinematic Project Overlay
- HD Labs OS aesthetic
- Route transition upgrades
- Project color moods
- Services Motion Map
- Scene-based Home page
- Wordmark interactions
- Screenshot slicing
- Labs Manifesto
- Cursor responsiveness fix

## Files changed

- list every created and modified file

## Cursor fix

- explain exactly how cursor lag was reduced
- explain any remaining smoothing behavior if present

## Page-by-page changes

- Home
- Work
- Services
- About
- Pricing
- Start

## Build result

- state whether `npm run build` passed

## Remaining recommended upgrades

- short list only

Do not claim completion unless the build passes.

---

# Final Instruction

Make this brilliant.

This phase should move Higgins Digital Labs meaningfully closer to a truly special interactive experience. The implementation should be careful, original, technically stable, and visually impressive. Prioritize coherence over random effects. Every added feature should make the site feel more intentional, more premium, and more memorable.

Read the codebase first, plan carefully, implement step by step, run the build, and fix every error before finishing.