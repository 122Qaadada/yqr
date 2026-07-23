# Gradient Poster Visual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the portfolio into a black-and-white gradient poster visual system inspired by the supplied reference image.

**Architecture:** Keep the React component hierarchy intact and introduce a small set of CSS-driven visual primitives: poster grain, Hero light gate, projector beam, monochrome cards, and restrained cyan accents. Use the existing `scripts/check-hero-video.mjs` file to assert the visual tokens and protect the Hero video requirements.

**Tech Stack:** React, Vite, CSS gradients, static MP4 media, Node verification script.

## Global Constraints

- Preserve the existing React + Vite project.
- Do not remove the 4K seamless Earth Hero video.
- Keep the page suitable for PC display with a wide content shell.
- Use a dark, restrained, advanced visual tone.
- Avoid template-like card styling.

---

### Task 1: Poster Visual System

**Files:**
- Modify: `scripts/check-hero-video.mjs`
- Modify: `src/App.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: existing sections `Hero`, `About`, `Projects`, `Strengths`, `Contact`
- Produces: CSS classes `.posterBeam`, `.posterGate`, `.posterNoise`, and monochrome section/card treatments

- [ ] **Step 1: Write the failing test**

Add checks in `scripts/check-hero-video.mjs` requiring the CSS to include `.posterBeam`, `.posterGate`, `.posterNoise`, `mix-blend-mode`, and `color-mix`.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test`
Expected: FAIL because the new poster visual tokens are not present yet.

- [ ] **Step 3: Add visual elements**

Add `posterGate`, `posterBeam`, and `posterNoise` decorative elements inside `Hero` after the video fallback.

- [ ] **Step 4: Restyle CSS**

Update `src/App.css` to use a monochrome poster palette, hard-edge light gate, broad projector beam, stronger grain, and quieter grayscale cards across sections.

- [ ] **Step 5: Verify**

Run: `pnpm test`
Expected: PASS.

Run: `pnpm run build`
Expected: PASS.

Refresh `http://127.0.0.1:5173/` and confirm the page renders without console errors.
