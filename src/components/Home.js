
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PHONE = "918105109482";
const PHONE2 = "8296023717";

const unsplash = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const photos = {
  balcony: unsplash("photo-1600607687939-ce8a6c25118c"),
  pigeon: unsplash("photo-1552728089-57bdde30beb3"),
  antiBird: unsplash("photo-1444464666168-49d633b86797"),
  children: unsplash("photo-1476703993599-0035a21b17a9"),
  construction: unsplash("photo-1504307651254-35680f356dfd"),
  monkey: unsplash("photo-1540574163026-643ea20ade25"),
  duct: unsplash("photo-1486406146926-c627a92ad1ab"),
  spikes: unsplash("photo-1487958449943-2429e8be8625"),
  coconut: unsplash("photo-1500375592092-40eb2168fd21"),
  grills: unsplash("photo-1600566753190-17f0baa2a6c3"),
  hanger: unsplash("photo-1483985988355-763728e1935b")
};

const services = [
  {
    title: "Balcony Safety Nets",
    image: "balcony.jpg",
    fallback: photos.balcony,
    icon: "🏢",
    description:
      "Balconies offer beautiful views from high-rise buildings, but safety is equally important. SS Enterprises provides durable nylon safety nets in different shapes and sizes for balconies and apartments."
  },
  {
    title: "Pigeon Safety Nets",
    image: "pigeon.jpg",
    fallback: photos.pigeon,
    icon: "🕊️",
    description:
      "We provide pigeon safety net installation across Bangalore. Our solutions help protect residential apartments, balconies and commercial buildings from unwanted bird entry."
  },
  {
    title: "Anti Bird Nets",
    image: "anti_bird.jpg",
    fallback: photos.antiBird,
    icon: "🐦",
    description:
      "SS Enterprises provides quality anti-bird netting solutions made from carefully selected materials to help protect homes, offices and commercial properties."
  },
  {
    title: "Children Safety Nets",
    image: "children.jpg",
    fallback: photos.children,
    icon: "🛡️",
    description:
      "Children's safety is important. We provide protective netting for balconies, windows and elevated open spaces to help reduce accidental fall risks."
  },
  {
    title: "Construction Safety Nets",
    image: "construction.jpg",
    fallback: photos.construction,
    icon: "🏗️",
    description:
      "Construction safety nets provide additional protection at building and construction sites, helping reduce hazards from falling objects and work at height."
  },
  {
    title: "Monkey Safety Nets",
    image: "monkey.jpg",
    fallback: photos.monkey,
    icon: "🐒",
    description:
      "Our protective netting solutions help prevent unwanted monkey entry into terraces, balconies and other open areas of residential properties."
  },
  {
    title: "Duct Area Safety Nets",
    image: "duct_area.jpg",
    fallback: photos.duct,
    icon: "🏬",
    description:
      "Duct area safety nets help secure open spaces between apartment blocks and buildings while discouraging birds from entering and dirtying the premises."
  },
  {
    title: "Bird Spikes",
    image: "bird_spike.jpg",
    fallback: photos.spikes,
    icon: "✨",
    description:
      "Bird spikes help discourage pigeons and other birds from perching on building ledges, parapets, window sills and other exposed surfaces."
  },
  {
    title: "Coconut Safety Nets",
    image: "coconut.jpg",
    fallback: photos.coconut,
    icon: "🌴",
    description:
      "Coconut safety nets help reduce risks associated with falling coconuts near pathways, parked vehicles and surrounding areas."
  },
  {
    title: "Balcony Invisible Grills",
    image: "invisible_grills.jpg",
    fallback: photos.grills,
    icon: "🏙️",
    description:
      "Modern balcony invisible grill solutions that offer an open, elegant appearance while providing an additional protective barrier."
  },
  {
    title: "Cloth Hanger",
    image: "cloth_hanger.jpg",
    fallback: photos.hanger,
    icon: "👕",
    description:
      "Space-saving balcony and ceiling-mounted cloth hanger solutions designed for convenient everyday laundry drying."
  }
];

