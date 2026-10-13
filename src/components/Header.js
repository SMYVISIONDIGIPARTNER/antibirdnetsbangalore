
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .ss-header {
          position: sticky;
          top: 0;
          width: 100%;
          background: #ffffff;
          z-index: 1000;
          box-shadow: 0 3px 15px rgba(0, 30, 65, 0.1);
          font-family: Arial, sans-serif;
        }

        .ss-header * {
          box-sizing: border-box;
        }

        .ss-header-container {
          max-width: 1300px;
          min-height: 85px;
          margin: auto;
          padding: 12px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .ss-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .ss-logo img {
          width: 250px;
          max-width: 100%;
          height: auto;
          display: block;
        }

        .ss-nav {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .ss-nav-link {
          color: #082e56;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          position: relative;
          padding: 10px 0;
          transition: color 0.3s;
        }

        .ss-nav-link:hover,
        .ss-nav-link.active {
          color: #ff5a0a;
        }

        .ss-nav-link::after {
          content: "";
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ff5a0a;
          transition: width 0.3s;
        }

        .ss-nav-link:hover::after,
        .ss-nav-link.active::after {
          width: 100%;
        }

        .ss-quote-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 22px;
          background: #ff5a0a;
          color: white;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 8px;
          white-space: nowrap;
          transition: 0.3s;
        }

        .ss-quote-btn:hover {
          background: #e64b00;
          transform: translateY(-2px);
        }

        .ss-menu-btn {
          display: none;
        }

        .ss-mobile-quote {
          display: none;
        }

        @media (max-width: 1050px) {
          .ss-header-container {
            gap: 15px;
            padding: 12px 20px;
          }

          .ss-logo img {
            width: 200px;
          }

          .ss-nav {
            gap: 20px;
          }

          .ss-quote-btn {
            padding: 12px 15px;
          }
        }

        @media (max-width: 850px) {
          .ss-header-container {
            min-height: 70px;
            padding: 10px 18px;
          }

          .ss-logo img {
            width: 190px;
          }

          .ss-desktop-quote {
            display: none;
          }

          .ss-menu-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
            width: 44px;
            height: 44px;
            background: #fff0e8;
            border: none;
            border-radius: 8px;
            cursor: pointer;
          }

          .ss-menu-btn span {
            width: 23px;
            height: 2.5px;
            background: #082e56;
            border-radius: 3px;
            transition: 0.3s;
          }

          .ss-menu-btn.open span:nth-child(1) {
            transform: translateY(7.5px) rotate(45deg);
          }

          .ss-menu-btn.open span:nth-child(2) {
            opacity: 0;
          }

          .ss-menu-btn.open span:nth-child(3) {
            transform: translateY(-7.5px) rotate(-45deg);
          }

          .ss-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 20px;
            background: white;
            box-shadow: 0 12px 20px rgba(0, 30, 65, 0.12);
            flex-direction: column;
            align-items: stretch;
            gap: 5px;
          }

          .ss-nav.show {
            display: flex;
          }

          .ss-nav-link {
            padding: 13px 10px;
            border-bottom: 1px solid #eeeeee;
          }

          .ss-nav-link::after {
            display: none;
          }

          .ss-mobile-quote {
            display: flex;
            margin-top: 12px;
          }
        }

        @media (max-width: 400px) {
          .ss-logo img {
            width: 160px;
          }

          .ss-header-container {
            padding: 10px 12px;
          }
        }
      `}</style>

      <header className="ss-header">
        <div className="ss-header-container">

          {/* Logo */}
          <Link
            to="/"
            className="ss-logo"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="SS Enterprises"
            />
          </Link>

          {/* Navigation */}
          <nav
            id="ss-navigation"
            className={`ss-nav ${menuOpen ? "show" : ""}`}
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `ss-nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `ss-nav-link ${isActive ? "active" : ""}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                `ss-nav-link ${isActive ? "active" : ""}`
              }
            >
              Our Services
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `ss-nav-link ${isActive ? "active" : ""}`
              }
            >
              Contact Us
            </NavLink>

            <Link
              to="/contact"
              className="ss-quote-btn ss-mobile-quote"
              onClick={closeMenu}
            >
              Get Free Quote →
            </Link>
          </nav>

          {/* Desktop Button */}
          <Link
            to="/contact"
            className="ss-quote-btn ss-desktop-quote"
          >
            Get Free Quote →
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            className={`ss-menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="ss-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>
    </>
  );
}

export default Header;
