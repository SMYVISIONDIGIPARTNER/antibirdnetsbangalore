
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const phone1 = "8105109482";
  const phone2 = "8296023717";

  const developerWebsite = "https://www.smyvisiontechnologies.com/";

  const whatsappLink = (message) =>
    `https://wa.me/91${phone1}?text=${encodeURIComponent(message)}`;

  const services = [
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
    "Cloth Hanger"
  ];

  return (
    <>
      <style>{`
        .ss-footer {
          background: #061e38;
          color: #c6d5e5;
          font-family: Arial, Helvetica, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .ss-footer *,
        .ss-footer *::before,
        .ss-footer *::after {
          box-sizing: border-box;
        }

        .ss-footer a {
          text-decoration: none;
        }

        .ss-footer-container {
          width: min(1200px, 92%);
          margin: auto;
        }

        /* TOP CONTACT BANNER */
        .ss-footer-top {
          background: linear-gradient(120deg, #ff5a0a, #f07928);
          padding: 30px 0;
        }

        .ss-footer-top-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .ss-footer-top h2 {
          color: #ffffff;
          font-size: 25px;
          margin: 0 0 7px;
          font-weight: 800;
        }

        .ss-footer-top p {
          color: #fff8f3;
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
        }

        .ss-footer-top-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 25px;
          background: #ffffff;
          color: #f05a14;
          font-size: 14px;
          font-weight: 800;
          border-radius: 9px;
          transition: 0.3s ease;
        }

        .ss-footer-top-btn i {
          font-size: 21px;
        }

        .ss-footer-top-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        /* MAIN FOOTER */
        .ss-footer-main {
          padding: 75px 0 55px;
          position: relative;
        }

        .ss-footer-main::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(255,90,10,0.05);
          filter: blur(60px);
          top: -100px;
          right: -100px;
          pointer-events: none;
        }

        .ss-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1.1fr 1.1fr;
          gap: 40px;
          position: relative;
          z-index: 1;
        }

        /* LOGO */
        .ss-footer-logo {
          display: inline-flex;
          align-items: center;
          background: #ffffff;
          padding: 12px 18px;
          border-radius: 12px;
          margin-bottom: 25px;
          transition: transform 0.3s ease;
        }

        .ss-footer-logo:hover {
          transform: translateY(-4px);
        }

        .ss-footer-logo img {
          width: 195px;
          max-width: 100%;
          height: auto;
          display: block;
        }

        .ss-footer-about {
          color: #a9bfd4;
          font-size: 14px;
          line-height: 1.95;
          margin: 0 0 22px;
        }

        .ss-footer-location {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #d4e2ef;
        }

        .ss-footer-location i {
          color: #ff681f;
          font-size: 19px;
        }

        /* SECTION HEADINGS */
        .ss-footer-heading {
          color: #ffffff;
          font-size: 18px;
          font-weight: 800;
          margin: 8px 0 27px;
          padding-bottom: 15px;
          position: relative;
        }

        .ss-footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 42px;
          height: 3px;
          border-radius: 5px;
          background: #ff5a0a;
        }

        /* QUICK LINKS AND SERVICES */
        .ss-footer-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .ss-footer-links a {
          display: inline-flex;
          align-items: flex-start;
          gap: 10px;
          color: #b7c9da;
          font-size: 14px;
          line-height: 1.5;
          transition: 0.3s ease;
        }

        .ss-footer-links a i {
          color: #ff5a0a;
          font-size: 12px;
          margin-top: 5px;
        }

        .ss-footer-links a:hover {
          color: #ff782f;
          transform: translateX(5px);
        }

        /* CONTACT */
        .ss-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin-bottom: 22px;
        }

        .ss-footer-contact-icon {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 10px;
          background: rgba(255,90,10,0.12);
          color: #ff681f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: 0.3s ease;
        }

        .ss-footer-contact-item:hover .ss-footer-contact-icon {
          background: #ff5a0a;
          color: #ffffff;
          transform: rotate(-8deg);
        }

        .ss-footer-contact-item strong {
          display: block;
          color: #ffffff;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .ss-footer-contact-item a {
          display: block;
          color: #b7c9da;
          font-size: 14px;
          margin-bottom: 6px;
          transition: 0.3s ease;
        }

        .ss-footer-contact-item a:hover {
          color: #ff782f;
        }

        .ss-footer-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 20px;
          background: #19a85a;
          color: #ffffff;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 800;
          transition: 0.3s ease;
          margin-top: 8px;
        }

        .ss-footer-whatsapp i {
          font-size: 21px;
          transition: transform 0.3s ease;
        }

        .ss-footer-whatsapp:hover {
          background: #128448;
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(25,168,90,0.2);
        }

        .ss-footer-whatsapp:hover i {
          transform: scale(1.2) rotate(-12deg);
        }

        /* BOTTOM COPYRIGHT */
        .ss-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 25px 0;
          background: #04172c;
        }

        .ss-footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ss-footer-copyright {
          font-size: 13px;
          color: #9fb5ca;
          margin: 0;
        }

        /* PREMIUM DEVELOPER CREDIT */
        @keyframes ssDeveloperGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(255,90,10,0);
          }

          50% {
            box-shadow: 0 0 20px rgba(255,90,10,0.35);
          }
        }

        @keyframes ssDeveloperIcon {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.15);
          }
        }

        .ss-footer-developer {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          padding: 13px 20px;
          background: rgba(255,90,10,0.1);
          border: 1px solid rgba(255,90,10,0.45);
          border-radius: 10px;
          text-decoration: none;
          cursor: pointer;
          animation: ssDeveloperGlow 3s ease-in-out infinite;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .ss-footer-developer:hover {
          transform: translateY(-4px);
          background: rgba(255,90,10,0.2);
          border-color: #ff782f;
        }

        .ss-footer-developer:focus-visible {
          outline: 3px solid #ffb27f;
          outline-offset: 4px;
        }

        .ss-footer-developer-label {
          color: #d4e2ef;
          font-size: 13px;
          font-weight: 600;
        }

        .ss-footer-developer-name {
          color: #ff782f;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.5px;
          transition: 0.3s ease;
        }

        .ss-footer-developer:hover .ss-footer-developer-name {
          color: #ffffff;
          text-shadow: 0 0 12px rgba(255,90,10,0.7);
        }

        .ss-footer-developer i {
          color: #ff782f;
          font-size: 15px;
        }

        .ss-footer-developer .fa-code {
          animation: ssDeveloperIcon 3s ease-in-out infinite;
        }

        .ss-footer-developer .fa-external-link {
          font-size: 12px;
          margin-left: 3px;
          transition: transform 0.3s ease;
        }

        .ss-footer-developer:hover .fa-external-link {
          transform: translate(3px, -3px);
        }

        /* RESPONSIVE TABLET */
        @media (max-width: 1100px) {
          .ss-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 45px;
          }
        }

        /* RESPONSIVE MOBILE */
        @media (max-width: 650px) {
          .ss-footer-top {
            padding: 28px 0;
          }

          .ss-footer-top-inner {
            flex-direction: column;
            text-align: center;
          }

          .ss-footer-top h2 {
            font-size: 22px;
          }

          .ss-footer-main {
            padding: 55px 0 40px;
          }

          .ss-footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .ss-footer-heading {
            margin-bottom: 22px;
          }

          .ss-footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }

          .ss-footer-developer {
            width: 100%;
            padding: 14px 10px;
          }

          .ss-footer-developer-name {
            font-size: 12px;
          }

          .ss-footer-logo img {
            width: 175px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ss-footer-developer,
          .ss-footer-developer .fa-code {
            animation: none;
          }
        }
      `}</style>

      <footer className="ss-footer">

        {/* TOP ENQUIRY BANNER */}
        <div className="ss-footer-top">
          <div className="ss-footer-container ss-footer-top-inner">
            <div>
              <h2>Need Safety Net Installation?</h2>
              <p>
                Contact SS Enterprises for quality safety net
                solutions in Bangalore.
              </p>
            </div>

            <a
              href={whatsappLink(
                "Hello SS Enterprises, I need a quotation for safety net installation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="ss-footer-top-btn"
            >
              <i
                className="fa fa-whatsapp"
                aria-hidden="true"
              ></i>
              Get Free Quote
            </a>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="ss-footer-main">
          <div className="ss-footer-container ss-footer-grid">

            {/* COMPANY INFORMATION */}
            <div>
              <Link to="/" className="ss-footer-logo">
                <img
                  src="/logo.png"
                  alt="SS Enterprises Logo"
                />
              </Link>

              <p className="ss-footer-about">
                SS Enterprises provides quality safety net
                installation services in Bangalore. We offer
                balcony safety nets, pigeon nets, anti-bird
                nets, construction safety nets, invisible
                grills and other protection solutions at
                affordable prices.
              </p>

              <div className="ss-footer-location">
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                ></i>
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="ss-footer-heading">
                Quick Links
              </h3>

              <div className="ss-footer-links">
                <Link to="/">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Home
                </Link>

                <Link to="/about">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  About Us
                </Link>

                <Link to="/services">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Our Services
                </Link>

                <Link to="/contact">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* OUR SERVICES */}
            <div>
              <h3 className="ss-footer-heading">
                Our Services
              </h3>

              <div className="ss-footer-links">
                {services.map((service) => (
                  <Link
                    to="/services"
                    key={service}
                  >
                    <i
                      className="fa fa-angle-right"
                      aria-hidden="true"
                    ></i>
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div>
              <h3 className="ss-footer-heading">
                Contact Us
              </h3>

              <div className="ss-footer-contact-item">
                <div className="ss-footer-contact-icon">
                  <i
                    className="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <strong>Call Us</strong>

                  <a href={`tel:+91${phone1}`}>
                    +91 {phone1}
                  </a>

                  <a href={`tel:+91${phone2}`}>
                    +91 {phone2}
                  </a>
                </div>
              </div>

              <div className="ss-footer-contact-item">
                <div className="ss-footer-contact-icon">
                  <i
                    className="fa fa-whatsapp"
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <strong>WhatsApp Enquiry</strong>

                  <a
                    href={whatsappLink(
                      "Hello SS Enterprises, I would like to know more about your services."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 {phone1}
                  </a>
                </div>
              </div>

              <div className="ss-footer-contact-item">
                <div className="ss-footer-contact-icon">
                  <i
                    className="fa fa-map-marker"
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <strong>Service Location</strong>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#b7c9da"
                    }}
                  >
                    Bangalore, Karnataka
                  </span>
                </div>
              </div>

              <a
                href={whatsappLink(
                  "Hello SS Enterprises, I want to enquire about safety net installation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="ss-footer-whatsapp"
              >
                <i
                  className="fa fa-whatsapp"
                  aria-hidden="true"
                ></i>
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* COPYRIGHT AND DEVELOPER CREDIT */}
        <div className="ss-footer-bottom">
          <div className="ss-footer-container ss-footer-bottom-inner">

            <p className="ss-footer-copyright">
              © {new Date().getFullYear()} SS Enterprises.
              All Rights Reserved.
            </p>

            {/* ENTIRE DEVELOPER CREDIT IS CLICKABLE */}
            <a
              href={developerWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="ss-footer-developer"
              aria-label="Visit SMYVISION TECHNOLOGIES website"
              title="Visit SMYVISION TECHNOLOGIES"
            >
              <i
                className="fa fa-code"
                aria-hidden="true"
              ></i>

              <span className="ss-footer-developer-label">
                Developed by
              </span>

              <span className="ss-footer-developer-name">
                SMYVISION TECHNOLOGIES
              </span>

              <i
                className="fa fa-external-link"
                aria-hidden="true"
              ></i>
            </a>

          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;
