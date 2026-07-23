import { readFileSync } from "node:fs";

const indexHtml = readFileSync("index.html", "utf8");
const css = readFileSync("src/App.css", "utf8");
const motion = readFileSync("src/usePortfolioMotion.js", "utf8");

const checks = [
  [indexHtml.includes("motion-preload"), "index.html must add a motion-preload class before React renders"],
  [css.includes(".motion-preload .heroTitleLine"), "CSS must hide hero title lines before GSAP loads"],
  [css.includes(".motion-preload [data-motion='hero-kicker']"), "CSS must hide hero copy/nav/actions before GSAP loads"],
  [css.includes(".motion-preload [data-motion-card]"), "CSS must hide scroll animation cards before GSAP loads"],
  [motion.includes('root.classList.remove("motion-preload")'), "motion hook must remove motion-preload after GSAP sets initial states"],
  [motion.includes('const heroTitleSelector = ".heroTitleLine"'), "motion hook must keep hero title reveal targets explicit"],
  [motion.includes("autoAlpha: 1") && motion.includes("revealHeroTitle"), "motion hook must force hero title lines visible after the opening animation"],
  [motion.includes("gsap.delayedCall") && motion.includes("revealHeroTitle"), "motion hook must include a delayed hero title visibility fallback"],
];

const failed = checks.filter(([passed]) => !passed);

if (failed.length > 0) {
  for (const [, message] of failed) {
    console.error(`FAIL: ${message}`);
  }
  process.exit(1);
}

console.log("Motion preload checks passed.");