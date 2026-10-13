
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PHONE1 = "8105109482";
const PHONE2 = "8296023717";

const IMAGE_BASE =
  "https://antibirdnetsbangalore.com/uploads/antibirdnetsbangalorecom/";


const whatsappLink = (message) =>
  `https://wa.me/91${PHONE1}?text=${encodeURIComponent(message)}`;

const slides = [
  {
    label: "WELCOME TO SS ENTERPRISES",
    title: "About SS Enterprises",
    highlight: "Safety You Can Trust",
    description:
      "Providing quality safety net solutions for homes, apartments, construction sites and commercial properties across Bangalore.",
    localImage: "abt.png",
    fallback: IMAGE_BASE + "abt.png"
  },
  {
    label: "OUR COMMITMENT",
    title: "Quality Safety Nets",
    highlight: "Affordable Solutions",
    description:
      "We focus on reliable materials, practical installation and safety netting solutions suited to your requirements.",
    localImage: "balcony.jpg",
    fallback: IMAGE_BASE + "balcony.jpg"
  },
  {
    label: "RESIDENTIAL PROTECTION",
    title: "Protecting Homes",
    highlight: "And Families",
    description:
      "From balconies to open areas, our safety netting solutions help make residential spaces safer.",
    localImage: "children.jpg",
    fallback: IMAGE_BASE + "children.jpg"
  },
  {
    label: "COMMERCIAL PROTECTION",
    title: "Safety Solutions",
    highlight: "For Every Project",
    description:
      "Safety net solutions for construction sites, commercial buildings, shopping centers and other properties.",
    localImage: "construction.jpg",
    fallback: IMAGE_BASE + "construction.jpg"
  }
];

const solutions = [
  {
    icon: "fa-home",
    title: "Residential Safety",
    text:
      "Protective netting for balconies, windows, duct areas and other residential open spaces."
  },
  {
    icon: "fa-building",
    title: "Commercial Safety",
    text:
      "Suitable safety netting solutions for offices, malls and commercial properties."
  },
  {
    icon: "fa-wrench",
    title: "Installation Services",
    text:
      "Installation planned according to the property layout and individual customer requirements."
  },
  {
    icon: "fa-shield",
    title: "Reliable Materials",
    text:
      "Quality-focused netting solutions designed for different environments and applications."
  }
];

const strengths = [
  {
    icon: "fa-check-circle",
    title: "Quality First",
    text:
      "We focus on dependable netting materials and suitable installation methods."
  },
  {
    icon: "fa-inr",
    title: "Affordable Pricing",
    text:
      "Practical and cost-effective safety net solutions for different budgets."
  },
  {
    icon: "fa-users",
    title: "Customer Focus",
    text:
      "We understand customer requirements and recommend appropriate netting solutions."
  },
  {
    icon: "fa-cogs",
    title: "Customized Solutions",
    text:
      "Netting options for different sizes, shapes and property requirements."
  }
];

