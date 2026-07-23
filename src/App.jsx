import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Clapperboard,
  Film,
  Mail,
  Phone,
  Pause,
  Play,
  Sparkles,
  Wand2,
  X,
} from "lucide-react";
import SideRays from "./components/SideRays";
import BorderGlow from "./components/BorderGlow";
import Dock from "./components/Dock";
import Particles from "./components/Particles";
import ShinyText from "./components/ShinyText";
import TiltedCard from "./components/TiltedCard";
import { usePortfolioMotion } from "./usePortfolioMotion";

const contact = {
  phone: "13548347127",
  email: "1263439153@qq.com",
};

const floatingNavItems = [
  { label: "经历", target: "#about" },
  { label: "项目", target: "#projects" },
  { label: "优势", target: "#strengths" },
  { label: "联系", target: "#contact" },
].map((item) => ({
  icon: <span className="floatingDockLabel">{item.label}</span>,
  label: item.label,
  onClick: () => {
    document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth" });
  },
}));

const metrics = [
  { value: "3", label: "段商业制作经历" },
  { value: "1", label: "部动画电影后期参与" },
  { value: "6+", label: "核心影像软件" },
  { value: "AIGC", label: "短剧全流程制作" },
];

const experienceCards = [
  "商业项目制作经验",
  "动画电影后期制作",
  "核心影像软件能力",
  "短剧全流程制作",
];

const profileGlowColors = ["#c084fc", "#e9d5ff", "#38bdf8"];
const cardGlowColors = ["#c084fc", "#a855f7", "#38bdf8"];

const projects = [
  {
    title: "《非人哉·限时玩家》",
    tag: "动画电影 / 后期合成",
    copy:
      "参与动画电影后期制作，负责画面元素合成、调色与特效加工，配合美术和动画团队提升最终视觉表现。",
    meta: "Compositing / Color / FX",
    tone: "cyan",
    video: "/media/frzmv01-project.mp4",
    cover: "/media/frzmv01-cover.jpg",
  },
  {
    title: "叫叫阅读动画内容",
    tag: "二维动画 / 合成协作",
    copy:
      "面向儿童阅读动画内容，围绕分镜、美术、动画资产完成镜头合成与画面整理，保障交付节奏。",
    meta: "2D Animation / Pipeline",
    tone: "green",
    video: "/media/m8w4d3-project.mp4",
    cover: "/media/m8w4d3-cover.jpg",
  },
  {
    title: "国内外AI 短剧全流程制作",
    tag: "AIGC / 短剧生产",
    copy:
      "覆盖脚本拆解、素材资产生产、视频生成、剪辑包装与成片交付，具备独立推进项目闭环的经验。",
    meta: "Script / Assets / Edit",
    tone: "violet",
    video: "/media/sicily-project.mp4",
    cover: "/media/sicily-cover-v2.jpg",
  },
  {
    title: "课程外包视频包装",
    tag: "剪辑 / 花字 / 修音",
    copy:
      "基于既有视频素材与花字需求独立完成后期剪辑，包含基础调色、修音降噪、去水印与遮罩修补。",
    meta: "Editing / Motion Package",
    tone: "amber",
    video: "/media/s1c1-c3-project.mp4",
    cover: "/media/s1c1-c3-cover.jpg",
  },
  {
    title: "企业宣传片视觉制作",
    tag: "企业宣传片 / 剪辑包装",
    copy:
      "围绕品牌调性与传播目标完成企业宣传片后期制作，负责素材筛选、叙事节奏、画面包装、基础调色与成片质感统一，让信息表达更凝练、更具商业可信度。",
    meta: "Brand Film / Edit / Motion",
    tone: "cyan",
    video: "/media/corporate-promo-project.mp4",
    cover: "/media/corporate-promo-cover.jpg",
  },
];

const strengths = [
  {
    icon: Film,
    title: "剪辑节奏",
    copy: "能根据课程、短剧和动画内容选择合适的叙事节奏，让信息表达更清晰。",
  },
  {
    icon: Sparkles,
    title: "合成与特效",
    copy: "熟悉 AE、PR、PS 等工具，能完成镜头合成、调色、包装与基础特效处理。",
  },
  {
    icon: Wand2,
    title: "AI 视频流程",
    copy: "具备 AI 短剧从脚本拆解到视频生产、剪辑包装、最终交付的完整实践。",
  },
  {
    icon: Clapperboard,
    title: "协作交付",
    copy: "能与分镜、美术、动画团队配合，也能独立处理外包视频的后期制作闭环。",
  },
];

