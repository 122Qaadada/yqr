import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "./TiltedCard.css";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

function getEdgeProximity(element, x, y) {
  const { width, height } = element.getBoundingClientRect();
  const cx = width / 2;
  const cy = height / 2;
  const dx = x - cx;
  const dy = y - cy;
  const kx = dx === 0 ? Infinity : cx / Math.abs(dx);
  const ky = dy === 0 ? Infinity : cy / Math.abs(dy);

  return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
}

function getCursorAngle(element, x, y) {
  const { width, height } = element.getBoundingClientRect();
  const dx = x - width / 2;
  const dy = y - height / 2;

  if (dx === 0 && dy === 0) {
    return 0;
  }

  const degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
  return degrees < 0 ? degrees + 360 : degrees;
}

function TiltedCard({
  children,
  className = "",
  containerHeight = "100%",
  containerWidth = "100%",
  imageHeight = "100%",
  imageWidth = "100%",
  scaleOnHover = 1.06,
  rotateAmplitude = 8,
  showMobileWarning = false,
  showTooltip = false,
  captionText = "",
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });
  const [lastY, setLastY] = useState(0);

  function syncNestedBorderGlow(event) {
    const nestedCard = ref.current?.querySelector(".border-glow-card");

    if (!nestedCard) {
      return;
    }

    const rect = nestedCard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const edge = getEdgeProximity(nestedCard, x, y);
    const angle = getCursorAngle(nestedCard, x, y);

    nestedCard.classList.add("is-proxy-glow-active");
    nestedCard.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
    nestedCard.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
  }

  function handleMouse(event) {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    rotateFigcaption.set(-(offsetY - lastY) * 0.6);
    setLastY(offsetY);
    syncNestedBorderGlow(event);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
    ref.current?.querySelector(".border-glow-card")?.classList.add("is-proxy-glow-active");
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    ref.current?.querySelector(".border-glow-card")?.classList.remove("is-proxy-glow-active");
  }

  function handleProxyClick(event) {
    if (!ref.current || event.target.closest?.("a")) {
      return;
    }

    const targetLink = Array.from(ref.current.querySelectorAll("a[href]")).find((link) => {
      const rect = link.getBoundingClientRect();
      return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );
    });

    if (!targetLink) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    targetLink.click();
  }

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure ${className}`}
      style={{ height: containerHeight, width: containerWidth }}
      onClick={handleProxyClick}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning ? (
        <div className="tilted-card-mobile-alert">This effect is not optimized for mobile.</div>
      ) : null}

      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <div className="tilted-card-content">{children}</div>
        {displayOverlayContent && overlayContent ? (
          <motion.div className="tilted-card-overlay">{overlayContent}</motion.div>
        ) : null}
      </motion.div>

      {showTooltip ? (
        <motion.figcaption
          className="tilted-card-caption"
          style={{ x, y, opacity, rotate: rotateFigcaption }}
        >
          {captionText}
        </motion.figcaption>
      ) : null}
    </figure>
  );
}

export default TiltedCard;