function SmartImage({
  localImage,
  fallback,
  alt,
  className,
  eager = false
}) {
  const [source, setSource] = useState(
    localImage ? `/images/${localImage}` : fallback
  );

  useEffect(() => {
    setSource(localImage ? `/images/${localImage}` : fallback);
  }, [localImage, fallback]);

  return (
    <img
      src={source}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      onError={() => {
        if (source !== fallback) {
          setSource(fallback);
        }
      }}
    />
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`ss-about-reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function About() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setActiveSlide((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  };

  const current = slides[activeSlide];

  return (
    <>
      <style>{`
        .ss-about-page {
          --about-navy: #092b50;
          --about-orange: #ff5a0a;
          --about-muted: #62758a;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--about-navy);
          overflow: hidden;
        }

        .ss-about-page *,
        .ss-about-page *::before,
        .ss-about-page *::after {
          box-sizing: border-box;
        }

        .ss-about-page a {
          text-decoration: none;
        }

        .ss-about-container {
          width: min(1200px, 92%);
          margin: auto;
        }

        /* ANIMATIONS */
        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutZoom {
          from { transform: scale(1.07); }
          to { transform: scale(1); }
        }

        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes aboutPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255,90,10,.25);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(255,90,10,0);
          }
        }

        .ss-about-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .ss-about-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* BUTTONS */
        .ss-about-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 25px;
          min-height: 48px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 800;
          text-align: center;
          transition: .3s ease;
        }

        .ss-about-btn-orange {
          color: white;
          background: var(--about-orange);
          box-shadow: 0 8px 22px rgba(255,90,10,.2);
        }

        .ss-about-btn-orange:hover {
          background: #e84c00;
          transform: translateY(-3px);
        }

        .ss-about-btn-outline {
          border: 1px solid rgba(255,255,255,.7);
          color: white;
        }

        .ss-about-btn-outline:hover {
          color: var(--about-navy);
          background: white;
        }

        /* HERO CAROUSEL */
        .ss-about-hero {
          background: #061f3b;
          position: relative;
        }

        .ss-about-hero-layout {
          display: grid;
          grid-template-columns: 48% 52%;
          min-height: 520px;
        }

        .ss-about-hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 70px 6% 85px max(5%, calc((100vw - 1200px)/2));
          color: white;
          background:
            radial-gradient(circle at 0% 0%, #174d80, transparent 60%),
            #061f3b;
        }

        .ss-about-hero-label {
          color: #ff975f;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .ss-about-hero-title {
          font-size: clamp(34px, 4vw, 55px);
          line-height: 1.15;
          font-weight: 900;
          margin: 0;
          animation: aboutFadeUp .7s both;
        }

        .ss-about-hero-title span {
          display: block;
          color: var(--about-orange);
          margin-top: 10px;
        }

        .ss-about-hero-description {
          max-width: 490px;
          color: #d6e2ee;
          font-size: 16px;
          line-height: 1.85;
          margin: 24px 0 30px;
          animation: aboutFadeUp .85s both;
        }

        .ss-about-hero-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
          animation: aboutFadeUp 1s both;
        }

        .ss-about-hero-media {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          background: #1b466b;
        }

        .ss-about-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: aboutZoom 5s ease both;
        }

        .ss-about-hero-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(6,31,59,.15),
            transparent 55%
          );
          pointer-events: none;
        }

        .ss-about-hero-badge {
          position: absolute;
          z-index: 2;
          bottom: 75px;
          right: 30px;
          background: rgba(255,255,255,.96);
          color: var(--about-navy);
          padding: 16px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 12px 30px rgba(0,0,0,.12);
          animation: aboutFloat 4s ease-in-out infinite;
        }

        .ss-about-hero-badge i {
          color: var(--about-orange);
          margin-right: 7px;
        }

        .ss-about-controls {
          position: absolute;
          z-index: 5;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 14px;
          border-radius: 40px;
          background: rgba(5,25,48,.85);
          border: 1px solid rgba(255,255,255,.15);
        }

        .ss-about-arrow {
          width: 31px;
          height: 31px;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.15);
          color: white;
          font-size: 22px;
          cursor: pointer;
          transition: .3s;
        }

        .ss-about-arrow:hover {
          background: var(--about-orange);
        }

        .ss-about-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.45);
          cursor: pointer;
          transition: .3s;
        }

        .ss-about-dot.active {
          width: 26px;
          border-radius: 10px;
          background: var(--about-orange);
        }

        /* BREADCRUMB */
        .ss-about-breadcrumb {
          padding: 17px 0;
          background: #f3f7fb;
          border-bottom: 1px solid #e5ecf4;
        }

        .ss-about-breadcrumb-inner {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 13px;
        }

        .ss-about-breadcrumb a {
          color: #5b7187;
        }

        .ss-about-breadcrumb span {
          color: var(--about-orange);
          font-weight: 800;
        }

        /* SECTIONS */
        .ss-about-section {
          padding: 90px 0;
        }

        .ss-about-section-alt {
          background: #f4f8fc;
        }

        .ss-about-eyebrow {
          color: var(--about-orange);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .ss-about-heading {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 900;
          line-height: 1.25;
          margin: 14px 0 20px;
          color: var(--about-navy);
        }

        .ss-about-text {
          font-size: 16px;
          line-height: 1.95;
          color: var(--about-muted);
        }

        .ss-about-section-intro {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 45px;
        }

        /* ABOUT INTRO */
        .ss-about-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .ss-about-intro-visual {
          position: relative;
        }

        .ss-about-intro-image {
          width: 100%;
          height: 470px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 18px 45px rgba(9,43,80,.12);
        }

        .ss-about-intro-badge {
          position: absolute;
          bottom: 25px;
          right: -15px;
          background: var(--about-orange);
          color: white;
          padding: 19px 22px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 800;
          animation: aboutFloat 4s ease-in-out infinite;
        }

        .ss-about-checklist {
          list-style: none;
          padding: 0;
          margin: 25px 0;
        }

        .ss-about-checklist li {
          color: #344c65;
          font-size: 15px;
          margin-bottom: 14px;
        }

        .ss-about-checklist i {
          color: var(--about-orange);
          margin-right: 11px;
        }

        /* SOLUTION CARDS */
        .ss-about-solutions {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .ss-about-solution-card {
          height: 100%;
          padding: 35px 22px;
          border: 1px solid #e4ebf3;
          border-radius: 15px;
          background: white;
          text-align: center;
          transition: .35s;
        }

        .ss-about-solution-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 18px 35px rgba(9,43,80,.1);
          border-color: #ffd0b9;
        }

        .ss-about-solution-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #fff0e8;
          color: var(--about-orange);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 22px;
          font-size: 28px;
          animation: aboutPulse 3s infinite;
          transition: transform .35s;
        }

        .ss-about-solution-card:hover .ss-about-solution-icon {
          transform: rotate(-10deg) scale(1.12);
        }

        .ss-about-solution-card h3 {
          font-size: 18px;
          margin: 0 0 12px;
        }

        .ss-about-solution-card p {
          color: var(--about-muted);
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        /* MISSION */
        .ss-about-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .ss-about-mission-card {
          padding: 40px;
          border-radius: 16px;
          background: white;
          border: 1px solid #e4ebf3;
          box-shadow: 0 8px 30px rgba(9,43,80,.05);
          transition: .35s;
        }

        .ss-about-mission-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 35px rgba(9,43,80,.1);
        }

        .ss-about-mission-icon {
          font-size: 30px;
          color: var(--about-orange);
          margin-bottom: 20px;
        }

        .ss-about-mission-card h3 {
          font-size: 25px;
          margin: 0 0 15px;
        }

        .ss-about-mission-card p {
          color: var(--about-muted);
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        /* STRENGTHS */
        .ss-about-strength-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .ss-about-strength-card {
          padding: 30px 20px;
          text-align: center;
          border-radius: 14px;
          border: 1px solid #e7edf5;
          background: white;
          transition: .35s;
        }

        .ss-about-strength-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 30px rgba(9,43,80,.1);
        }

        .ss-about-strength-card i {
          font-size: 32px;
          color: var(--about-orange);
          margin-bottom: 20px;
          transition: transform .35s;
        }

        .ss-about-strength-card:hover i {
          transform: scale(1.2) rotate(-10deg);
        }

        .ss-about-strength-card h3 {
          font-size: 17px;
          margin: 0 0 12px;
        }

        .ss-about-strength-card p {
          color: var(--about-muted);
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        /* CTA */
        .ss-about-cta {
          padding: 85px 20px;
          text-align: center;
          background:
            radial-gradient(circle at 85% 10%, #1b578c, transparent 40%),
            linear-gradient(120deg, #061f3b, #103c68);
        }

        .ss-about-cta h2 {
          color: white;
          font-size: clamp(28px, 3vw, 42px);
          margin: 0 0 20px;
        }

        .ss-about-cta p {
          color: #d9e5f2;
          max-width: 680px;
          margin: 0 auto 28px;
          font-size: 16px;
          line-height: 1.85;
        }

        .ss-about-cta-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .ss-about-whatsapp {
          background: #19a85a;
          color: white;
        }

        .ss-about-whatsapp:hover {
          background: #128347;
          transform: translateY(-3px);
        }

        .ss-about-whatsapp i {
          font-size: 21px;
          transition: transform .3s;
        }

        .ss-about-whatsapp:hover i {
          transform: rotate(-12deg) scale(1.2);
        }

        /* TABLET */
        @media (max-width: 1050px) {
          .ss-about-solutions,
          .ss-about-strength-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ss-about-intro-grid {
            gap: 35px;
          }
        }

        /* MOBILE */
        @media (max-width: 750px) {
          .ss-about-hero-layout {
            display: flex;
            flex-direction: column-reverse;
            min-height: auto;
          }

          .ss-about-hero-media {
            height: 270px;
            min-height: 270px;
          }

          .ss-about-hero-content {
            align-items: center;
            text-align: center;
            min-height: 325px;
            padding: 35px 6% 80px;
          }

          .ss-about-hero-title {
            font-size: clamp(29px, 7vw, 38px);
          }

          .ss-about-hero-label {
            font-size: 10px;
            margin-bottom: 13px;
          }

          .ss-about-hero-description {
            font-size: 14px;
            margin: 18px 0 23px;
          }

          .ss-about-hero-actions {
            justify-content: center;
          }

          .ss-about-hero-badge {
            bottom: 15px;
            right: 15px;
            padding: 11px 14px;
            font-size: 11px;
          }

          .ss-about-section {
            padding: 60px 0;
          }

          .ss-about-intro-grid {
            grid-template-columns: 1fr;
          }

          .ss-about-intro-image {
            height: 310px;
          }

          .ss-about-intro-badge {
            right: 10px;
            bottom: 15px;
            padding: 13px 16px;
            font-size: 12px;
          }

          .ss-about-mission-grid {
            grid-template-columns: 1fr;
          }

          .ss-about-mission-card {
            padding: 30px 25px;
          }

          .ss-about-solutions,
          .ss-about-strength-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 13px;
          }

          .ss-about-solution-card,
          .ss-about-strength-card {
            padding: 25px 13px;
          }

          .ss-about-solution-card h3,
          .ss-about-strength-card h3 {
            font-size: 15px;
          }

          .ss-about-solution-card p,
          .ss-about-strength-card p {
            font-size: 12px;
          }
        }

        @media (max-width: 390px) {
          .ss-about-hero-media {
            height: 230px;
            min-height: 230px;
          }

          .ss-about-hero-title {
            font-size: 27px;
          }

          .ss-about-solutions,
          .ss-about-strength-grid {
            grid-template-columns: 1fr;
          }

          .ss-about-btn {
            padding: 12px 17px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ss-about-page *,
          .ss-about-page *::before,
          .ss-about-page *::after {
            animation: none !important;
            transition-duration: .01ms !important;
          }

          .ss-about-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main className="ss-about-page">

        {/* HERO CAROUSEL */}
        <section
          className="ss-about-hero"
          aria-label="About SS Enterprises carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <div className="ss-about-hero-layout">
            <div
              className="ss-about-hero-content"
              key={`content-${activeSlide}`}
            >
              <span className="ss-about-hero-label">
                {current.label}
              </span>

              {activeSlide === 0 ? (
                <h1 className="ss-about-hero-title">
                  {current.title}
                  <span>{current.highlight}</span>
                </h1>
              ) : (
                <h2 className="ss-about-hero-title">
                  {current.title}
                  <span>{current.highlight}</span>
                </h2>
              )}

              <p className="ss-about-hero-description">
                {current.description}
              </p>

              <div className="ss-about-hero-actions">
                <Link
                  to="/services"
                  className="ss-about-btn ss-about-btn-orange"
                >
                  Explore Services →
                </Link>

                <Link
                  to="/contact"
                  className="ss-about-btn ss-about-btn-outline"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div
              className="ss-about-hero-media"
              key={`image-${activeSlide}`}
            >
              <SmartImage
                localImage={current.localImage}
                fallback={current.fallback}
                alt={current.title}
                className="ss-about-hero-image"
                eager
              />

              <div className="ss-about-hero-badge">
                <i
                  className="fa fa-check-circle"
                  aria-hidden="true"
                ></i>
                Quality Safety Net Solutions
              </div>
            </div>
          </div>

          <div className="ss-about-controls">
            <button
              type="button"
              className="ss-about-arrow"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>

            {slides.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`ss-about-dot ${
                  index === activeSlide ? "active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${item.title}`}
                aria-current={
                  index === activeSlide ? "true" : undefined
                }
              />
            ))}

            <button
              type="button"
              className="ss-about-arrow"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="ss-about-breadcrumb">
          <div className="ss-about-container ss-about-breadcrumb-inner">
            <Link to="/">Home</Link>
            <i
              className="fa fa-angle-right"
              aria-hidden="true"
            ></i>
            <span>About Us</span>
          </div>
        </div>

        {/* ABOUT INTRODUCTION */}
        <section className="ss-about-section">
          <div className="ss-about-container ss-about-intro-grid">
            <Reveal>
              <div className="ss-about-intro-visual">
                <SmartImage
                  localImage="abt.png"
                  fallback={IMAGE_BASE + "balcony.jpg"}
                  alt="SS Enterprises balcony safety net installation"
                  className="ss-about-intro-image"
                />

                <div className="ss-about-intro-badge">
                  Your Safety, Our Priority
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="ss-about-eyebrow">
                Who We Are
              </span>

              <h2 className="ss-about-heading">
                Welcome to SS Enterprises
              </h2>

              <p className="ss-about-text">
                SS Enterprises is one of the fastest growing
                providers of safety nets. We specialize in
                sports nets, malls safety nets, construction
                safety nets and other protective netting
                solutions.
              </p>

              <p className="ss-about-text">
                We provide quality safety nets at affordable
                prices. Security is an important consideration
                in commercial and residential areas, and
                we offer netting solutions according to the
                requirements of our clients.
              </p>

              <p className="ss-about-text">
                Our range of safety nets is designed for
                different applications, including high-rise
                buildings, shopping centers, sports fields,
                apartments and office structures.
              </p>

              <ul className="ss-about-checklist">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Quality Safety Net Materials
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Affordable Safety Solutions
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Residential & Commercial Installations
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Solutions Based on Customer Requirements
                </li>
              </ul>

              <Link
                to="/services"
                className="ss-about-btn ss-about-btn-orange"
              >
                View Our Services →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* OUR EXPERTISE */}
        <section className="ss-about-section ss-about-section-alt">
          <div className="ss-about-container">
            <Reveal>
              <div className="ss-about-section-intro">
                <span className="ss-about-eyebrow">
                  Our Expertise
                </span>

                <h2 className="ss-about-heading">
                  Safety Solutions for Different Spaces
                </h2>

                <p className="ss-about-text">
                  We offer protective netting solutions
                  for homes, high-rise buildings, commercial
                  spaces and construction environments.
                </p>
              </div>
            </Reveal>

            <div className="ss-about-solutions">
              {solutions.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="ss-about-solution-card">
                    <div className="ss-about-solution-icon">
                      <i
                        className={`fa ${item.icon}`}
                        aria-hidden="true"
                      ></i>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="ss-about-section">
          <div className="ss-about-container">
            <Reveal>
              <div className="ss-about-section-intro">
                <span className="ss-about-eyebrow">
                  What Drives Us
                </span>

                <h2 className="ss-about-heading">
                  Our Mission & Vision
                </h2>
              </div>
            </Reveal>

            <div className="ss-about-mission-grid">
              <Reveal>
                <div className="ss-about-mission-card">
                  <div className="ss-about-mission-icon">
                    <i
                      className="fa fa-bullseye"
                      aria-hidden="true"
                    ></i>
                  </div>

                  <h3>Our Mission</h3>

                  <p>
                    To provide quality, dependable and
                    affordable safety net solutions that
                    help protect people, properties and
                    working environments. We aim to understand
                    each customer's requirements and offer
                    suitable installation services without
                    compromising on material quality.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="ss-about-mission-card">
                  <div className="ss-about-mission-icon">
                    <i
                      className="fa fa-eye"
                      aria-hidden="true"
                    ></i>
                  </div>

                  <h3>Our Vision</h3>

                  <p>
                    To become a trusted name for safety
                    netting solutions across Bangalore by
                    delivering consistent service, reliable
                    products and customer-focused protection
                    solutions for residential, commercial
                    and construction applications.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* QUALITY COMMITMENT */}
        <section className="ss-about-section ss-about-section-alt">
          <div className="ss-about-container">
            <Reveal>
              <div className="ss-about-section-intro">
                <span className="ss-about-eyebrow">
                  Our Commitment
                </span>

                <h2 className="ss-about-heading">
                  Why Choose SS Enterprises?
                </h2>

                <p className="ss-about-text">
                  We focus on providing dependable solutions
                  with quality materials, affordable pricing
                  and attention to customer requirements.
                </p>
              </div>
            </Reveal>

            <div className="ss-about-strength-grid">
              {strengths.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="ss-about-strength-card">
                    <i
                      className={`fa ${item.icon}`}
                      aria-hidden="true"
                    ></i>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SITE INSPECTION */}
        <section className="ss-about-section">
          <div className="ss-about-container ss-about-intro-grid">
            <Reveal>
              <div>
                <span className="ss-about-eyebrow">
                  Our Installation Approach
                </span>

                <h2 className="ss-about-heading">
                  Safety Netting Designed for Your Space
                </h2>

                <p className="ss-about-text">
                  Safety is especially important in high-rise
                  buildings, shopping centers, sports fields,
                  office structures and construction sites.
                  Suitable safety netting can help reduce
                  certain risks associated with elevated
                  and open areas.
                </p>

                <p className="ss-about-text">
                  At SS Enterprises, we pay attention to
                  the location where the net is to be
                  installed and recommend suitable netting
                  according to the site and customer needs.
                  We focus on quality materials and practical
                  installation solutions.
                </p>

                <a
                  href={whatsappLink(
                    "Hello SS Enterprises, I would like to enquire about safety net installation and a site inspection."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-about-btn ss-about-whatsapp"
                >
                  <i
                    className="fa fa-whatsapp"
                    aria-hidden="true"
                  ></i>
                  Enquire on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="ss-about-intro-visual">
                <SmartImage
                  localImage="construction.jpg"
                  fallback={IMAGE_BASE + "construction.jpg"}
                  alt="Safety net solutions for construction sites"
                  className="ss-about-intro-image"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="ss-about-cta">
          <Reveal>
            <div className="ss-about-container">
              <h2>
                Looking for Reliable Safety Net Solutions?
              </h2>

              <p>
                Contact SS Enterprises for balcony safety
                nets, pigeon nets, construction safety nets,
                invisible grills, cloth hangers and more.
                We are here to help you find a suitable
                solution for your property.
              </p>

              <div className="ss-about-cta-actions">
                <a
                  href={`tel:+91${PHONE1}`}
                  className="ss-about-btn ss-about-btn-orange"
                >
                  <i
                    className="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  Call {PHONE1}
                </a>

                <a
                  href={`tel:+91${PHONE2}`}
                  className="ss-about-btn ss-about-btn-outline"
                >
                  <i
                    className="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  Call {PHONE2}
                </a>

                <a
                  href={whatsappLink(
                    "Hello SS Enterprises, I would like to know more about your safety net services."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-about-btn ss-about-whatsapp"
                >
                  <i
                    className="fa fa-whatsapp"
                    aria-hidden="true"
                  ></i>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </section>

      </main>
    </>
  );
}

export default About;