function App() {
  usePortfolioMotion();
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <main>
        <Hero isBackgroundPaused={Boolean(activeProject)} />
        <About />
        <Projects onPlayProject={setActiveProject} />
        <Strengths />
        <Contact />
      </main>
      <VideoPlayerModal project={activeProject} onClose={() => setActiveProject(null)} />
      <FloatingNav />
    </>
  );
}

function FloatingNav() {
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState(false);
  const floatingNavTickingRef = useRef(false);

  useEffect(() => {
    const updateFloatingNav = () => {
      if (floatingNavTickingRef.current) {
        return;
      }

      floatingNavTickingRef.current = true;
      window.requestAnimationFrame(() => {
        floatingNavTickingRef.current = false;
        setIsFloatingNavVisible(window.scrollY >= window.innerHeight - 12);
      });
    };

    updateFloatingNav();
    window.addEventListener("scroll", updateFloatingNav, { passive: true });
    window.addEventListener("resize", updateFloatingNav);

    return () => {
      window.removeEventListener("scroll", updateFloatingNav);
      window.removeEventListener("resize", updateFloatingNav);
    };
  }, []);

  return (
    <nav
      className={`floatingNavLinks ${isFloatingNavVisible ? "isVisible" : ""}`}
      aria-label="固定导航"
    >
      <Dock
        items={floatingNavItems}
        className="floatingDock"
        panelHeight={66}
        baseItemSize={54}
        magnification={74}
        dockHeight={138}
        distance={150}
      />
    </nav>
  );
}

function SectionRays() {
  return (
    <SideRays
      className="sectionRays"
      speed={0.62}
      rayColor1="#EAB308"
      rayColor2="#96c8ff"
      intensity={1.55}
      spread={1.28}
      origin="top-right"
      tilt={-43}
      saturation={1.16}
      blend={0.62}
      falloff={1.55}
      opacity={0.44}
    />
  );
}