const slides = [
  {
    tag: "WELCOME TO SS ENTERPRISES",
    title: "Premium Balcony",
    highlight: "Safety Net Solutions",
    description:
      "Protect your family and enjoy your balcony with professional safety net installation services in Bangalore.",
    image: "balcony.jpg",
    fallback: photos.balcony
  },
  {
    tag: "PROTECT YOUR PROPERTY",
    title: "Pigeon & Anti Bird",
    highlight: "Protection Solutions",
    description:
      "Keep your balconies, windows and open areas protected with reliable bird netting solutions.",
    image: "pigeon.jpg",
    fallback: photos.pigeon
  },
  {
    tag: "SAFETY FOR YOUR FAMILY",
    title: "Children Safety",
    highlight: "Nets for Homes",
    description:
      "Create a safer environment for your loved ones with protective balcony and open-area netting.",
    image: "children.jpg",
    fallback: photos.children
  },
  {
    tag: "PROFESSIONAL NETTING",
    title: "Construction",
    highlight: "Safety Nets",
    description:
      "Protect construction sites and elevated work areas with suitable safety net installation solutions.",
    image: "construction.jpg",
    fallback: photos.construction
  },
  {
    tag: "MODERN BALCONY DESIGN",
    title: "Balcony Invisible",
    highlight: "Grill Solutions",
    description:
      "Enjoy a modern balcony appearance with practical and elegant invisible grill installations.",
    image: "invisible_grills.jpg",
    fallback: photos.grills
  }
];

const whatsappLink = (service) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hello SS Enterprises, I would like to enquire about ${service}. Please share the details and quotation.`
  )}`;

function SmartImage({ image, fallback, alt, className, loading }) {
  const [source, setSource] = useState(
    image ? `/images/${image}` : fallback
  );
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setSource(image ? `/images/${image}` : fallback);
    setFailed(false);
  }, [image, fallback]);

  return (
    <img
      src={source}
      alt={alt}
      className={className}
      loading={loading || "lazy"}
      onError={() => {
        if (!failed && source !== fallback) {
          setSource(fallback);
          setFailed(true);
        }
      }}
    />
  );
}

function Reveal({ children, className = "", delay = 0 }) {
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
      className={`ss-reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  const nextSlide = () =>
    setActiveSlide((previous) => (previous + 1) % slides.length);

  const previousSlide = () =>
    setActiveSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );

  const slide = slides[activeSlide];

  return (
    <>
      <style>{`
        .premium-home {
          --ss-orange: #ff5b16;
          --ss-navy: #092b50;
          --ss-muted: #65758b;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--ss-navy);
          overflow: hidden;
        }

        .premium-home *,
        .premium-home *::before,
        .premium-home *::after {
          box-sizing: border-box;
        }

        .premium-home a {
          text-decoration: none;
        }

        .premium-container {
          width: min(1200px, 92%);
          margin: auto;
        }

        /* ANIMATIONS */
        @keyframes ssFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ssFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes ssPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255,91,22,.25);
          }
          50% {
            box-shadow: 0 0 0 13px rgba(255,91,22,0);
          }
        }

        @keyframes ssZoom {
          from { transform: scale(1.06); }
          to { transform: scale(1); }
        }

        @keyframes ssShine {
          from { left: -100%; }
          to { left: 150%; }
        }

        .ss-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity .75s ease,
            transform .75s cubic-bezier(.2,.8,.2,1);
        }

        .ss-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
          .premium-whatsapp i {
  font-size: 22px;
  transition: transform 0.3s ease;
}

