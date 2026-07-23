import { existsSync, readFileSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const source = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/App.css", import.meta.url), "utf8");
const packageJson = readFileSync(new URL("../package.json", import.meta.url), "utf8");
const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, "..");
const heroVideoPath = new URL("../public/media/hero-earth.mp4", import.meta.url);
const projectVideoPath = new URL("../public/media/frzmv01-project.mp4", import.meta.url);
const projectCoverPath = new URL("../public/media/frzmv01-cover.png", import.meta.url);
const projectOptimizedCoverPath = new URL("../public/media/frzmv01-cover.jpg", import.meta.url);
const secondProjectVideoPath = new URL("../public/media/m8w4d3-project.mp4", import.meta.url);
const secondProjectCoverPath = new URL("../public/media/m8w4d3-cover.jpg", import.meta.url);
const thirdProjectVideoPath = new URL("../public/media/sicily-project.mp4", import.meta.url);
const thirdProjectCoverPath = new URL("../public/media/sicily-cover-v2.jpg", import.meta.url);
const fourthProjectVideoPath = new URL("../public/media/s1c1-c3-project.mp4", import.meta.url);
const fourthProjectCoverPath = new URL("../public/media/s1c1-c3-cover.jpg", import.meta.url);
const fifthProjectVideoPath = new URL("../public/media/corporate-promo-project.mp4", import.meta.url);
const fifthProjectCoverPath = new URL("../public/media/corporate-promo-cover.jpg", import.meta.url);
const unusedHeroSourcePath = new URL("../public/media/hero-earth-source.mp4", import.meta.url);
const unusedHeroInterpolatedPath = new URL("../public/media/hero-earth-interpolated.mp4", import.meta.url);
const unusedHeroSamplePath = new URL("../public/media/hero-earth-4k-sample.mp4", import.meta.url);
const unusedSicilyCoverPath = new URL("../public/media/sicily-cover.jpg", import.meta.url);
const projectVideoPaths = [
  projectVideoPath,
  secondProjectVideoPath,
  thirdProjectVideoPath,
  fourthProjectVideoPath,
  fifthProjectVideoPath,
];
const sideRaysPath = new URL("../src/components/SideRays.jsx", import.meta.url);
const sideRaysCssPath = new URL("../src/components/SideRays.css", import.meta.url);
const borderGlowPath = new URL("../src/components/BorderGlow.jsx", import.meta.url);
const borderGlowCssPath = new URL("../src/components/BorderGlow.css", import.meta.url);
const dockPath = new URL("../src/components/Dock.jsx", import.meta.url);
const dockCssPath = new URL("../src/components/Dock.css", import.meta.url);
const tiltedCardPath = new URL("../src/components/TiltedCard.jsx", import.meta.url);
const tiltedCardCssPath = new URL("../src/components/TiltedCard.css", import.meta.url);
const particlesPath = new URL("../src/components/Particles.jsx", import.meta.url);
const particlesCssPath = new URL("../src/components/Particles.css", import.meta.url);
const ffmpegPath = join(root, "node_modules/ffmpeg-static/ffmpeg.exe");
const sideRaysSource = existsSync(sideRaysPath) ? readFileSync(sideRaysPath, "utf8") : "";
const sideRaysCss = existsSync(sideRaysCssPath) ? readFileSync(sideRaysCssPath, "utf8") : "";
const borderGlowSource = existsSync(borderGlowPath) ? readFileSync(borderGlowPath, "utf8") : "";
const borderGlowCss = existsSync(borderGlowCssPath) ? readFileSync(borderGlowCssPath, "utf8") : "";
const dockSource = existsSync(dockPath) ? readFileSync(dockPath, "utf8") : "";
const dockCss = existsSync(dockCssPath) ? readFileSync(dockCssPath, "utf8") : "";
const tiltedCardSource = existsSync(tiltedCardPath) ? readFileSync(tiltedCardPath, "utf8") : "";
const tiltedCardCss = existsSync(tiltedCardCssPath) ? readFileSync(tiltedCardCssPath, "utf8") : "";
const particlesSource = existsSync(particlesPath) ? readFileSync(particlesPath, "utf8") : "";
const particlesCss = existsSync(particlesCssPath) ? readFileSync(particlesCssPath, "utf8") : "";
const motionPath = new URL("../src/usePortfolioMotion.js", import.meta.url);
const motionSource = existsSync(motionPath) ? readFileSync(motionPath, "utf8") : "";
const heroVideoStyles = styles.match(/\.heroVideo\s*\{([^}]*)\}/)?.[1] || "";
const heroStyles = styles.match(/\.hero\s*\{([^}]*)\}/)?.[1] || "";
const heroBlendStyles = styles.match(/\.heroBlend\s*\{([^}]*)\}/)?.[1] || "";
const heroAfterStyles = styles.match(/\.hero::after\s*\{([^}]*)\}/)?.[1] || "";
const posterGateStyles = styles.match(/\.posterGate\s*\{([^}]*)\}/)?.[1] || "";
const posterBeamStyles = styles.match(/\.posterBeam\s*\{([^}]*)\}/)?.[1] || "";
const contactPageStyles = styles.match(/^\.contactPage\s*\{([^}]*)\}/m)?.[1] || "";
const contactPageBeamStyles =
  styles.match(/\.contactPage::after\s*\{([^}]*)\}/)?.[1] || "";
