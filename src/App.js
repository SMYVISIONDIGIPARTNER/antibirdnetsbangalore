
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const PHONE = "8105109482";

const WHATSAPP_URL =
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(
    "Hello SS Enterprises, I would like to enquire about your safety net installation services."
  )}`;

// Automatically scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

// Floating Call, WhatsApp and Back-to-Top buttons
function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <style>{`
        /* FLOATING ACTION BUTTONS */

        .ss-floating-actions {
          position: fixed;
          right: 22px;
          bottom: 25px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 13px;
        }

        .ss-floating-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          border: none;
          cursor: pointer;
          position: relative;
          box-shadow: 0 6px 20px rgba(0,0,0,0.22);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ss-floating-btn:hover {
          transform: translateY(-5px) scale(1.08);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .ss-floating-btn i {
          font-size: 27px;
          position: relative;
          z-index: 2;
        }

        /* WHATSAPP BUTTON */

        .ss-floating-whatsapp {
          background: #25d366;
          animation: ssWhatsAppFloat 3s ease-in-out infinite;
        }

        .ss-floating-whatsapp:hover {
          background: #1db954;
        }

        .ss-floating-whatsapp::before {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.5);
          animation: ssWhatsAppPulse 2s infinite;
          pointer-events: none;
        }

        @keyframes ssWhatsAppPulse {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @keyframes ssWhatsAppFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        /* CALL BUTTON */

        .ss-floating-call {
          background: #ff5a0a;
          animation: ssCallRing 4s ease-in-out infinite;
        }

        .ss-floating-call:hover {
          background: #e94e00;
        }

        @keyframes ssCallRing {
          0%, 80%, 100% {
            transform: rotate(0);
          }

          83% {
            transform: rotate(-12deg);
          }

          86% {
            transform: rotate(12deg);
          }

          89% {
            transform: rotate(-8deg);
          }

          92% {
            transform: rotate(8deg);
          }

          95% {
            transform: rotate(0);
          }
        }

        /* BACK TO TOP */

        .ss-floating-top {
          width: 45px;
          height: 45px;
          background: #092d55;
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          transition:
            opacity 0.3s ease,
            visibility 0.3s ease,
            transform 0.3s ease;
        }

        .ss-floating-top i {
          font-size: 21px;
        }

        .ss-floating-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .ss-floating-top:hover {
          background: #ff5a0a;
          transform: translateY(-4px);
        }

        /* HOVER LABELS */

        .ss-floating-tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          background: #092d55;
          color: white;
          padding: 9px 13px;
          border-radius: 7px;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: 0.25s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        }

        .ss-floating-tooltip::after {
          content: "";
          position: absolute;
          right: -5px;
          top: 50%;
          width: 10px;
          height: 10px;
          background: #092d55;
          transform: translateY(-50%) rotate(45deg);
        }

        .ss-floating-btn:hover .ss-floating-tooltip,
        .ss-floating-btn:focus-visible .ss-floating-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(0);
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .ss-floating-actions {
            right: 15px;
            bottom: 20px;
            gap: 12px;
          }

          .ss-floating-btn {
            width: 50px;
            height: 50px;
          }

          .ss-floating-btn i {
            font-size: 24px;
          }

          .ss-floating-top {
            width: 42px;
            height: 42px;
          }

          .ss-floating-top i {
            font-size: 19px;
          }

          .ss-floating-tooltip {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ss-floating-btn {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .ss-floating-whatsapp::before {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="ss-floating-actions"
        aria-label="Quick contact options"
      >
        {/* BACK TO TOP */}
        <button
          type="button"
          className={`ss-floating-btn ss-floating-top ${
            showTop ? "visible" : ""
          }`}
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to Top"
          tabIndex={showTop ? 0 : -1}
        >
          <i
            className="fa fa-angle-up"
            aria-hidden="true"
          ></i>

          <span className="ss-floating-tooltip">
            Back to Top
          </span>
        </button>

        {/* CALL BUTTON */}
        <a
          href={`tel:+91${PHONE}`}
          className="ss-floating-btn ss-floating-call"
          aria-label={`Call SS Enterprises at ${PHONE}`}
          title={`Call ${PHONE}`}
        >
          <i
            className="fa fa-phone"
            aria-hidden="true"
          ></i>

          <span className="ss-floating-tooltip">
            Call +91 {PHONE}
          </span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ss-floating-btn ss-floating-whatsapp"
          aria-label="Chat with SS Enterprises on WhatsApp"
          title="WhatsApp Enquiry"
        >
          <i
            className="fa fa-whatsapp"
            aria-hidden="true"
          ></i>

          <span className="ss-floating-tooltip">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
