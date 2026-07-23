# Hero Earth Video Design

## Goal

Use `E:/简历/古典地球_00001.mp4` as the homepage Hero loop and make the motion feel slower, polished, cinematic, and consistent with the dark restrained portfolio direction.

## Approved Direction

- Replace the remote stock Hero video with a local project asset.
- Keep the existing fullscreen Hero, navigation, title, and contact actions.
- Add a slow playback setting in the React component so the Earth animation feels calmer.
- Keep layered dark overlays, subtle scan/grid texture, and cool cyan highlight to protect readability.
- Use the original MP4 as the source for now. True optical-flow frame interpolation requires a local video processor such as ffmpeg with `minterpolate`, RIFE, Flowframes, or similar tooling; none is currently available in this workspace.

## Files

- `public/media/hero-earth.mp4`: local Hero video asset copied from the provided file.
- `src/App.jsx`: Hero video source and playback speed behavior.
- `src/App.css`: Hero composition tuning for the Earth background.
- `scripts/check-hero-video.mjs`: lightweight verification that the Hero uses the local video and slow playback behavior.

## Verification

- Run `pnpm test`.
- Run `pnpm run build`.
- Refresh `http://127.0.0.1:5173/` and confirm the Hero renders with the Earth video.