const sectionAfterStyles = styles.match(/\.section::after\s*\{([^}]*)\}/)?.[1] || "";
const firstSectionAfterStyles =
  styles.match(/\.hero\s*\+\s*\.section::after\s*\{([^}]*)\}/)?.[1] || "";
const mainBeforeStyles = styles.match(/main::before\s*\{([^}]*)\}/)?.[1] || "";
const mainAfterStyles = styles.match(/main::after\s*\{([^}]*)\}/)?.[1] || "";
const sectionRaysStyles = styles.match(/\.sectionRays\s*\{([^}]*)\}/)?.[1] || "";
const contactRaysAfterStyles =
  styles.match(/\.contactPage\s+\.sectionRays::after\s*\{([^}]*)\}/)?.[1] || "";
const floatingNavStyles = styles.match(/\.floatingNavLinks\s*\{([^}]*)\}/)?.[1] || "";
const floatingNavBeforeStyles =
  styles.match(/\.floatingNavLinks::before\s*\{([^}]*)\}/)?.[1] || "";
const visibleFloatingNavStyles =
  styles.match(/\.floatingNavLinks\.isVisible\s*\{([^}]*)\}/)?.[1] || "";
const portraitFrameStyles = styles.match(/\.portraitFrame\s*\{([^}]*)\}/)?.[1] || "";
const portraitFrameBeforeStyles =
  styles.match(/\.portraitFrame::before\s*\{([^}]*)\}/)?.[1] || "";
const portraitParticlesStyles = styles.match(/\.portraitParticles\s*\{([^}]*)\}/)?.[1] || "";

