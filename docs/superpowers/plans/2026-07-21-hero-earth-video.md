# Hero Earth Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage Hero background with the provided Earth loop and slow its motion for a cinematic portfolio opening.

**Architecture:** Copy the provided MP4 into `public/media` so Vite serves it as a stable static asset. Keep the Hero component as the single owner of video playback behavior, with CSS handling visual overlays and composition.

**Tech Stack:** React, Vite, static MP4 media, Node-based verification script.

## Global Constraints

- Keep the existing React + Vite app structure.
- Keep the homepage fullscreen Hero layout.
- Use the provided local MP4 as the Hero source.
- Slow playback in the browser; do not claim true frame interpolation unless an interpolation tool is available and used.
- Maintain dark, restrained, cinematic styling.

---

### Task 1: Hero Earth Video Asset And Behavior

**Files:**
- Create: `public/media/hero-earth.mp4`
- Create: `scripts/check-hero-video.mjs`
- Modify: `package.json`
- Modify: `src/App.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: static path `/media/hero-earth.mp4`
- Produces: Hero video element with local MP4 source and `playbackRate = 0.55`

- [ ] **Step 1: Write the failing test**

Create `scripts/check-hero-video.mjs` to read `src/App.jsx` and verify it references `/media/hero-earth.mp4`, imports `useEffect` and `useRef`, attaches a `ref` to the Hero video, and sets `playbackRate = 0.55`.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test`
Expected: FAIL because the Hero still points to the remote Pexels video and does not set playback speed.

- [ ] **Step 3: Copy media asset**

Copy `E:/简历/古典地球_00001.mp4` to `public/media/hero-earth.mp4`.

- [ ] **Step 4: Update Hero implementation**

Modify `src/App.jsx` so `Hero` uses a `videoRef`, sets `playbackRate = 0.55`, and uses `/media/hero-earth.mp4` as the only video source.

- [ ] **Step 5: Tune Hero styling**

Modify `src/App.css` so the video sits cleanly behind the content, with dark overlays and subtle atmospheric texture appropriate for the Earth background.

- [ ] **Step 6: Verify**

Run: `pnpm test`
Expected: PASS.

Run: `pnpm run build`
Expected: PASS.

Refresh `http://127.0.0.1:5173/` and confirm the Hero content renders.
