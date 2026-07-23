import { useEffect } from "react";

const heroIntroSelector =
  "[data-motion='hero-kicker'], [data-motion='hero-copy'], [data-motion='hero-actions'], [data-motion='hero-nav']";
const heroTitleSelector = ".heroTitleLine";

export function usePortfolioMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    let ctx;
    let isCancelled = false;

    if (prefersReducedMotion.matches) {
      root.classList.remove("motion-preload", "motion-ready");
      return undefined;
    }

    const initializeMotion = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (isCancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        gsap.set(".openingCurtain", {
          autoAlpha: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        });
        gsap.set(heroTitleSelector, {
          autoAlpha: 0,
          y: 34,
        });
        gsap.set(heroIntroSelector, {
          autoAlpha: 0,
          y: 34,
        });
        gsap.set(".heroVideo", {
          scale: 1.045,
          transformOrigin: "50% 50%",
        });

        document.querySelectorAll("[data-motion-section]").forEach((section) => {
          const sectionTitle = section.querySelector("[data-motion='section-title']");
          const sectionCopy = section.querySelectorAll("[data-motion='section-copy']");
          const cards = section.querySelectorAll("[data-motion-card]");

          if (sectionTitle) {
            gsap.set(sectionTitle, {
              autoAlpha: 0,
              x: -180,
              y: 42,
              clipPath: "inset(0% 100% 0% 0%)",
            });
          }

          if (sectionCopy.length > 0) {
            gsap.set(sectionCopy, {
              autoAlpha: 0,
              y: 64,
              clipPath: "inset(18% 0% 0% 0%)",
            });
          }

          if (cards.length > 0) {
            gsap.set(cards, {
              autoAlpha: 0,
              y: 96,
              clipPath: "inset(16% 0% 0% 0%)",
            });
          }
        });

        const parallaxImages = document.querySelectorAll("[data-motion-image]");

        gsap.set(parallaxImages, {
          clipPath: "inset(18% 0% 18% 0%)",
          scale: 1.08,
          transformOrigin: "50% 50%",
        });

        root.classList.remove("motion-preload");
        root.classList.add("motion-ready");

        const opening = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },

        });

        opening
          .to(".openingCurtain", {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.65,
            ease: "expo.inOut",
          })
          .to(
            ".heroVideo",
            {
              scale: 1,
              duration: 2.8,
              ease: "power3.out",
            },
            0.08,
          )
          .to(
            heroTitleSelector,
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.15,
              stagger: 0.12,
            },
            0.82,
          )
          .to(
            heroIntroSelector,
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.15,
              stagger: 0.12,
            },
            1.18,
          );


        gsap.to(".heroVideo", {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.85,
          },
        });

        document.querySelectorAll("[data-motion-section]").forEach((section) => {
          const sectionTitle = section.querySelector("[data-motion='section-title']");
          const sectionCopy = section.querySelectorAll("[data-motion='section-copy']");
          const cards = section.querySelectorAll("[data-motion-card]");

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
            defaults: {
              ease: "power4.out",
            },
          });

          if (sectionTitle) {
            timeline.to(sectionTitle, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.45,
            });
          }

          if (sectionCopy.length > 0) {
            timeline.to(
              sectionCopy,
              {
                autoAlpha: 1,
                y: 0,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.12,
                stagger: 0.1,
              },
              "-=0.78",
            );
          }

          if (cards.length > 0) {
            timeline.to(
              cards,
              {
                autoAlpha: 1,
                y: 0,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.18,
                stagger: 0.16,
              },
              "-=0.62",
            );
          }
        });

        parallaxImages.forEach((image) => {
          gsap.to(image, {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.45,
            ease: "power4.out",
            scrollTrigger: {
              trigger: image,
              start: "top 82%",
              once: true,
            },
          });

          gsap.to(image, {
            yPercent: image.dataset.motionImage === "portrait" ? -5 : -8,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          });
        });
      });
    };

    initializeMotion();

    return () => {
      isCancelled = true;
      ctx?.revert();
      root.classList.remove("motion-preload", "motion-ready");
    };
  }, []);
}