function Hero({ isBackgroundPaused }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const smoothPlayback = () => {
      video.playbackRate = 0.85;
    };

    smoothPlayback();
    video.addEventListener("loadedmetadata", smoothPlayback);

    return () => {
      video.removeEventListener("loadedmetadata", smoothPlayback);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isBackgroundPaused) {
      video.pause();
      return;
    }

    video.play().catch(() => undefined);
  }, [isBackgroundPaused]);

  return (
    <section className="hero" id="home">
      <video
        ref={videoRef}
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        fetchPriority="high"
        poster="/media/hero-earth-poster.jpg"
      >
        <source src="/media/hero-earth.mp4" type="video/mp4" />
      </video>
      <div className="videoFallback" aria-hidden="true" />
      <div className="posterGate" aria-hidden="true" />
      <div className="posterBeam" aria-hidden="true" />
      <div className="posterNoise" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="heroBlend" aria-hidden="true" />
      <div className="openingCurtain" aria-hidden="true" />

      <nav className="nav shell" aria-label="主导航" data-motion="hero-nav">
        <a className="brand" href="#home" aria-label="返回首页">
          YQR
        </a>
        <div className="navLinks">
          <a href="#about">经历</a>
          <a href="#projects">项目</a>
          <a href="#strengths">优势</a>
          <a href="#contact">联系</a>
        </div>
        <a className="navCta" href={`mailto:${contact.email}`}>
          <Mail size={18} />
          联系合作
        </a>
      </nav>

      <div className="heroContent shell">
        <div className="heroKicker" data-motion="hero-kicker">
          <span />
          剪辑师 / 特效师 / 动效设计师
        </div>
        <h1 className="heroTitle">
          <span className="heroTitleMask">
            <span className="heroTitleLine">杨清榕</span>
          </span>
          <span className="heroTitleMask">
            <span className="heroTitleLine">影视后期作品集</span>
          </span>
        </h1>
        <p className="heroCopy" data-motion="hero-copy">
          <ShinyText
            text="专注剪辑、动画合成、视觉包装、音画协同与 AI 短剧全流程制作。把素材组织成更有节奏、更有完成度的画面体验。"
            speed={4.8}
            delay={1.2}
            color="rgba(230, 215, 248, 0.68)"
            shineColor="#ffffff"
            spread={112}
            direction="left"
            className="heroShinyCopy"
          />
        </p>
        <div className="heroActions" data-motion="hero-actions">
          <a className="primaryButton" href="#projects">
            <Play size={18} fill="currentColor" />
            查看精选项目
          </a>
          <a className="ghostButton" href={`tel:${contact.phone}`}>
            <Phone size={18} />
            {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" data-motion-section>
      <SectionRays />
      <div className="shell split">
        <BorderGlow
          className="portraitPanel aboutGlowCard"
          edgeSensitivity={24}
          glowColor="270 88 76"
          backgroundColor="#100d16"
          borderRadius={8}
          glowRadius={58}
          glowIntensity={0.92}
          coneSpread={22}
          animated={true}
          colors={profileGlowColors}
          fillOpacity={0.2}
          data-motion-card
        >
          <div className="portraitPanelContent">
            <div className="portraitGlow" />
            <div
              className="portraitFrame"
              role="img"
              aria-label="杨清榕人物视觉占位图"
              data-motion-image="portrait"
            >
              <Particles
                className="portraitParticles"
                particleColors={["#ffffff"]}
                particleCount={260}
                particleSpread={7}
                speed={0.08}
                particleBaseSize={76}
                sizeRandomness={1.85}
                cameraDistance={18}
                moveParticlesOnHover={true}
                particleHoverFactor={2.2}
                alphaParticles={true}
                pixelRatio={1.45}
              />
              <span>YQR</span>
            </div>
          </div>
        </BorderGlow>

        <div className="aboutCopy">
          <p className="eyebrow" data-motion="section-title">Profile</p>
          <h2 data-motion="section-copy">从二维动画合成到 AI 短剧生产，覆盖后期交付的关键环节。</h2>
          <p data-motion="section-copy">
            毕业于四川传媒学院影视动画专业，拥有课程视频剪辑包装、二维动画合成、动画电影后期制作与
            AI 短剧全流程制作经验。熟悉 AE、PS、PR、LRC、AI、AN 等设计剪辑调色软件，并了解 C4D、
            ZBrush、3ds Max、Maya 等三维工具。
          </p>
          <div className="contactStrip" data-motion-card>
            <BorderGlow
              className="contactGlowLink"
              edgeSensitivity={24}
              glowColor="270 88 76"
              backgroundColor="#0f0d14"
              borderRadius={6}
              glowRadius={24}
              glowIntensity={0.72}
              coneSpread={20}
              colors={cardGlowColors}
              fillOpacity={0.12}
            >
              <a href={`tel:${contact.phone}`}>
                <Phone size={18} />
                {contact.phone}
              </a>
            </BorderGlow>
            <BorderGlow
              className="contactGlowLink"
              edgeSensitivity={24}
              glowColor="270 88 76"
              backgroundColor="#0f0d14"
              borderRadius={6}
              glowRadius={24}
              glowIntensity={0.72}
              coneSpread={20}
              colors={cardGlowColors}
              fillOpacity={0.12}
            >
              <a href={`mailto:${contact.email}`}>
                <Mail size={18} />
                {contact.email}
              </a>
            </BorderGlow>
          </div>
          <div className="metricsGrid">
            {experienceCards.map((item) => (
              <BorderGlow
                className="metric aboutGlowMetric"
                key={item}
                edgeSensitivity={26}
                glowColor="270 88 76"
                backgroundColor="#0f0d14"
                borderRadius={8}
                glowRadius={34}
                glowIntensity={0.82}
                coneSpread={20}
                colors={profileGlowColors}
                fillOpacity={0.16}
                data-motion-card
              >
                <span className="metricText">{item}</span>
              </BorderGlow>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ onPlayProject }) {
  return (
    <section className="section projects" id="projects" data-motion-section>
      <SectionRays />
      <div className="shell">
        <div className="sectionHead">
          <p className="eyebrow" data-motion="section-title">Selected Work</p>
          <h2 data-motion="section-copy">精选项目</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <TiltedCard
              key={project.title}
              className="projectTiltWrap"
              rotateAmplitude={5.5}
              scaleOnHover={1.04}
              showMobileWarning={false}
              showTooltip={false}
            >
              <BorderGlow
                className={`projectCard projectGlowCard ${project.tone} ${project.video ? "hasPlayableProject" : ""}`}
                edgeSensitivity={18}
                glowColor="270 88 76"
                backgroundColor="#100d16"
                borderRadius={8}
                glowRadius={64}
                glowIntensity={1.45}
                coneSpread={30}
                colors={cardGlowColors}
                fillOpacity={0.26}
                data-motion-card
              >
              <div
                className={`projectImage ${project.cover ? "hasProjectCover" : ""}`}
                aria-hidden="true"
                data-motion-image="project"
              >
                {project.cover ? (
                  <img className="projectCover" src={project.cover} alt="" loading="lazy" />
                ) : null}
                <span className="scanline" />
                <span className="frameNumber">0{index + 1}</span>
              </div>
              <div className="projectBody">
                <div>
                  <p>{project.tag}</p>
                  <h3>{project.title}</h3>
                </div>
                {project.video ? (
                  <a
                    className="projectPlayLink"
                    href={project.video || "#contact"}
                    onClick={(event) => {
                      event.preventDefault();
                      onPlayProject(project);
                    }}
                    aria-haspopup="dialog"
                    aria-label={`播放 ${project.title}`}
                  >
                    <Play size={21} />
                  </a>
                ) : null}
                <a href="#contact" aria-label={`联系了解 ${project.title}`}>
                  <ArrowUpRight size={21} />
                </a>
              </div>
              <p className="projectCopy">{project.copy}</p>
              <span className="projectMeta">{project.meta}</span>
              </BorderGlow>
            </TiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoPlayerModal({ project, onClose }) {
  const videoRef = useRef(null);
  const seekTrackRef = useRef(null);
  const isSeekingRef = useRef(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const updateSeeking = (nextIsSeeking) => {
    isSeekingRef.current = nextIsSeeking;
  };

  useEffect(() => {
    const video = videoRef.current;
    setDuration(0);
    setCurrentTime(0);
    setIsPlaying(false);
    updateSeeking(false);

    if (video) {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }, [project?.video]);

  if (!project) {
    return null;
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    setCurrentTime(video.currentTime || 0);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isSeekingRef.current) {
      return;
    }

    setCurrentTime(video.currentTime || 0);
  };

  const seekToVideo = (seekTime) => {
    const video = videoRef.current;
    const nextTime = Math.min(Math.max(seekTime, 0), duration || seekTime);
    setCurrentTime(nextTime);

    if (video) {
      video.currentTime = nextTime;
    }
  };

  const handleSeekTrack = (clientX) => {
    const track = seekTrackRef.current;
    if (!track || !duration) {
      return;
    }

    const rect = track.getBoundingClientRect();
    const progress = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    seekToVideo(progress * duration);
  };

  const handleSeekTrackPointerDown = (event) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    window.addEventListener("pointermove", handleWindowSeekPointerMove);
    window.addEventListener("pointerup", handleWindowSeekPointerUp, { once: true });
    window.addEventListener("pointercancel", handleWindowSeekPointerCancel, { once: true });
    updateSeeking(true);
    handleSeekTrack(event.clientX);
  };

  const handleSeekTrackPointerMove = (event) => {
    if (!isSeekingRef.current) {
      return;
    }

    handleSeekTrack(event.clientX);
  };

  const finishSeek = (clientX) => {
    if (isSeekingRef.current && Number.isFinite(clientX)) {
      handleSeekTrack(clientX);
    }

    window.removeEventListener("pointermove", handleWindowSeekPointerMove);
    window.removeEventListener("pointerup", handleWindowSeekPointerUp);
    window.removeEventListener("pointercancel", handleWindowSeekPointerCancel);
    updateSeeking(false);
  };

  const handleSeekTrackPointerUp = (event) => {
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    finishSeek(event.clientX);
  };

  const handleSeekTrackPointerCancel = (event) => {
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    finishSeek(event.clientX);
  };

  function handleWindowSeekPointerMove(event) {
    if (isSeekingRef.current) {
      handleSeekTrack(event.clientX);
    }
  }

  function handleWindowSeekPointerUp(event) {
    finishSeek(event.clientX);
  }

  function handleWindowSeekPointerCancel(event) {
    finishSeek(event.clientX);
  }

  const handleSeekTrackKeyDown = (event) => {
    if (!duration) {
      return;
    }

    const seekStep = event.shiftKey ? 10 : 5;
    const keySeekActions = {
      ArrowLeft: currentTime - seekStep,
      ArrowRight: currentTime + seekStep,
      Home: 0,
      End: duration,
    };

    if (Object.prototype.hasOwnProperty.call(keySeekActions, event.key)) {
      event.preventDefault();
      seekToVideo(keySeekActions[event.key]);
    }
  };

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused || video.ended) {
      video.play().catch(() => setIsPlaying(false));
      return;
    }

    video.pause();
  };

  const progressPercent = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

  return (
    <div className="videoModalBackdrop" role="presentation" onClick={onClose}>
      <div
        className="videoModal"
        role="dialog"
        aria-modal="true"
        aria-label={`Video player ${project.title}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="videoModalHeader">
          <div>
            <p>{project.tag}</p>
            <h3>{project.title}</h3>
          </div>
          <button className="videoModalClose" type="button" onClick={onClose} aria-label="Close video">
            <X size={22} />
          </button>
        </div>
        <video
          key={project.video}
          ref={videoRef}
          className="videoModalPlayer"
          preload="metadata"
          playsInline
          poster={project.cover}
          onClick={toggleVideoPlayback}
          onLoadedMetadata={handleLoadedMetadata}
          onDurationChange={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={project.video} type="video/mp4" />
        </video>
        <div className="videoSeekBar" aria-label="Video progress control">
          <button
            className="videoPlayToggle"
            type="button"
            onClick={toggleVideoPlayback}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={17} /> : <Play size={17} fill="currentColor" />}
          </button>
          <span>{formatVideoTime(currentTime)}</span>
          <div
            ref={seekTrackRef}
            className="videoSeekTrack"
            role="slider"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration || 0)}
            aria-valuenow={Math.round(currentTime)}
            aria-disabled={!duration}
            tabIndex={duration ? 0 : -1}
            onKeyDown={handleSeekTrackKeyDown}
            onPointerDown={handleSeekTrackPointerDown}
            onPointerMove={handleSeekTrackPointerMove}
            onPointerUp={handleSeekTrackPointerUp}
            onPointerCancel={handleSeekTrackPointerCancel}
          >
            <span className="videoSeekFill" style={{ width: `${progressPercent}%` }} />
          </div>
          <span>{formatVideoTime(duration)}</span>
        </div>
        <p className="videoModalMeta">{project.meta}</p>
      </div>
    </div>
  );
}
function formatVideoTime(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0:00";
  }

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}
function Strengths() {
  return (
    <section className="section strengths" id="strengths" data-motion-section>
      <SectionRays />
      <div className="shell">
        <div className="sectionHead compact">
          <p className="eyebrow" data-motion="section-title">Capabilities</p>
          <h2 data-motion="section-copy">个人优势</h2>
        </div>
        <div className="strengthGrid">
          {strengths.map(({ icon: Icon, title, copy }) => (
            <BorderGlow
              className="strengthCard strengthGlowCard"
              key={title}
              edgeSensitivity={27}
              glowColor="270 88 76"
              backgroundColor="#0f0d14"
              borderRadius={8}
              glowRadius={34}
              glowIntensity={0.78}
              coneSpread={21}
              colors={cardGlowColors}
              fillOpacity={0.13}
              data-motion-card
            >
              <div className="iconBox">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contactPage" id="contact" data-motion-section>
      <SectionRays />
      <div className="shell contactInner">
        <p className="eyebrow" data-motion="section-title">Contact</p>
        <h2 data-motion="section-copy">
          <ShinyText
            text="让下一支片子更利落、更有质感。"
            speed={5.2}
            delay={1.4}
            color="#f7f1ff"
            shineColor="#c084fc"
            spread={108}
            direction="left"
            className="contactShinyTitle"
          />
        </h2>
        <p data-motion="section-copy">
          可承接剪辑、特效包装、动画合成与 AI 短剧相关制作。欢迎通过电话或邮箱联系。
        </p>
        <div className="contactActions" data-motion-card>
          <a className="primaryButton" href={`mailto:${contact.email}`}>
            <Mail size={19} />
            {contact.email}
          </a>
          <a className="ghostButton" href={`tel:${contact.phone}`}>
            <Phone size={19} />
            {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