const checks = [
  {
    label: "Media assets stay within portfolio performance budgets",
    pass:
      fileSizeMb(heroVideoPath) <= 16 &&
      fileSizeMb(fifthProjectVideoPath) <= 120 &&
      existsSync(projectOptimizedCoverPath) &&
      fileSizeMb(projectOptimizedCoverPath) <= 0.45 &&
      publicMediaPayloadMb() <= 125 &&
      !existsSync(projectCoverPath) &&
      !existsSync(unusedHeroSourcePath) &&
      !existsSync(unusedHeroInterpolatedPath) &&
      !existsSync(unusedHeroSamplePath) &&
      !existsSync(unusedSicilyCoverPath),
  },
  {
    label: "Hero video avoids eager full download on first paint",
    pass:
      source.includes('preload="metadata"') &&
      !source.includes('preload="auto"') &&
      source.includes('fetchPriority="high"'),
  },
  {
    label: "Hero imports React hooks",
    pass:
      /import\s*\{[^}]*useEffect[^}]*\}\s*from\s*["']react["'];/.test(source) &&
      /import\s*\{[^}]*useRef[^}]*\}\s*from\s*["']react["'];/.test(source) &&
      /import\s*\{[^}]*useState[^}]*\}\s*from\s*["']react["'];/.test(source),
  },
  {
    label: "Hero creates a videoRef",
    pass: /const\s+videoRef\s*=\s*useRef\(null\);/.test(source),
  },
  {
    label: "Hero slows playback to 0.55",
    pass: /playbackRate\s*=\s*0\.55/.test(source),
  },
  {
    label: "Hero video element uses the ref",
    pass: /<video[\s\S]*ref=\{videoRef\}/.test(source),
  },
  {
    label: "Hero uses the local Earth video asset",
    pass: /src=["']\/media\/hero-earth\.mp4["']/.test(source),
  },
  {
    label: "Hero no longer depends on the remote stock video",
    pass: !source.includes("videos.pexels.com"),
  },
  {
    label: "Hero processed video exists",
    pass: existsSync(heroVideoPath),
  },
  {
    label: "Hero copy mentions audio-visual sync",
    pass: source.includes("音画协同"),
  },
  {
    label: "Hero includes poster light-beam elements",
    pass:
      source.includes('className="posterGate"') &&
      source.includes('className="posterBeam"') &&
      source.includes('className="posterNoise"'),
  },
  {
    label: "CSS defines gradient poster visual language",
    pass:
      styles.includes(".posterBeam") &&
      styles.includes(".posterGate") &&
      styles.includes(".posterNoise") &&
      styles.includes("mix-blend-mode") &&
      styles.includes("color-mix"),
  },
  {
    label: "CSS applies the reference purple-black palette",
    pass:
      styles.includes("--accent-violet: #a855f7") &&
      styles.includes("--poster-black: #0b0c10") &&
      styles.includes("--panel-solid: #0b0c10") &&
      !styles.includes("#a7fff1"),
  },
  {
    label: "Hero poster gate has no visible rectangular frame",
    pass:
      /display:\s*none;/m.test(posterGateStyles) &&
      !/clip-path:\s*polygon\(0 0,\s*100% 0,\s*100% 100%,\s*0 100%\)/m.test(posterGateStyles),
  },
  {
    label: "Hero atmosphere overlays preserve the Earth video",
    pass:
      /display:\s*none;/m.test(posterGateStyles) &&
      /display:\s*none;/m.test(posterBeamStyles),
  },
  {
    label: "Hero atmosphere overlays do not add purple light blobs",
    pass:
      !posterGateStyles.includes("168, 85, 247") &&
      !posterBeamStyles.includes("168, 85, 247"),
  },
  {
    label: "Hero video renders as neutral grayscale without purple blend tint",
    pass:
      /filter:\s*grayscale\(1\)/m.test(heroVideoStyles) &&
      /mix-blend-mode:\s*normal;/m.test(heroVideoStyles) &&
      !/mix-blend-mode:\s*luminosity;/m.test(heroVideoStyles) &&
      /mask-image:\s*linear-gradient\(180deg,\s*#000\s*0%/m.test(heroVideoStyles) &&
      /transparent\s*100%/m.test(heroVideoStyles),
  },
  {
    label: "Hero bottom blends into the continuous lower-page background",
    pass:
      source.includes('className="heroBlend"') &&
      /border-bottom:\s*0;/m.test(heroStyles) &&
      /overflow:\s*visible;/m.test(heroStyles) &&
      /background:\s*transparent;/m.test(heroStyles) &&
      /inset:\s*0\s*0\s*-260px;/m.test(heroAfterStyles) &&
      /mask-image:\s*linear-gradient\(180deg,\s*#000\s*0%/m.test(heroAfterStyles) &&
      /transparent\s*100%/m.test(heroAfterStyles) &&
      /bottom:\s*-220px;/m.test(heroBlendStyles) &&
      /height:\s*72vh;/m.test(heroBlendStyles) &&
      /radial-gradient\(ellipse at 70% 82%/m.test(heroBlendStyles) &&
      !/background:\s*var\(--lower-page-bg\);/m.test(heroBlendStyles) &&
      /mask-image:\s*linear-gradient\(180deg,\s*transparent\s*0%/m.test(heroBlendStyles) &&
      /#000\s*62%/m.test(heroBlendStyles) &&
      /transparent\s*100%/m.test(heroBlendStyles),
  },
  {
    label: "Middle navigation stays fixed as a global frosted glass layer after the first screen",
    pass:
      source.includes("<FloatingNav />") &&
      /function\s+FloatingNav\(\)/.test(source) &&
      /useState/.test(source) &&
      /setIsFloatingNavVisible/.test(source) &&
      /window\.innerHeight/.test(source) &&
      /className=\{`floatingNavLinks \$\{isFloatingNavVisible \? "isVisible" : ""\}`\}/.test(source) &&
      /position:\s*fixed;/m.test(floatingNavStyles) &&
      /pointer-events:\s*none;/m.test(floatingNavStyles) &&
      /opacity:\s*0;/m.test(floatingNavStyles) &&
      /opacity:\s*1;/m.test(visibleFloatingNavStyles) &&
      /pointer-events:\s*auto;/m.test(visibleFloatingNavStyles) &&
      /\.floatingDock\s*\{[\s\S]*?backdrop-filter:\s*blur\(/m.test(styles) &&
      (/display:\s*none;/m.test(floatingNavBeforeStyles) ||
        /\.floatingDock\s*\{[\s\S]*?backdrop-filter:\s*blur\(/m.test(styles)) &&
      /\.floatingDock\s*\{[\s\S]*?box-shadow:\s*0 10px 34px/m.test(styles),
  },
  {
    label: "Global grain overlay does not sit above UI",
    pass: !/body::before\s*\{[\s\S]*?z-index:\s*(?:[1-9]|\d{2,})/m.test(styles),
  },
  {
    label: "Non-hero sections have background-only grain",
    pass:
      styles.includes("main::before") &&
      /top:\s*calc\(100vh - 320px\);/m.test(mainBeforeStyles) &&
      /z-index:\s*0;/m.test(mainBeforeStyles) &&
      /mask-image:\s*linear-gradient\(180deg,\s*transparent\s*0%/m.test(mainBeforeStyles) &&
      /\.section::before,\s*\.contactPage::before\s*\{[\s\S]*?display:\s*none;/m.test(styles) &&
      /\.section\s*>\s*\.shell\s*\{[\s\S]*?z-index:\s*1/m.test(styles) &&
      /\.contactInner\s*\{[\s\S]*?z-index:\s*1/m.test(styles),
  },
  {
    label: "About cards use solid clean panels so background grain does not show inside",
    pass:
      styles.includes("--panel-solid") &&
      /\.contactStrip\s+a\s*\{[\s\S]*?background:\s*[\s\S]*?var\(--panel-solid\)/m.test(styles) &&
      /\.metric\s*\{[\s\S]*?background:\s*[\s\S]*?var\(--panel-solid\)/m.test(styles),
  },
  {
    label: "Contact page light is anchored to the upper right without a center column",
    pass:
      contactPageStyles.includes("background: transparent") &&
      !styles.includes("from 180deg at 74% 42%") &&
      /right:\s*-6%;/m.test(contactPageBeamStyles) &&
      /top:\s*-18%;/m.test(contactPageBeamStyles) &&
      /width:\s*76%;/m.test(contactPageBeamStyles) &&
      /opacity:\s*0\.94;/m.test(contactPageBeamStyles) &&
      /mask-image:\s*linear-gradient\(180deg,\s*transparent\s*0%/m.test(contactPageBeamStyles) &&
      /clip-path:\s*polygon\(76% 0,\s*100% 0,\s*44% 100%,\s*16% 100%\);/m.test(contactPageBeamStyles),
  },
  {
    label: "React Bits SideRays is integrated as lower-page background lighting",
    pass:
      packageJson.includes('"ogl"') &&
      existsSync(sideRaysPath) &&
      existsSync(sideRaysCssPath) &&
      sideRaysSource.includes("from \"ogl\"") &&
      sideRaysSource.includes("IntersectionObserver") &&
      sideRaysCss.includes(".side-rays-container") &&
      source.includes('import SideRays from "./components/SideRays";') &&
      /function\s+SectionRays\(\)/.test(source) &&
      (source.match(/<SectionRays \/>/g) || []).length === 4 &&
      styles.includes(".sectionRays") &&
      /\.sectionRays\s*\{[\s\S]*?position:\s*absolute;/m.test(styles) &&
      /\.sectionRays\s*\{[\s\S]*?z-index:\s*0;/m.test(styles),
  },
  {
    label: "Lower page sections blend softly instead of hard-cutting",
    pass:
      styles.includes("--lower-page-bg") &&
      styles.includes("--lower-page-bg-position: 0 38px, 0 38px, center, center, center") &&
      /main\s*\{[\s\S]*?background:\s*var\(--lower-page-bg\);/m.test(styles) &&
      /main\s*\{[\s\S]*?background-position:\s*var\(--lower-page-bg-position\);/m.test(styles) &&
      /\.section\s*\{[\s\S]*?background:\s*transparent;/m.test(styles) &&
      /\.contactPage\s*\{[\s\S]*?background:\s*transparent;/m.test(styles) &&
      /\.projects\s*\{[\s\S]*?background:\s*transparent;/m.test(styles) &&
      /\.hero\s*\+\s*\.section,\s*\.section\s*\+\s*\.section\s*\{[\s\S]*?margin-top:\s*-128px;/m.test(styles) &&
      /\.section\s*\+\s*\.contactPage\s*\{[\s\S]*?margin-top:\s*-128px;/m.test(styles) &&
      /inset:\s*-180px\s*0;/m.test(sectionRaysStyles) &&
      /mask-image:\s*linear-gradient\(180deg,\s*transparent\s*0%/m.test(sectionRaysStyles) &&
      /transparent\s*34%/m.test(sectionRaysStyles) &&
      /opacity:\s*0\.14;/m.test(sectionAfterStyles) &&
      /radial-gradient\(ellipse at 50% 16%/m.test(sectionAfterStyles) &&
      !/linear-gradient\(180deg/m.test(sectionAfterStyles) &&
      /top:\s*calc\(100vh - 440px\);/m.test(mainAfterStyles) &&
      /height:\s*880px;/m.test(mainAfterStyles) &&
      /linear-gradient\(180deg,\s*transparent\s*0%/m.test(mainAfterStyles) &&
      /display:\s*none;/m.test(firstSectionAfterStyles) &&
      /display:\s*none;/m.test(contactRaysAfterStyles) &&
      /border-top:\s*0;/m.test(contactPageStyles),
  },
  {
    label: "Premium motion system uses GSAP and ScrollTrigger",
    pass:
      packageJson.includes('"gsap"') &&
      source.includes('import { usePortfolioMotion } from "./usePortfolioMotion";') &&
      source.includes("usePortfolioMotion();") &&
      existsSync(motionPath) &&
      motionSource.includes('import("gsap")') &&
      motionSource.includes('import("gsap/ScrollTrigger")') &&
      !motionSource.includes('import gsap from "gsap"') &&
      motionSource.includes("gsap.context") &&
      motionSource.includes("prefers-reduced-motion"),
  },
  {
    label: "Hero has complete opening animation targets",
    pass:
      source.includes('className="openingCurtain"') &&
      source.includes('className="heroTitleMask"') &&
      source.includes('className="heroTitleLine"') &&
      source.includes('data-motion="hero-copy"') &&
      source.includes('data-motion="hero-actions"') &&
      styles.includes(".motion-ready .openingCurtain") &&
      styles.includes(".heroTitleMask") &&
      styles.includes(".heroTitleLine") &&
      motionSource.includes(".openingCurtain") &&
      motionSource.includes(".heroTitleLine") &&
      motionSource.includes("autoAlpha") &&
      motionSource.includes("y: 34") &&
      !motionSource.includes("revealHeroTitle") &&
      !motionSource.includes("gsap.delayedCall"),
  },
  {
    label: "Sections animate with heading-first entrance and staggered cards",
    pass:
      (source.match(/data-motion-section/g) || []).length >= 4 &&
      (source.match(/data-motion-card/g) || []).length >= 6 &&
      source.includes('data-motion="section-title"') &&
      motionSource.includes("data-motion-section") &&
      motionSource.includes("data-motion-card") &&
      motionSource.includes("stagger") &&
      motionSource.includes("power4.out"),
  },
  {
    label: "Project and portrait images use reveal and subtle parallax",
    pass:
      source.includes('data-motion-image="portrait"') &&
      source.includes('data-motion-image="project"') &&
      motionSource.includes("clipPath") &&
      motionSource.includes("parallax") &&
      motionSource.includes("scrub"),
  },
  {
    label: "First selected project uses a still cover and the arrow opens the FRZMV video",
    pass:
      existsSync(projectVideoPath) &&
      existsSync(projectOptimizedCoverPath) &&
      source.includes('video: "/media/frzmv01-project.mp4"') &&
      source.includes('cover: "/media/frzmv01-cover.jpg"') &&
      source.includes('className="projectCover"') &&
      source.includes('src={project.cover}') &&
      !source.includes('className="projectVideo"') &&
      !source.includes("<source src={project.video}") &&
      /href=\{project\.video \|\| "#contact"\}/m.test(source) &&
      /target=\{project\.video \? "_blank" : undefined\}/m.test(source) &&
      styles.includes(".hasProjectCover") &&
      /\.projectCover\s*\{[\s\S]*?object-fit:\s*cover;/m.test(styles),
  },
  {
    label: "Second selected project uses an extracted M8W4D3 cover and arrow video link",
    pass:
      existsSync(secondProjectVideoPath) &&
      existsSync(secondProjectCoverPath) &&
      source.includes('video: "/media/m8w4d3-project.mp4"') &&
      source.includes('cover: "/media/m8w4d3-cover.jpg"') &&
      source.includes('className="projectPlayLink"') &&
      source.includes('href={project.video || "#contact"}') &&
      !source.includes('className="projectVideo"'),
  },
  {
    label: "Third selected project uses an extracted Sicily cover and arrow video link",
    pass:
      existsSync(thirdProjectVideoPath) &&
      existsSync(thirdProjectCoverPath) &&
      source.includes('video: "/media/sicily-project.mp4"') &&
      source.includes('cover: "/media/sicily-cover-v2.jpg"') &&
      source.includes('className="projectPlayLink"') &&
      source.includes('href={project.video || "#contact"}') &&
      !source.includes('className="projectVideo"'),
  },
  {
    label: "Fourth selected project uses an extracted S1C1-C3 cover and arrow video link",
    pass:
      existsSync(fourthProjectVideoPath) &&
      existsSync(fourthProjectCoverPath) &&
      source.includes('video: "/media/s1c1-c3-project.mp4"') &&
      source.includes('cover: "/media/s1c1-c3-cover.jpg"') &&
      source.includes('className="projectPlayLink"') &&
      source.includes('href={project.video || "#contact"}') &&
      !source.includes('className="projectVideo"'),
  },
  {
    label: "Fifth selected project uses the corporate promo film cover and arrow video link",
    pass:
      existsSync(fifthProjectVideoPath) &&
      existsSync(fifthProjectCoverPath) &&
      source.includes('title: "企业宣传片视觉制作"') &&
      source.includes('tag: "企业宣传片 / 剪辑包装"') &&
      source.includes('meta: "Brand Film / Edit / Motion"') &&
      source.includes('video: "/media/corporate-promo-project.mp4"') &&
      source.includes('cover: "/media/corporate-promo-cover.jpg"') &&
      source.includes('href={project.video || "#contact"}') &&
      styles.includes(".projectTiltWrap:last-child:nth-child(odd)") &&
      /grid-column:\s*1\s*\/\s*-1;/m.test(styles),
  },
  {
    label: "AI short drama project title mentions domestic and overseas production",
    pass:
      source.includes('title: "国内外AI 短剧全流程制作"') &&
      !source.includes('title: "AI 短剧全流程制作"'),
  },
  {
    label: "Portrait placeholder uses the React Bits Particles effect",
    pass:
      packageJson.includes('"ogl"') &&
      existsSync(particlesPath) &&
      existsSync(particlesCssPath) &&
      particlesSource.includes("from \"ogl\"") &&
      particlesSource.includes("moveParticlesOnHover") &&
      particlesSource.includes("particleHoverFactor") &&
      particlesSource.includes("requestAnimationFrame") &&
      particlesSource.includes("IntersectionObserver") &&
      particlesSource.includes("document.visibilityState") &&
      particlesSource.includes('import "./Particles.css";') &&
      particlesCss.includes(".particles-container") &&
      source.includes('import Particles from "./components/Particles";') &&
      source.includes('className="portraitParticles"') &&
      source.includes('particleColors={["#ffffff"]}') &&
      source.includes("particleCount={260}") &&
      source.includes("moveParticlesOnHover={true}") &&
      source.includes("particleHoverFactor={2.2}") &&
      source.includes("alphaParticles={true}") &&
      source.includes("sizeRandomness={1.85}") &&
      styles.includes(".portraitParticles") &&
      /pointer-events:\s*auto;/m.test(portraitParticlesStyles) &&
      /content:\s*none;/m.test(portraitFrameBeforeStyles) &&
      !/radial-gradient\(circle at 52% 24%,\s*rgba\(255,\s*255,\s*255/m.test(portraitFrameStyles) &&
      !/rgba\(69,\s*47,\s*90/m.test(portraitFrameStyles) &&
      !source.includes('className="portraitShockwave"') &&
      !source.includes('className="portraitAir portraitAirLeft"') &&
      !styles.includes("@keyframes shockwaveRise") &&
      !styles.includes("@keyframes rearAirflow"),
  },
  {
    label: "Floating navigation scroll listener is requestAnimationFrame throttled",
    pass:
      source.includes("floatingNavTickingRef") &&
      source.includes("window.requestAnimationFrame") &&
      source.includes("floatingNavTickingRef.current = false") &&
      source.includes('window.addEventListener("scroll", updateFloatingNav, { passive: true })'),
  },
  {
    label: "React Bits BorderGlow component is integrated",
    pass:
      existsSync(borderGlowPath) &&
      existsSync(borderGlowCssPath) &&
      borderGlowSource.includes("parseHSL") &&
      borderGlowSource.includes("buildGlowVars") &&
      borderGlowSource.includes("onPointerMove") &&
      borderGlowSource.includes("onMouseMove") &&
      borderGlowSource.includes("edge-light") &&
      borderGlowSource.includes("border-glow-inner") &&
      borderGlowSource.includes("...rest") &&
      borderGlowSource.includes('import "./BorderGlow.css";') &&
      borderGlowCss.includes(".border-glow-card") &&
      borderGlowCss.includes("conic-gradient") &&
      borderGlowCss.includes("mix-blend-mode: plus-lighter"),
  },
  {
    label: "About experience cards render text only without metric values",
    pass:
      source.includes("const metrics = [") &&
      !source.includes("<strong>{item.value}</strong>") &&
      source.includes('className="metricText"') &&
      source.includes('"动画电影后期制作"') &&
      !source.includes('"动画电影后期参与"') &&
      /\.metricsGrid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/m.test(styles) &&
      /\.metricText\s*\{[\s\S]*?font-size:\s*17px;/m.test(styles) &&
      /\.metricText\s*\{[\s\S]*?color:\s*var\(--accent-violet\);/m.test(styles) &&
      !styles.includes(".metric strong"),
  },
  {
    label: "About profile cards use BorderGlow styling",
    pass:
      source.includes('import BorderGlow from "./components/BorderGlow";') &&
      source.includes('className="portraitPanel aboutGlowCard"') &&
      source.includes('className="metric aboutGlowMetric"') &&
      source.includes("animated={true}") &&
      source.includes('glowColor="270 88 76"') &&
      styles.includes(".aboutGlowCard") &&
      styles.includes(".aboutGlowMetric") &&
      styles.includes(".portraitPanelContent") &&
      styles.includes(".border-glow-inner"),
  },
  {
    label: "Portfolio cards use mouse-following BorderGlow wrappers",
    pass:
      source.includes("cardGlowColors") &&
      source.includes('className={`projectCard projectGlowCard ${project.tone} ${project.video ? "hasPlayableProject" : ""}`}') &&
      source.includes('className="strengthCard strengthGlowCard"') &&
      source.includes('className="contactGlowLink"') &&
      source.includes('data-motion-card') &&
      styles.includes(".projectGlowCard") &&
      styles.includes(".strengthGlowCard") &&
      styles.includes(".contactGlowLink") &&
      /\.projectGlowCard\s*\{[\s\S]*?overflow:\s*visible;/m.test(styles) &&
      /\.strengthGlowCard\s*\{[\s\S]*?overflow:\s*visible;/m.test(styles) &&
      /\.contactGlowLink\s*>\s*\.border-glow-inner\s*\{[\s\S]*?overflow:\s*visible;/m.test(styles),
  },
  {
    label: "Selected work cards stack the React Bits TiltedCard effect",
    pass:
      packageJson.includes('"motion"') &&
      existsSync(tiltedCardPath) &&
      existsSync(tiltedCardCssPath) &&
      tiltedCardSource.includes('from "motion/react"') &&
      tiltedCardSource.includes("useMotionValue") &&
      tiltedCardSource.includes("useSpring") &&
      tiltedCardSource.includes("rotateAmplitude") &&
      tiltedCardSource.includes("syncNestedBorderGlow") &&
      tiltedCardSource.includes("handleProxyClick") &&
      tiltedCardSource.includes("targetLink.click()") &&
      tiltedCardSource.includes("is-proxy-glow-active") &&
      tiltedCardSource.includes("children") &&
      tiltedCardSource.includes('import "./TiltedCard.css";') &&
      tiltedCardCss.includes(".tilted-card-figure") &&
      tiltedCardCss.includes("perspective: 900px") &&
      source.includes('import TiltedCard from "./components/TiltedCard";') &&
      source.includes('className="projectTiltWrap"') &&
      source.includes("rotateAmplitude={5.5}") &&
      source.includes("scaleOnHover={1.04}") &&
      source.includes("edgeSensitivity={18}") &&
      source.includes("glowRadius={64}") &&
      source.includes("glowIntensity={1.45}") &&
      source.includes("coneSpread={30}") &&
      source.includes("fillOpacity={0.26}") &&
      borderGlowCss.includes(".is-proxy-glow-active") &&
      source.includes("showMobileWarning={false}") &&
      source.includes("showTooltip={false}") &&
      styles.includes(".projectTiltWrap") &&
      /\.projectTiltWrap\s*\{[\s\S]*?perspective:/m.test(styles) &&
      /\.projectTiltWrap\s+\.projectGlowCard\s*\{[\s\S]*?height:\s*100%;/m.test(styles),
  },
  {
    label: "Project play buttons remain clickable above tilted card layers",
    pass:
      tiltedCardCss.includes(".tilted-card-content a") &&
      /\.tilted-card-content\s*\{[^}]*pointer-events:\s*none;/m.test(tiltedCardCss) &&
      /\.tilted-card-content\s+a,\s*[\r\n]+\.tilted-card-content\s+button\s*\{[\s\S]*?pointer-events:\s*auto;/m.test(tiltedCardCss) &&
      /\.projectBody\s+a\s*\{[\s\S]*?position:\s*relative;/m.test(styles) &&
      /\.projectBody\s+a\s*\{[\s\S]*?z-index:\s*4;/m.test(styles) &&
      /\.projectBody\s+a\s*\{[\s\S]*?transform:\s*translateZ\(48px\);/m.test(styles),
  },
  {
    label: "React Bits Dock component is integrated",
    pass:
      packageJson.includes('"motion"') &&
      existsSync(dockPath) &&
      existsSync(dockCssPath) &&
      dockSource.includes('from "motion/react"') &&
      dockSource.includes("useMotionValue") &&
      dockSource.includes("useSpring") &&
      dockSource.includes("useTransform") &&
      dockSource.includes("AnimatePresence") &&
      dockSource.includes("role=\"toolbar\"") &&
      dockCss.includes(".dock-outer") &&
      dockCss.includes(".dock-panel") &&
      dockCss.includes(".dock-item") &&
      dockCss.includes(".dock-label"),
  },
  {
    label: "Floating navigation renders as the React Bits Dock",
    pass:
      source.includes('import Dock from "./components/Dock";') &&
      source.includes("const floatingNavItems") &&
      source.includes("<Dock") &&
      source.includes('className="floatingDock"') &&
      source.includes("magnification={74}") &&
      styles.includes(".floatingDock") &&
      styles.includes(".floatingDock .dock-item") &&
      styles.includes(".floatingDockLabel") &&
      !source.includes("profileDockItems") &&
      !source.includes('className="profileDockWrap"'),
  },
  {
    label: "Floating Dock has no lower black blob behind the navigation",
    pass:
      /display:\s*none;/m.test(floatingNavBeforeStyles) &&
      !/height:\s*86px;/m.test(floatingNavBeforeStyles) &&
      !/filter:\s*blur\(18px\);/m.test(floatingNavBeforeStyles) &&
      /box-shadow:\s*none;/m.test(floatingNavStyles) &&
      !/backdrop-filter:\s*blur\(/m.test(floatingNavStyles) &&
      !/\.floatingDock\s*\{[\s\S]*?0 24px 90px/m.test(styles) &&
      /\.floatingNavLinks\s+\.dock-outer\s*\{[\s\S]*?height:\s*66px\s*!important;/m.test(styles) &&
      /\.floatingNavLinks\s+\.dock-outer\s*\{[\s\S]*?overflow:\s*visible;/m.test(styles),
  },
];

const failed = checks.filter((check) => !check.pass);

if (failed.length === 0) {
  const videoInfo = inspectVideo(fileURLToPath(heroVideoPath));

  if (videoInfo.width < 3840) {
    failed.push({
      label: `Hero video width is not ultra-clear: ${videoInfo.width} < 3840`,
    });
  }

  if (videoInfo.fps < 55) {
    failed.push({
      label: `Hero video frame rate is too low: ${videoInfo.fps.toFixed(2)} < 55`,
    });
  }

  if (/transform:\s*scale\((?!1\))/.test(heroVideoStyles)) {
    failed.push({
      label: "Hero video CSS should not upscale the video",
    });
  }

  const seamScore = measureLoopSeam(fileURLToPath(heroVideoPath));

  if (seamScore > 3) {
    failed.push({
      label: `Hero video loop seam is too visible: ${seamScore.toFixed(2)} > 3`,
    });
  }

  for (const videoPath of projectVideoPaths) {
    const videoFilePath = fileURLToPath(videoPath);
    if (!videoHasAudio(videoFilePath)) {
      failed.push({
        label: `Project video is missing an audio stream: ${videoFilePath}`,
      });
    }
  }
}

if (failed.length > 0) {
  for (const check of failed) {
    console.error(`FAIL: ${check.label}`);
  }
  process.exit(1);
}

console.log("Hero video checks passed.");

function measureLoopSeam(videoPath) {
  const firstFrame = readFrame(["-ss", "0", "-i", videoPath]);
  const lastFrame = readFrame(["-sseof", "-0.04", "-i", videoPath]);
  let total = 0;
  const length = Math.min(firstFrame.length, lastFrame.length);

  for (let index = 0; index < length; index += 1) {
    total += Math.abs(firstFrame[index] - lastFrame[index]);
  }

  return total / length;
}

function readFrame(inputArgs) {
  const result = spawnSync(
    ffmpegPath,
    [
      "-v",
      "error",
      ...inputArgs,
      "-vf",
      "scale=96:54,format=rgb24",
      "-frames:v",
      "1",
      "-f",
      "rawvideo",
      "-",
    ],
    { encoding: null, maxBuffer: 20_000_000 },
  );

  if (result.status !== 0) {
    throw new Error(
      result.stderr?.toString("utf8") ||
        result.error?.message ||
        "Unable to read video frame with ffmpeg.",
    );
  }

  return result.stdout;
}

function inspectVideo(videoPath) {
  const result = spawnSync(ffmpegPath, ["-hide_banner", "-i", videoPath], {
    encoding: "utf8",
  });
  const output = `${result.stdout || ""}\n${result.stderr || ""}`;
  const videoLine = output.match(/Video:.*?,\s*(\d+)x(\d+).*?,\s*([\d.]+)\s*fps/);

  if (!videoLine) {
    throw new Error(`Unable to inspect video metadata:\n${output}`);
  }

  return {
    width: Number(videoLine[1]),
    height: Number(videoLine[2]),
    fps: Number(videoLine[3]),
  };
}

function videoHasAudio(videoPath) {
  const result = spawnSync(ffmpegPath, ["-hide_banner", "-i", videoPath], {
    encoding: "utf8",
  });
  const output = `${result.stdout || ""}\n${result.stderr || ""}`;

  return /Stream #.*Audio:/.test(output);
}

function fileSizeMb(fileUrl) {
  if (!existsSync(fileUrl)) {
    return Number.POSITIVE_INFINITY;
  }

  return statSync(fileUrl).size / 1024 / 1024;
}

function publicMediaPayloadMb() {
  const mediaDir = new URL("../public/media/", import.meta.url);
  const files = [
    heroVideoPath,
    projectVideoPath,
    projectOptimizedCoverPath,
    secondProjectVideoPath,
    secondProjectCoverPath,
    thirdProjectVideoPath,
    thirdProjectCoverPath,
    fourthProjectVideoPath,
    fourthProjectCoverPath,
    fifthProjectVideoPath,
    fifthProjectCoverPath,
  ];

  return files.reduce((total, fileUrl) => {
    const path = fileUrl.pathname;
    const isInMediaDir = path.startsWith(mediaDir.pathname);
    return isInMediaDir && existsSync(fileUrl) ? total + fileSizeMb(fileUrl) : total;
  }, 0);
}
