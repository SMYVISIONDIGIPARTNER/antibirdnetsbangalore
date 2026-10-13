
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PHONE1 = "8105109482";
const PHONE2 = "8296023717";
const EMAIL = "sssafetynets2019@gmail.com";

const whatsappURL = (message, phone = PHONE1) =>
  `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;

const slides = [
  {
    label: "WE ARE HERE TO HELP",
    title: "Contact",
    highlight: "SS Enterprises",
    description:
      "Get in touch for quality safety net installation services across Bangalore.",
    image: "balcony.jpg"
  },
  {
    label: "GET A QUOTATION",
    title: "Let's Make Your",
    highlight: "Space Safer",
    description:
      "Tell us your requirements and our team will help you find a suitable safety net solution.",
    image: "pigeon.jpg"
  },
  {
    label: "EASY WHATSAPP ENQUIRIES",
    title: "Quick & Easy",
    highlight: "Customer Support",
    description:
      "Send your enquiry directly through WhatsApp and connect with SS Enterprises.",
    image: "construction.jpg"
  }
];

const imageFallbacks = {
  "balcony.jpg":
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  "pigeon.jpg":
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1400&q=85",
  "construction.jpg":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85"
};

const serviceOptions = [
  "Balcony Safety Nets",
  "Pigeon Safety Nets",
  "Anti Bird Nets",
  "Children Safety Nets",
  "Construction Safety Nets",
  "Monkey Safety Nets",
  "Duct Area Safety Nets",
  "Bird Spikes",
  "Coconut Safety Nets",
  "Balcony Invisible Grills",
  "Cloth Hanger",
  "Other Enquiry"
];

function ContactImage({ image, alt }) {
  const [src, setSrc] = useState(`/images/${image}`);

  useEffect(() => {
    setSrc(`/images/${image}`);
  }, [image]);

  return (
    <img
      src={src}
      alt={alt}
      className="ss-contact-hero-image"
      onError={() => {
        const fallback = imageFallbacks[image];

        if (fallback && src !== fallback) {
          setSrc(fallback);
        }
      }}
    />
  );
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

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
      ref={ref}
      className={`ss-contact-reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Contact() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveSlide(
        (previous) => (previous + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello SS Enterprises,",
      "",
      "I would like to enquire about your services.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service}`,
      `Location: ${form.location.trim() || "Not provided"}`,
      "",
      "My Requirement:",
      form.message.trim() ||
        "Please contact me with more details.",
      "",
      "Thank you."
    ].join("\n");

    window.location.href = whatsappURL(message);
  };

  const previousSlide = () => {
    setActiveSlide(
      (previous) =>
        (previous - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide(
      (previous) => (previous + 1) % slides.length
    );
  };

  const current = slides[activeSlide];

  return (
    <>
      <style>{`
        .ss-contact-page {
          --contact-navy: #092d55;
          --contact-orange: #ff5a0a;
          --contact-muted: #63758a;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--contact-navy);
          overflow: hidden;
        }

        .ss-contact-page *,
        .ss-contact-page *::before,
        .ss-contact-page *::after {
          box-sizing: border-box;
        }

        .ss-contact-page a {
          text-decoration: none;
        }

        .ss-contact-container {
          width: min(1200px, 92%);
          margin: auto;
        }

        @keyframes ssContactFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ssContactZoom {
          from {
            transform: scale(1.07);
          }

          to {
            transform: scale(1);
          }
        }

        @keyframes ssContactFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .ss-contact-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .ss-contact-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO CAROUSEL */

        .ss-contact-hero {
          position: relative;
          background: #061f3b;
        }

        .ss-contact-hero-grid {
          display: grid;
          grid-template-columns: 48% 52%;
          min-height: 490px;
        }

        .ss-contact-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding:
            70px 6% 85px
            max(5%, calc((100vw - 1200px) / 2));
          background:
            radial-gradient(
              circle at 0% 0%,
              #174d80,
              transparent 60%
            ),
            #061f3b;
          color: white;
        }

        .ss-contact-hero-label {
          font-size: 12px;
          letter-spacing: 2px;
          color: #ff9a62;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .ss-contact-hero-title {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.15;
          font-weight: 900;
          margin: 0;
          animation: ssContactFade 0.7s both;
        }

        .ss-contact-hero-title span {
          display: block;
          color: var(--contact-orange);
          margin-top: 9px;
        }

        .ss-contact-hero-description {
          color: #d6e2ee;
          font-size: 16px;
          line-height: 1.85;
          max-width: 490px;
          margin: 24px 0 28px;
          animation: ssContactFade 0.85s both;
        }

        .ss-contact-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .ss-contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          min-height: 48px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 800;
          text-align: center;
          transition: 0.3s ease;
          cursor: pointer;
        }

        .ss-contact-btn-orange {
          background: var(--contact-orange);
          color: white;
        }

        .ss-contact-btn-orange:hover {
          background: #e94e00;
          transform: translateY(-3px);
        }

        .ss-contact-btn-outline {
          color: white;
          border: 1px solid rgba(255,255,255,0.75);
        }

        .ss-contact-btn-outline:hover {
          background: white;
          color: var(--contact-navy);
        }

        .ss-contact-btn-whatsapp {
          background: #19a85a;
          color: white;
          border: 0;
        }

        .ss-contact-btn-whatsapp:hover {
          background: #128448;
          transform: translateY(-3px);
        }

        .ss-contact-btn-whatsapp i {
          font-size: 21px;
        }

        .ss-contact-hero-media {
          position: relative;
          min-height: 490px;
          overflow: hidden;
          background: #164267;
        }

        .ss-contact-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          animation: ssContactZoom 5s ease both;
        }

        .ss-contact-hero-badge {
          position: absolute;
          right: 25px;
          bottom: 75px;
          z-index: 2;
          background: rgba(255,255,255,0.96);
          padding: 15px 20px;
          border-radius: 12px;
          color: var(--contact-navy);
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          animation:
            ssContactFloat 4s ease-in-out infinite;
        }

        .ss-contact-hero-badge i {
          color: var(--contact-orange);
          margin-right: 8px;
        }

        .ss-contact-carousel-controls {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 14px;
          border-radius: 40px;
          background: rgba(5,25,48,0.85);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .ss-contact-arrow {
          width: 31px;
          height: 31px;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          color: white;
          font-size: 22px;
          cursor: pointer;
          transition: 0.3s;
        }

        .ss-contact-arrow:hover {
          background: var(--contact-orange);
        }

        .ss-contact-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: 0.3s;
        }

        .ss-contact-dot.active {
          width: 26px;
          border-radius: 10px;
          background: var(--contact-orange);
        }

        /* BREADCRUMB */

        .ss-contact-breadcrumb {
          background: #f3f7fb;
          padding: 17px 0;
          border-bottom: 1px solid #e5ecf4;
        }

        .ss-contact-breadcrumb-inner {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 13px;
        }

        .ss-contact-breadcrumb a {
          color: #5b7187;
        }

        .ss-contact-breadcrumb span {
          color: var(--contact-orange);
          font-weight: 800;
        }

        /* MAIN CONTACT SECTION */

        .ss-contact-section {
          padding: 85px 0;
          background: #f6f9fd;
        }

        .ss-contact-intro {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 45px;
        }

        .ss-contact-eyebrow {
          color: var(--contact-orange);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .ss-contact-heading {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 900;
          line-height: 1.25;
          margin: 14px 0 18px;
        }

        .ss-contact-intro p {
          color: var(--contact-muted);
          font-size: 16px;
          line-height: 1.85;
        }

        .ss-contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          align-items: start;
        }

        /* CONTACT INFORMATION */

        .ss-contact-details {
          background: #092d55;
          color: white;
          border-radius: 17px;
          padding: 35px;
          position: relative;
          overflow: hidden;
        }

        .ss-contact-details::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255,90,10,0.08);
          bottom: -100px;
          right: -100px;
          pointer-events: none;
        }

        .ss-contact-details h3 {
          font-size: 25px;
          margin: 0 0 13px;
          color: white;
        }

        .ss-contact-details-description {
          color: #d5e2ef;
          font-size: 14px;
          line-height: 1.85;
          margin-bottom: 32px;
        }

        .ss-contact-info-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          margin-bottom: 28px;
        }

        .ss-contact-info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 12px;
          background: rgba(255,90,10,0.15);
          color: #ff8c4b;
          font-size: 21px;
          transition: 0.3s;
        }

        .ss-contact-info-item:hover
        .ss-contact-info-icon {
          background: var(--contact-orange);
          color: white;
          transform: rotate(-8deg);
        }

        .ss-contact-info-text strong {
          display: block;
          color: white;
          font-size: 15px;
          margin-bottom: 8px;
        }

        .ss-contact-info-text span,
        .ss-contact-info-text a {
          display: block;
          color: #c8d8e8;
          font-size: 14px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .ss-contact-info-text a:hover {
          color: #ff975f;
        }

        .ss-contact-direct-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 15px;
          border-radius: 9px;
          background: #19a85a;
          color: white;
          font-size: 15px;
          font-weight: 800;
          transition: 0.3s;
          position: relative;
          z-index: 1;
        }

        .ss-contact-direct-whatsapp i {
          font-size: 23px;
        }

        .ss-contact-direct-whatsapp:hover {
          background: #128448;
          transform: translateY(-3px);
        }

        /* WHATSAPP FORM */

        .ss-contact-form-card {
          background: white;
          border-radius: 17px;
          border: 1px solid #e5ecf4;
          box-shadow: 0 12px 35px rgba(9,45,85,0.06);
          padding: 38px;
          scroll-margin-top: 110px;
        }

        .ss-contact-form-card h3 {
          color: var(--contact-navy);
          font-size: 25px;
          margin: 0 0 10px;
        }

        .ss-contact-form-subtitle {
          color: var(--contact-muted);
          font-size: 14px;
          line-height: 1.75;
          margin: 0 0 28px;
        }

        .ss-contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .ss-contact-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .ss-contact-field label {
          font-size: 13px;
          font-weight: 800;
          color: #304a65;
        }

        .ss-contact-field input,
        .ss-contact-field select,
        .ss-contact-field textarea {
          width: 100%;
          padding: 14px 15px;
          border: 1px solid #dce5ee;
          background: #f9fbfd;
          border-radius: 9px;
          color: var(--contact-navy);
          font-family: inherit;
          font-size: 14px;
          outline: none;
          transition: 0.3s;
        }

        .ss-contact-field input:focus,
        .ss-contact-field select:focus,
        .ss-contact-field textarea:focus {
          border-color: var(--contact-orange);
          box-shadow:
            0 0 0 3px rgba(255,90,10,0.09);
          background: white;
        }

        .ss-contact-field textarea {
          resize: vertical;
          min-height: 125px;
        }

        .ss-contact-field input::placeholder,
        .ss-contact-field textarea::placeholder {
          color: #9aaabb;
        }

        .ss-contact-submit {
          width: 100%;
          padding: 16px;
          border: 0;
          border-radius: 9px;
          background: #19a85a;
          color: white;
          font-family: inherit;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.3s;
        }

        .ss-contact-submit i {
          font-size: 21px;
          margin-right: 9px;
          vertical-align: middle;
        }

        .ss-contact-submit:hover {
          background: #128448;
          transform: translateY(-3px);
          box-shadow:
            0 12px 24px rgba(25,168,90,0.2);
        }

        .ss-contact-form-note {
          color: #718398;
          font-size: 12px;
          line-height: 1.6;
          margin: 14px 0 0;
          text-align: center;
        }

        /* BOTTOM CTA */

        .ss-contact-cta {
          padding: 75px 20px;
          background:
            radial-gradient(
              circle at 85% 10%,
              #1b578c,
              transparent 40%
            ),
            linear-gradient(
              120deg,
              #061f3b,
              #103c68
            );
          text-align: center;
        }

        .ss-contact-cta h2 {
          color: white;
          font-size: clamp(28px, 3vw, 42px);
          margin: 0 0 18px;
        }

        .ss-contact-cta p {
          color: #d9e5f2;
          font-size: 16px;
          line-height: 1.85;
          max-width: 680px;
          margin: 0 auto 28px;
        }

        .ss-contact-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        /* TABLET */

        @media (max-width: 950px) {
          .ss-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        /* MOBILE */

        @media (max-width: 750px) {
          .ss-contact-hero-grid {
            display: flex;
            flex-direction: column-reverse;
            min-height: auto;
          }

          .ss-contact-hero-media {
            height: 265px;
            min-height: 265px;
          }

          .ss-contact-hero-content {
            align-items: center;
            text-align: center;
            padding: 35px 6% 80px;
            min-height: 310px;
          }

          .ss-contact-hero-title {
            font-size: clamp(29px, 7vw, 38px);
          }

          .ss-contact-hero-description {
            font-size: 14px;
            margin: 18px 0 23px;
          }

          .ss-contact-hero-label {
            font-size: 10px;
            margin-bottom: 13px;
          }

          .ss-contact-hero-actions {
            justify-content: center;
          }

          .ss-contact-hero-badge {
            right: 15px;
            bottom: 15px;
            font-size: 11px;
            padding: 11px 14px;
          }

          .ss-contact-section {
            padding: 60px 0;
          }

          .ss-contact-details,
          .ss-contact-form-card {
            padding: 25px 20px;
          }

          .ss-contact-form-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        @media (max-width: 390px) {
          .ss-contact-hero-media {
            height: 230px;
            min-height: 230px;
          }

          .ss-contact-hero-title {
            font-size: 27px;
          }

          .ss-contact-btn {
            padding: 12px 16px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ss-contact-page *,
          .ss-contact-page *::before,
          .ss-contact-page *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .ss-contact-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main className="ss-contact-page">

        {/* HERO CAROUSEL */}
        <section
          className="ss-contact-hero"
          aria-label="SS Enterprises contact carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget
              )
            ) {
              setPaused(false);
            }
          }}
        >
          <div className="ss-contact-hero-grid">
            <div
              className="ss-contact-hero-content"
              key={`content-${activeSlide}`}
            >
              <span className="ss-contact-hero-label">
                {current.label}
              </span>

              {activeSlide === 0 ? (
                <h1 className="ss-contact-hero-title">
                  {current.title}
                  <span>{current.highlight}</span>
                </h1>
              ) : (
                <h2 className="ss-contact-hero-title">
                  {current.title}
                  <span>{current.highlight}</span>
                </h2>
              )}

              <p className="ss-contact-hero-description">
                {current.description}
              </p>

              <div className="ss-contact-hero-actions">
                <a
                  href="#contact-form"
                  className="ss-contact-btn ss-contact-btn-orange"
                >
                  Send Enquiry →
                </a>

                <a
                  href={whatsappURL(
                    "Hello SS Enterprises, I would like to enquire about your safety net services."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-contact-btn ss-contact-btn-outline"
                >
                  <i
                    className="fa fa-whatsapp"
                    aria-hidden="true"
                  ></i>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div
              className="ss-contact-hero-media"
              key={`image-${activeSlide}`}
            >
              <ContactImage
                image={current.image}
                alt={current.title}
              />

              <div className="ss-contact-hero-badge">
                <i
                  className="fa fa-check-circle"
                  aria-hidden="true"
                ></i>
                We're Ready to Help
              </div>
            </div>
          </div>

          <div className="ss-contact-carousel-controls">
            <button
              type="button"
              className="ss-contact-arrow"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>

            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                className={`ss-contact-dot ${
                  index === activeSlide ? "active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.title}`}
                aria-current={
                  index === activeSlide ? "true" : undefined
                }
              />
            ))}

            <button
              type="button"
              className="ss-contact-arrow"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="ss-contact-breadcrumb">
          <div className="ss-contact-container ss-contact-breadcrumb-inner">
            <Link to="/">Home</Link>

            <i
              className="fa fa-angle-right"
              aria-hidden="true"
            ></i>

            <span>Contact Us</span>
          </div>
        </div>

        {/* CONTACT INFORMATION AND FORM */}
        <section className="ss-contact-section">
          <div className="ss-contact-container">

            <Reveal>
              <div className="ss-contact-intro">
                <span className="ss-contact-eyebrow">
                  Get in Touch
                </span>

                <h2 className="ss-contact-heading">
                  Contact SS Enterprises
                </h2>

                <p>
                  Have questions about safety net
                  installation? Reach us by phone,
                  email or WhatsApp, or fill in the
                  enquiry form to share your
                  requirements directly with our team.
                </p>
              </div>
            </Reveal>

            <div className="ss-contact-grid">

              {/* CONTACT DETAILS */}
              <Reveal>
                <div className="ss-contact-details">
                  <h3>Contact Information</h3>

                  <p className="ss-contact-details-description">
                    Contact our team for safety net
                    installation enquiries and
                    quotations in Bangalore.
                  </p>

                  {/* ADDRESS */}
                  <div className="ss-contact-info-item">
                    <div className="ss-contact-info-icon">
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="ss-contact-info-text">
                      <strong>Our Address</strong>
                      <span>SS Enterprises</span>
                      <span>Bangalore - 560054</span>
                      <span>Karnataka, India</span>
                    </div>
                  </div>

                  {/* PHONE NUMBERS */}
                  <div className="ss-contact-info-item">
                    <div className="ss-contact-info-icon">
                      <i
                        className="fa fa-phone"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="ss-contact-info-text">
                      <strong>Phone Numbers</strong>

                      <a href={`tel:+91${PHONE1}`}>
                        +91 {PHONE1}
                      </a>

                      <a href={`tel:+91${PHONE2}`}>
                        +91 {PHONE2}
                      </a>
                    </div>
                  </div>

                  {/* BUSINESS EMAIL */}
                  <div className="ss-contact-info-item">
                    <div className="ss-contact-info-icon">
                      <i
                        className="fa fa-envelope"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="ss-contact-info-text">
                      <strong>Email Address</strong>

                      <a href={`mailto:${EMAIL}`}>
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="ss-contact-info-item">
                    <div className="ss-contact-info-icon">
                      <i
                        className="fa fa-whatsapp"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="ss-contact-info-text">
                      <strong>WhatsApp Support</strong>

                      <a
                        href={whatsappURL(
                          "Hello SS Enterprises, I would like to enquire about your services."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat with +91 {PHONE1}
                      </a>
                    </div>
                  </div>

                  <a
                    href={whatsappURL(
                      "Hello SS Enterprises, I need a quotation for safety net installation."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ss-contact-direct-whatsapp"
                  >
                    <i
                      className="fa fa-whatsapp"
                      aria-hidden="true"
                    ></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </Reveal>

              {/* WHATSAPP ENQUIRY FORM */}
              <Reveal delay={120}>
                <div
                  className="ss-contact-form-card"
                  id="contact-form"
                >
                  <h3>Send Us an Enquiry</h3>

                  <p className="ss-contact-form-subtitle">
                    Fill in your details below. When
                    you submit, WhatsApp will open
                    with your enquiry message
                    automatically prepared.
                  </p>

                  <form onSubmit={handleSubmit}>

                    {/* NAME AND PHONE */}
                    <div className="ss-contact-form-grid">

                      <div className="ss-contact-field">
                        <label htmlFor="ss-name">
                          Your Name *
                        </label>

                        <input
                          id="ss-name"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={form.name}
                          onChange={updateForm}
                          autoComplete="name"
                          required
                        />
                      </div>

                      <div className="ss-contact-field">
                        <label htmlFor="ss-phone">
                          Phone Number *
                        </label>

                        <input
                          id="ss-phone"
                          type="tel"
                          name="phone"
                          placeholder="Enter your mobile number"
                          value={form.phone}
                          onChange={updateForm}
                          autoComplete="tel"
                          inputMode="tel"
                          pattern="[0-9+\\s-]{10,16}"
                          title="Enter a valid phone number"
                          required
                        />
                      </div>
                    </div>

                    {/* SERVICE */}
                    <div className="ss-contact-field">
                      <label htmlFor="ss-service">
                        Select Service *
                      </label>

                      <select
                        id="ss-service"
                        name="service"
                        value={form.service}
                        onChange={updateForm}
                        required
                      >
                        <option value="">
                          Choose a service
                        </option>

                        {serviceOptions.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* LOCATION */}
                    <div className="ss-contact-field">
                      <label htmlFor="ss-location">
                        Your Location
                      </label>

                      <input
                        id="ss-location"
                        type="text"
                        name="location"
                        placeholder="Area / Location in Bangalore"
                        value={form.location}
                        onChange={updateForm}
                      />
                    </div>

                    {/* MESSAGE */}
                    <div className="ss-contact-field">
                      <label htmlFor="ss-message">
                        Your Requirement
                      </label>

                      <textarea
                        id="ss-message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        value={form.message}
                        onChange={updateForm}
                        rows={5}
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="ss-contact-submit"
                    >
                      <i
                        className="fa fa-whatsapp"
                        aria-hidden="true"
                      ></i>
                      Send Enquiry on WhatsApp
                    </button>

                    <p className="ss-contact-form-note">
                      WhatsApp will open with your
                      details pre-filled. Review the
                      message and press Send to
                      deliver your enquiry.
                    </p>

                  </form>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="ss-contact-cta">
          <Reveal>
            <div className="ss-contact-container">
              <h2>
                Ready to Discuss Your Safety Net Requirements?
              </h2>

              <p>
                Contact SS Enterprises for balcony safety
                nets, pigeon nets, anti bird nets,
                construction safety nets, invisible grills,
                cloth hangers and more.
              </p>

              <div className="ss-contact-cta-actions">
                <a
                  href={`tel:+91${PHONE1}`}
                  className="ss-contact-btn ss-contact-btn-orange"
                >
                  <i
                    className="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  Call {PHONE1}
                </a>

                <a
                  href={`tel:+91${PHONE2}`}
                  className="ss-contact-btn ss-contact-btn-outline"
                >
                  <i
                    className="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  Call {PHONE2}
                </a>

                <a
                  href={whatsappURL(
                    "Hello SS Enterprises, I would like to enquire about safety net installation."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-contact-btn ss-contact-btn-whatsapp"
                >
                  <i
                    className="fa fa-whatsapp"
                    aria-hidden="true"
                  ></i>
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </Reveal>
        </section>

      </main>
    </>
  );
}

export default Contact;