.premium-whatsapp:hover i {
  transform: scale(1.2) rotate(-12deg);
}

        /* BUTTONS */
        .premium-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          padding: 14px 25px;
          min-height: 48px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 800;
          transition: .3s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .premium-btn-orange {
          background: var(--ss-orange);
          color: white;
          box-shadow: 0 8px 22px rgba(255,91,22,.22);
        }

        .premium-btn-orange:hover {
          background: #e74b0b;
          transform: translateY(-3px);
          box-shadow: 0 12px 26px rgba(255,91,22,.3);
        }

        .premium-btn-white {
          color: white;
          border: 1px solid rgba(255,255,255,.7);
        }

        .premium-btn-white:hover {
          background: white;
          color: var(--ss-navy);
        }

        .premium-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          transform: skewX(-25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.25),
            transparent
          );
        }

        .premium-btn:hover::after {
          animation: ssShine .7s ease;
        }

        /* HERO */
        .premium-hero {
          position: relative;
          background: #061f3b;
        }

        .premium-hero-layout {
          min-height: 560px;
          display: grid;
          grid-template-columns: 48% 52%;
        }

        .premium-hero-copy {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 70px 5% 80px max(5%, calc((100vw - 1200px) / 2));
          color: white;
          background:
            radial-gradient(circle at 0% 0%, #184c7e, transparent 55%),
            #061f3b;
        }

        .premium-hero-tag {
          color: #ff925b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .premium-hero-title {
          font-size: clamp(34px, 4vw, 57px);
          font-weight: 900;
          line-height: 1.12;
          margin: 0;
          animation: ssFadeUp .65s both;
        }

        .premium-hero-title span {
          display: block;
          color: var(--ss-orange);
          margin-top: 9px;
        }

        .premium-hero-description {
          max-width: 490px;
          margin: 25px 0 30px;
          color: #d4e0ed;
          font-size: 16px;
          line-height: 1.85;
          animation: ssFadeUp .75s both;
        }

        .premium-hero-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
          animation: ssFadeUp .9s both;
        }

        .premium-hero-media {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          background: #16466d;
        }

        .premium-hero-photo {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          object-position: center;
          animation: ssZoom 5s ease both;
        }

        .premium-hero-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(6,31,59,.12),
            transparent 50%
          );
          pointer-events: none;
        }

        .premium-hero-label {
          position: absolute;
          z-index: 2;
          bottom: 75px;
          right: 35px;
          background: rgba(255,255,255,.95);
          padding: 17px 23px;
          border-radius: 12px;
          box-shadow: 0 10px 35px rgba(0,0,0,.12);
          font-size: 14px;
          font-weight: 800;
          color: var(--ss-navy);
          animation: ssFloat 4s ease-in-out infinite;
        }

        .premium-hero-label span {
          color: var(--ss-orange);
          margin-right: 8px;
        }

        .premium-hero-controls {
          position: absolute;
          z-index: 5;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(5,25,48,.82);
          border: 1px solid rgba(255,255,255,.15);
          padding: 9px 14px;
          border-radius: 40px;
          backdrop-filter: blur(10px);
        }

        .premium-hero-arrow {
          width: 31px;
          height: 31px;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.15);
          color: white;
          font-size: 23px;
          cursor: pointer;
          transition: .3s;
        }

        .premium-hero-arrow:hover {
          background: var(--ss-orange);
        }

        .premium-hero-dot {
          width: 9px;
          height: 9px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,.45);
          cursor: pointer;
          padding: 0;
          transition: .3s;
        }

        .premium-hero-dot.active {
          width: 26px;
          border-radius: 10px;
          background: var(--ss-orange);
        }

        /* PHONE BAR */
        .premium-phone-bar {
          background: var(--ss-orange);
          color: white;
          padding: 18px 0;
        }

        .premium-phone-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .premium-phone-inner strong {
          font-size: 17px;
        }

        .premium-phone-inner a {
          color: white;
        }

        .premium-phone-quote {
          background: white;
          color: var(--ss-orange) !important;
          padding: 11px 20px;
          border-radius: 8px;
          font-weight: 800;
        }

        /* SECTIONS */
        .premium-section {
          padding: 90px 0;
        }

        .premium-section-alt {
          background: #f4f8fc;
        }

        .premium-eyebrow {
          color: var(--ss-orange);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .premium-heading {
          color: var(--ss-navy);
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.25;
          font-weight: 900;
          margin: 14px 0 20px;
        }

        .premium-description {
          color: var(--ss-muted);
          font-size: 16px;
          line-height: 1.9;
        }

        .premium-section-intro {
          max-width: 760px;
          text-align: center;
          margin: 0 auto 48px;
        }

        /* ABOUT */
        .premium-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 65px;
        }

        .premium-about-visual {
          position: relative;
        }

        .premium-about-image {
          width: 100%;
          height: 460px;
          border-radius: 18px;
          object-fit: cover;
          box-shadow: 0 18px 45px rgba(9,43,80,.12);
        }

        .premium-about-badge {
          position: absolute;
          bottom: 25px;
          right: -15px;
          padding: 20px 24px;
          background: var(--ss-orange);
          color: white;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 800;
          box-shadow: 0 10px 25px rgba(255,91,22,.25);
          animation: ssFloat 4s ease-in-out infinite;
        }

        .premium-about-list {
          padding: 0;
          list-style: none;
          margin: 25px 0;
        }

        .premium-about-list li {
          margin-bottom: 14px;
          color: #344c65;
          font-size: 15px;
        }

        .premium-about-list li::before {
          content: "✓";
          color: var(--ss-orange);
          font-weight: 900;
          margin-right: 12px;
        }

        /* SERVICES */
        .premium-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .premium-service-card {
          height: 100%;
          background: white;
          border: 1px solid #e8eef5;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 7px 25px rgba(9,43,80,.06);
          transition: transform .35s, box-shadow .35s;
          display: flex;
          flex-direction: column;
        }

        .premium-service-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 22px 45px rgba(9,43,80,.13);
        }

        .premium-service-photo-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #dce8f1;
        }

        .premium-service-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .premium-service-card:hover .premium-service-photo {
          transform: scale(1.09);
        }

        .premium-service-icon {
          position: absolute;
          bottom: 13px;
          left: 18px;
          width: 53px;
          height: 53px;
          border-radius: 13px;
          background: var(--ss-orange);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
          box-shadow: 0 7px 20px rgba(0,0,0,.15);
          transition: transform .4s;
        }

        .premium-service-card:hover .premium-service-icon {
          transform: rotate(-10deg) scale(1.15);
        }

        .premium-service-body {
          padding: 27px 23px;
          display: flex;
          flex-direction: column;
          flex: 1;
          text-align: center;
        }

        .premium-service-body h3 {
          color: var(--ss-navy);
          font-size: 21px;
          margin: 0 0 14px;
          font-weight: 800;
        }

        .premium-service-body p {
          color: var(--ss-muted);
          font-size: 14px;
          line-height: 1.85;
          margin: 0 0 22px;
          flex: 1;
        }

        .premium-service-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-top: auto;
        }

        .premium-service-read {
          color: var(--ss-orange);
          font-size: 14px;
          font-weight: 800;
          padding: 9px 15px;
          transition: .3s;
        }

        .premium-service-read:hover {
          color: var(--ss-navy);
          transform: translateX(3px);
        }

        .premium-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 20px;
          border-radius: 8px;
          background: #19a85a;
          color: white;
          font-size: 14px;
          font-weight: 800;
          transition: .3s;
          width: min(100%, 240px);
        }

        .premium-whatsapp:hover {
          background: #128347;
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(25,168,90,.2);
        }

        /* BENEFITS */
        .premium-benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 23px;
        }

        .premium-benefit {
          padding: 35px 20px;
          text-align: center;
          border-radius: 15px;
          background: #fff;
          border: 1px solid #e8eef5;
          transition: .35s;
        }

        .premium-benefit:hover {
          transform: translateY(-8px);
          border-color: #ffd0b9;
          box-shadow: 0 15px 35px rgba(9,43,80,.09);
        }

        .premium-benefit-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 23px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff0e9;
          color: var(--ss-orange);
          font-size: 32px;
          animation: ssPulse 3s infinite;
          transition: transform .4s;
        }

        .premium-benefit:hover .premium-benefit-icon {
          transform: rotate(12deg) scale(1.12);
        }

        .premium-benefit h3 {
          font-size: 18px;
          margin: 0 0 12px;
        }

        .premium-benefit p {
          color: var(--ss-muted);
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        /* CTA */
        .premium-cta {
          padding: 85px 20px;
          text-align: center;
          background:
            radial-gradient(circle at 85% 10%, #1b578c, transparent 40%),
            linear-gradient(120deg, #061f3b, #103c68);
          color: white;
        }

        .premium-cta h2 {
          font-size: clamp(28px, 3vw, 42px);
          margin: 0 0 20px;
        }

        .premium-cta p {
          max-width: 650px;
          margin: 0 auto 30px;
          color: #d9e5f2;
          line-height: 1.9;
        }

        .premium-cta-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* TABLET */
        @media (max-width: 1050px) {
          .premium-service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .premium-benefit-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .premium-about-grid {
            gap: 35px;
          }
        }

        /* MOBILE */
        @media (max-width: 750px) {
          .premium-hero-layout {
            display: flex;
            flex-direction: column-reverse;
            min-height: auto;
          }

          .premium-hero-media {
            width: 100%;
            height: 270px;
            min-height: 270px;
            flex-shrink: 0;
          }

          .premium-hero-photo {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .premium-hero-copy {
            width: 100%;
            min-height: 330px;
            padding: 35px 6% 80px;
            align-items: center;
            text-align: center;
          }

          .premium-hero-tag {
            font-size: 10px;
            margin-bottom: 13px;
          }

          .premium-hero-title {
            font-size: clamp(28px, 7vw, 38px);
          }

          .premium-hero-description {
            font-size: 14px;
            margin: 18px 0 24px;
            line-height: 1.7;
          }

          .premium-hero-actions {
            justify-content: center;
          }

          .premium-hero-label {
            bottom: 16px;
            right: 15px;
            font-size: 11px;
            padding: 11px 14px;
          }

          .premium-hero-controls {
            bottom: 18px;
          }

          .premium-section {
            padding: 60px 0;
          }

          .premium-about-grid {
            grid-template-columns: 1fr;
          }

          .premium-about-image {
            height: 300px;
          }

          .premium-about-badge {
            right: 10px;
            bottom: 15px;
            padding: 13px 17px;
            font-size: 13px;
          }

          .premium-service-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .premium-service-photo-wrap {
            height: 230px;
          }

          .premium-service-body {
            padding: 24px 20px;
          }

          .premium-benefit-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 13px;
          }

          .premium-benefit {
            padding: 25px 12px;
          }

          .premium-benefit h3 {
            font-size: 15px;
          }

          .premium-benefit p {
            font-size: 12px;
          }

          .premium-phone-inner {
            justify-content: center;
            text-align: center;
          }

          .premium-phone-inner strong {
            font-size: 15px;
          }
        }

        @media (max-width: 390px) {
          .premium-hero-media {
            height: 230px;
            min-height: 230px;
          }

          .premium-hero-title {
            font-size: 27px;
          }

          .premium-benefit-grid {
            grid-template-columns: 1fr;
          }

          .premium-btn {
            padding: 12px 17px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-home *,
          .premium-home *::before,
          .premium-home *::after {
            animation: none !important;
            transition-duration: .01ms !important;
          }

          .ss-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main className="premium-home">

        {/* HERO CAROUSEL */}
        <section
          className="premium-hero"
          aria-label="Safety net services carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <div className="premium-hero-layout">
            <div className="premium-hero-copy" key={`copy-${activeSlide}`}>
              <span className="premium-hero-tag">
                {slide.tag}
              </span>

              {activeSlide === 0 ? (
                <h1 className="premium-hero-title">
                  {slide.title}
                  <span>{slide.highlight}</span>
                </h1>
              ) : (
                <h2 className="premium-hero-title">
                  {slide.title}
                  <span>{slide.highlight}</span>
                </h2>
              )}

              <p className="premium-hero-description">
                {slide.description}
              </p>

              <div className="premium-hero-actions">
                <Link to="/contact" className="premium-btn premium-btn-orange">
                  Get Free Quote →
                </Link>

                <Link to="/services" className="premium-btn premium-btn-white">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="premium-hero-media" key={`photo-${activeSlide}`}>
              <SmartImage
                image={slide.image}
                fallback={slide.fallback}
                alt={slide.title}
                className="premium-hero-photo"
                loading="eager"
              />

              <div className="premium-hero-label">
                <span>✓</span> Safety Net Solutions in Bangalore
              </div>
            </div>
          </div>

          <div className="premium-hero-controls">
            <button
              className="premium-hero-arrow"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>

            {slides.map((item, index) => (
              <button
                key={index}
                className={`premium-hero-dot ${
                  index === activeSlide ? "active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${item.title}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}

            <button
              className="premium-hero-arrow"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </section>

        {/* CONTACT STRIP */}
        <section className="premium-phone-bar">
          <div className="premium-container premium-phone-inner">
            <strong>
              ☎ Call Us:{" "}
              <a href="tel:+918105109482">8105109482</a>
              {" / "}
              <a href="tel:+918296023717">{PHONE2}</a>
            </strong>

            <Link to="/contact" className="premium-phone-quote">
              Get Free Quote →
            </Link>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="premium-section">
          <div className="premium-container premium-about-grid">
            <Reveal>
              <div className="premium-about-visual">
                <SmartImage
                  image="abt.png"
                  fallback={photos.balcony}
                  alt="Balcony safety net installation"
                  className="premium-about-image"
                />
                <div className="premium-about-badge">
                  Quality Safety Net Solutions
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="premium-eyebrow">
                Welcome to SS Enterprises
              </span>

              <h2 className="premium-heading">
                Professional Safety Net Installation
                Services in Bangalore
              </h2>

              <p className="premium-description">
                SS Enterprises is one of the fastest growing
                providers of safety nets. We deal in sports nets,
                malls safety nets, construction safety nets and
                various other protection solutions.
              </p>

              <p className="premium-description">
                We offer quality safety nets at affordable
                prices. Security is important in commercial
                and residential areas, and we provide safety
                netting according to our clients' requirements.
              </p>

              <ul className="premium-about-list">
                <li>Quality Safety Net Materials</li>
                <li>Affordable Installation Solutions</li>
                <li>Residential and Commercial Services</li>
                <li>Customized Safety Net Requirements</li>
              </ul>

              <Link to="/about" className="premium-btn premium-btn-orange">
                Read More About Us →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="premium-section premium-section-alt">
          <div className="premium-container">
            <Reveal>
              <div className="premium-section-intro">
                <span className="premium-eyebrow">
                  SS Enterprises Experts In
                </span>

                <h2 className="premium-heading">
                  Our Professional Services
                </h2>

                <p className="premium-description">
                  Explore our safety net, bird protection,
                  invisible grill and cloth hanger solutions
                  for residential and commercial properties.
                </p>
              </div>
            </Reveal>

            <div className="premium-service-grid">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={(index % 3) * 100}
                >
                  <article className="premium-service-card">
                    <div className="premium-service-photo-wrap">
                      <SmartImage
                        image={service.image}
                        fallback={service.fallback}
                        alt={service.title}
                        className="premium-service-photo"
                      />

                      <div className="premium-service-icon">
                        {service.icon}
                      </div>
                    </div>

                    <div className="premium-service-body">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>

                      <div className="premium-service-actions">
                        <Link
                          to="/services"
                          className="premium-service-read"
                        >
                          Read More →
                        </Link>

                        <a
  href={whatsappLink(service.title)}
  target="_blank"
  rel="noopener noreferrer"
  className="premium-whatsapp"
>
  <i className="fa fa-whatsapp" aria-hidden="true"></i>
  Enquire on WhatsApp
</a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="premium-section">
          <div className="premium-container">
            <Reveal>
              <div className="premium-section-intro">
                <span className="premium-eyebrow">
                  Why Choose SS Enterprises
                </span>

                <h2 className="premium-heading">
                  Quality, Safety & Reliability
                </h2>

                <p className="premium-description">
                  Practical protection solutions designed
                  around your property and requirements.
                </p>
              </div>
            </Reveal>

            <div className="premium-benefit-grid">
              {[
                {
                  icon: "🛡️",
                  title: "Quality Materials",
                  text: "Durable netting materials selected for different safety requirements."
                },
                {
                  icon: "⚙️",
                  title: "Skilled Installation",
                  text: "Practical installation solutions for homes, apartments and businesses."
                },
                {
                  icon: "₹",
                  title: "Affordable Pricing",
                  text: "Cost-effective netting solutions based on your requirements."
                },
                {
                  icon: "✓",
                  title: "Customized Service",
                  text: "Suitable solutions for balconies, ducts, terraces and open spaces."
                }
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="premium-benefit">
                    <div className="premium-benefit-icon">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="premium-cta">
          <Reveal>
            <div className="premium-container">
              <h2>Looking for Safety Nets in Bangalore?</h2>

              <p>
                Contact SS Enterprises for balcony safety nets,
                pigeon nets, anti-bird nets, invisible grills,
                cloth hangers and other installation services.
              </p>

              <div className="premium-cta-buttons">
                <a
                  href="tel:+918105109482"
                  className="premium-btn premium-btn-orange"
                >
                  ☎ Call 8105109482
                </a>

                <a
  href={whatsappLink("Safety Net Installation")}
  target="_blank"
  rel="noopener noreferrer"
  className="premium-btn premium-btn-white"
>
  <i className="fa fa-whatsapp" aria-hidden="true"></i>
  WhatsApp Enquiry
</a>

                <Link
                  to="/contact"
                  className="premium-btn premium-btn-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

      </main>
    </>
  );
}

export default Home;
