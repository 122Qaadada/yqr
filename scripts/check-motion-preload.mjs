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
];

const failed = checks.filter(([passed]) => !passed);

if (failed.length > 0) {
  for (const [, message] of failed) {
    console.error(`FAIL: ${message}`);
  }
  process.exit(1);
}

console.log("Motion preload checks passed.");