
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PHONE1 = "8105109482";
const PHONE2 = "8296023717";

const whatsappLink = (service) =>
  `https://wa.me/91${PHONE1}?text=${encodeURIComponent(
    `Hello SS Enterprises, I would like to enquire about ${service}. Please share the details and quotation.`
  )}`;

const services = [
  {
    id: "balcony-safety-nets",
    title: "Balcony Safety Nets",
    image: "balcony.jpg",
    icon: "fa-building",
    short:
      "Protective safety netting for apartment balconies, residential buildings and elevated open spaces.",
    description:
      "Balcony safety nets are an important protective solution for apartments and high-rise residential buildings. They help reduce the risk of accidental falls and provide an additional barrier around open balcony spaces. SS Enterprises offers balcony safety net installations based on your balcony dimensions, layout and requirements.",
    features: [
      "Suitable for apartments and high-rise balconies",
      "Customized according to balcony dimensions",
      "Designed to preserve ventilation",
      "Practical protection for open balcony areas"
    ]
  },
  {
    id: "pigeon-safety-nets",
    title: "Pigeon Safety Nets",
    image: "pigeon.jpg",
    icon: "fa-paw",
    short:
      "Help prevent pigeons from entering balconies, windows and other exposed building areas.",
    description:
      "Pigeon safety nets help protect balconies, windows, utility areas and open spaces from unwanted pigeon entry. These nets can help reduce nesting, droppings and the cleaning difficulties associated with birds. Our installation solutions are adapted to different residential and commercial spaces.",
    features: [
      "Helps prevent pigeon entry and nesting",
      "Suitable for balconies and window openings",
      "Useful for residential and commercial properties",
      "Helps maintain cleaner outdoor spaces"
    ]
  },
  {
    id: "anti-bird-nets",
    title: "Anti Bird Nets",
    image: "anti_bird.jpg",
    icon: "fa-shield",
    short:
      "Effective bird-exclusion netting for buildings, balconies, ducts and commercial properties.",
    description:
      "Anti bird nets provide a practical solution for restricting bird access to designated spaces. They are suitable for balconies, ventilation areas, ducts, building ledges and commercial structures. Properly fitted bird netting helps keep unwanted birds away without blocking airflow.",
    features: [
      "Helps restrict access by unwanted birds",
      "Suitable for multiple building openings",
      "Useful for residential and commercial areas",
      "Installed according to site requirements"
    ]
  },
  {
    id: "children-safety-nets",
    title: "Children Safety Nets",
    image: "children.jpg",
    icon: "fa-child",
    short:
      "Additional protective barriers for balconies, windows and elevated areas used by families.",
    description:
      "Children safety nets are installed as an additional protective measure around balconies, windows and elevated open spaces. They help reduce exposure to certain fall hazards and are particularly relevant in apartments and high-rise buildings. Safety nets should always be used alongside appropriate supervision and other building safety measures.",
    features: [
      "Additional protection around elevated openings",
      "Suitable for balconies and selected window areas",
      "Installation according to the space dimensions",
      "Supports a safer residential environment"
    ]
  },
  {
    id: "construction-safety-nets",
    title: "Construction Safety Nets",
    image: "construction.jpg",
    icon: "fa-wrench",
    short:
      "Protective netting solutions for construction environments and elevated work areas.",
    description:
      "Construction safety nets are used in construction environments to help manage certain risks associated with elevated work and falling materials. Different sites require different netting specifications, attachment methods and safety assessments. SS Enterprises offers netting solutions according to project requirements. All construction safety systems should be selected and verified against applicable site safety standards.",
    features: [
      "Netting solutions for construction projects",
      "Site-specific installation requirements",
      "Options for designated protective applications",
      "Planning based on project safety needs"
    ]
  },
  {
    id: "monkey-safety-nets",
    title: "Monkey Safety Nets",
    image: "monkey.jpg",
    icon: "fa-shield",
    short:
      "Protective netting designed to help restrict monkey access to exposed property areas.",
    description:
      "Monkey safety nets can help restrict access to balconies, terraces and selected outdoor openings in areas where monkeys frequently enter residential properties. The suitability of a net depends on the site conditions, installation strength and expected animal activity. We provide netting options based on the customer's requirements.",
    features: [
      "Helps restrict access to selected openings",
      "Suitable for certain balconies and terraces",
      "Customized for the property layout",
      "Site-specific netting recommendations"
    ]
  },
  {
    id: "duct-area-safety-nets",
    title: "Duct Area Safety Nets",
    image: "duct_area.jpg",
    icon: "fa-th-large",
    short:
      "Netting for exposed duct openings and utility spaces in residential and commercial buildings.",
    description:
      "Duct area safety nets are used to cover designated open duct spaces and utility openings in apartment buildings and commercial properties. Depending on the installation, they can help restrict bird access and provide a protective barrier around open areas. The appropriate design depends on the duct size and intended use.",
    features: [
      "Suitable for selected duct and utility openings",
      "Helps restrict unwanted bird access",
      "Customized for different opening sizes",
      "Practical solutions for apartment buildings"
    ]
  },
  {
    id: "bird-spikes",
    title: "Bird Spikes",
    image: "bird_spike.jpg",
    icon: "fa-angle-double-up",
    short:
      "Bird-deterrent spikes for ledges, window sills, signage and other landing surfaces.",
    description:
      "Bird spikes are designed to discourage birds from landing or roosting on narrow surfaces such as building ledges, window sills, signboards and parapet walls. They are a practical bird-control option where netting may not be suitable. Our team can help identify appropriate placement for the affected areas.",
    features: [
      "Discourages birds from landing on ledges",
      "Suitable for window sills and parapets",
      "Useful for signboards and building edges",
      "Low-profile bird deterrent option"
    ]
  },
  {
    id: "coconut-safety-nets",
    title: "Coconut Safety Nets",
    image: "coconut.jpg",
    icon: "fa-leaf",
    short:
      "Protective netting solutions intended to help manage falling coconut hazards.",
    description:
      "Coconut safety nets are installed in suitable locations to help reduce risks associated with falling coconuts or debris from coconut trees. The design, strength, coverage and anchoring must be assessed according to the tree and surrounding area. These systems should be treated as supplementary protective measures rather than a guarantee against falling objects.",
    features: [
      "Protective netting for suitable coconut tree areas",
      "Coverage planned around site conditions",
      "Site-specific mounting considerations",
      "Supplementary protection against falling objects"
    ]
  },
  {
    id: "balcony-invisible-grills",
    title: "Balcony Invisible Grills",
    image: "invisible_grills.jpg",
    icon: "fa-bars",
    short:
      "Modern, minimal-appearance balcony barriers that help maintain an open view.",
    description:
      "Balcony invisible grills are a modern option for properties where safety, appearance and visibility are important. Their slim vertical or horizontal cable design helps maintain a more open view compared with traditional bulky grills. The appropriate installation and safety suitability depend on the product specification and building conditions.",
    features: [
      "Modern and minimal appearance",
      "Helps maintain an open balcony view",
      "Suitable for selected residential balconies",
      "Installation tailored to opening dimensions"
    ]
  },
  {
    id: "cloth-hanger",
    title: "Cloth Hanger",
    image: "cloth_hanger.jpg",
    icon: "fa-sun-o",
    short:
      "Convenient space-saving cloth drying hanger solutions for balconies and utility areas.",
    description:
      "Cloth hanger systems provide an organized and convenient way to dry clothes in balconies, utility spaces and residential areas. Space-saving ceiling-mounted and other suitable designs can help make everyday laundry management easier. Installation options depend on the available area and customer preferences.",
    features: [
      "Convenient clothes drying arrangements",
      "Space-saving options for balconies",
      "Suitable for residential utility areas",
      "Installation based on available space"
    ]
  }
];

const carouselSlides = [
  {
    label: "PROFESSIONAL SAFETY NET SOLUTIONS",
    title: "Our Safety Net",
    highlight: "Services in Bangalore",
    description:
      "Explore our range of protective netting, bird control and balcony solutions for homes and commercial properties.",
    image: "balcony.jpg"
  },
  {
    label: "RESIDENTIAL PROTECTION",
    title: "Balcony & Children",
    highlight: "Safety Solutions",
    description:
      "Additional protection for balconies, elevated openings and residential spaces.",
    image: "children.jpg"
  },
  {
    label: "BIRD CONTROL SOLUTIONS",
    title: "Pigeon Nets &",
    highlight: "Anti Bird Protection",
    description:
      "Practical solutions to help restrict unwanted birds from balconies, ducts and building openings.",
    image: "pigeon.jpg"
  },
  {
    label: "COMMERCIAL AND CONSTRUCTION",
    title: "Safety Netting",
    highlight: "For Every Project",
    description:
      "Netting solutions for designated commercial, construction and other specialized applications.",
    image: "construction.jpg"
  }
];

const imageFallbacks = {
  "balcony.jpg":
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  "pigeon.jpg":
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=85",
  "anti_bird.jpg":
    "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1200&q=85",
  "children.jpg":
    "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1200&q=85",
  "construction.jpg":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
  "monkey.jpg":
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=85",
  "duct_area.jpg":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  "bird_spike.jpg":
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=85",
  "coconut.jpg":
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
  "invisible_grills.jpg":
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  "cloth_hanger.jpg":
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85"
};

function ServiceImage({ image, alt, className, eager = false }) {
  const localSource = `/images/${image}`;
  const fallback = imageFallbacks[image];

  const [src, setSrc] = useState(localSource);

  useEffect(() => {
    setSrc(localSource);
  }, [localSource]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      onError={() => {
        if (src !== fallback && fallback) {
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
    const node = ref.current;

    if (!node) return;

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

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ss-services-reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal delay={(index % 3) * 100}>
      <article className="ss-service-card" id={service.id}>
        <div className="ss-service-image-wrap">
          <ServiceImage
            image={service.image}
            alt={`${service.title} installation by SS Enterprises`}
            className="ss-service-image"
          />

          <div className="ss-service-image-label">
            <i
              className={`fa ${service.icon}`}
              aria-hidden="true"
            ></i>
          </div>
        </div>

        <div className="ss-service-card-body">
          <h3>{service.title}</h3>

          <p className="ss-service-short">{service.short}</p>

          {expanded && (
            <div className="ss-service-extra">
              <p>{service.description}</p>

              <h4>Key Features</h4>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <i
                      className="fa fa-check-circle"
                      aria-hidden="true"
                    ></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="ss-service-card-actions">
            <button
              type="button"
              className="ss-service-readmore"
              onClick={() => setExpanded((previous) => !previous)}
              aria-expanded={expanded}
            >
              {expanded ? "Read Less" : "Read More"}
              <i
                className={`fa ${
                  expanded ? "fa-angle-up" : "fa-angle-down"
                }`}
                aria-hidden="true"
              ></i>
            </button>

            <a
              href={whatsappLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="ss-service-whatsapp"
            >
              <i
                className="fa fa-whatsapp"
                aria-hidden="true"
              ></i>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveSlide((previous) =>
        (previous + 1) % carouselSlides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const previousSlide = () => {
    setActiveSlide((previous) =>
      (previous - 1 + carouselSlides.length) %
      carouselSlides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((previous) =>
      (previous + 1) % carouselSlides.length
    );
  };

  const current = carouselSlides[activeSlide];

  return (
    <>
      <style>{`
        .ss-services-page {
          --ss-navy: #092d55;
          --ss-orange: #ff5a0a;
          --ss-muted: #63758a;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--ss-navy);
          overflow: hidden;
        }

        .ss-services-page *,
        .ss-services-page *::before,
        .ss-services-page *::after {
          box-sizing: border-box;
        }

        .ss-services-page a {
          text-decoration: none;
        }

        .ss-services-container {
          width: min(1200px, 92%);
          margin: auto;
        }

        /* ANIMATIONS */
        @keyframes ssServicesFade {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ssServicesZoom {
          from { transform: scale(1.07); }
          to { transform: scale(1); }
        }

        @keyframes ssServicesFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        .ss-services-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity .7s ease,
            transform .7s ease;
        }

        .ss-services-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO */
        .ss-services-hero {
          position: relative;
          background: #061f3b;
        }

        .ss-services-hero-grid {
          display: grid;
          grid-template-columns: 48% 52%;
          min-height: 500px;
        }

        .ss-services-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 70px 6% 85px max(5%, calc((100vw - 1200px)/2));
          background:
            radial-gradient(circle at 0% 0%, #174d80, transparent 60%),
            #061f3b;
          color: white;
        }

        .ss-services-hero-label {
          font-size: 12px;
          letter-spacing: 2px;
          color: #ff9a62;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .ss-services-hero-title {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.15;
          font-weight: 900;
          margin: 0;
          animation: ssServicesFade .7s both;
        }

        .ss-services-hero-title span {
          display: block;
          color: var(--ss-orange);
          margin-top: 9px;
        }

        .ss-services-hero-description {
          font-size: 16px;
          color: #d6e2ee;
          line-height: 1.85;
          margin: 24px 0 28px;
          max-width: 490px;
          animation: ssServicesFade .85s both;
        }

        .ss-services-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .ss-services-btn {
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
          transition: .3s ease;
        }

        .ss-services-btn-orange {
          background: var(--ss-orange);
          color: white;
        }

        .ss-services-btn-orange:hover {
          background: #e94e00;
          transform: translateY(-3px);
        }

        .ss-services-btn-outline {
          border: 1px solid rgba(255,255,255,.75);
          color: white;
        }

        .ss-services-btn-outline:hover {
          background: white;
          color: var(--ss-navy);
        }

        .ss-services-hero-media {
          min-height: 500px;
          position: relative;
          overflow: hidden;
          background: #164267;
        }

        .ss-services-hero-image {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          animation: ssServicesZoom 5s ease both;
        }

        .ss-services-hero-badge {
          position: absolute;
          right: 25px;
          bottom: 75px;
          z-index: 2;
          background: rgba(255,255,255,.96);
          padding: 15px 20px;
          border-radius: 12px;
          color: var(--ss-navy);
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 12px 30px rgba(0,0,0,.12);
          animation: ssServicesFloat 4s ease-in-out infinite;
        }

        .ss-services-hero-badge i {
          color: var(--ss-orange);
          margin-right: 8px;
        }

        .ss-services-carousel-controls {
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
          background: rgba(5,25,48,.85);
          border: 1px solid rgba(255,255,255,.15);
        }

        .ss-services-arrow {
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

        .ss-services-arrow:hover {
          background: var(--ss-orange);
        }

        .ss-services-dot {
          width: 9px;
          height: 9px;
          border: 0;
          padding: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.45);
          cursor: pointer;
          transition: .3s;
        }

        .ss-services-dot.active {
          width: 26px;
          border-radius: 10px;
          background: var(--ss-orange);
        }

        /* BREADCRUMB */
        .ss-services-breadcrumb {
          background: #f3f7fb;
          padding: 17px 0;
          border-bottom: 1px solid #e5ecf4;
        }

        .ss-services-breadcrumb-inner {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 13px;
        }

        .ss-services-breadcrumb a {
          color: #5b7187;
        }

        .ss-services-breadcrumb span {
          color: var(--ss-orange);
          font-weight: 800;
        }

        /* SERVICES SECTION */
        .ss-services-section {
          padding: 85px 0;
          background: #f6f9fd;
        }

        .ss-services-intro {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 45px;
        }

        .ss-services-eyebrow {
          font-size: 12px;
          color: var(--ss-orange);
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .ss-services-heading {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 900;
          margin: 14px 0 18px;
          line-height: 1.25;
        }

        .ss-services-intro p {
          font-size: 16px;
          color: var(--ss-muted);
          line-height: 1.85;
        }

        .ss-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          align-items: start;
        }

        /* SERVICE CARD */
        .ss-service-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #e6edf5;
          overflow: hidden;
          box-shadow: 0 7px 25px rgba(9,45,85,.04);
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .ss-service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(9,45,85,.12);
          border-color: #ffd0b8;
        }

        .ss-service-image-wrap {
          height: 235px;
          position: relative;
          overflow: hidden;
          background: #e6eef5;
        }

        .ss-service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .ss-service-card:hover .ss-service-image {
          transform: scale(1.09);
        }

        .ss-service-image-label {
          position: absolute;
          bottom: 15px;
          left: 16px;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--ss-orange);
          border: 3px solid white;
          border-radius: 12px;
          color: white;
          font-size: 19px;
          box-shadow: 0 8px 20px rgba(0,0,0,.15);
        }

        .ss-service-card-body {
          padding: 26px 23px 24px;
        }

        .ss-service-card-body h3 {
          font-size: 21px;
          line-height: 1.35;
          margin: 0 0 12px;
          font-weight: 900;
          color: var(--ss-navy);
        }

        .ss-service-short {
          font-size: 14px;
          color: var(--ss-muted);
          line-height: 1.85;
          margin: 0 0 20px;
        }

        .ss-service-extra {
          padding-top: 16px;
          margin-bottom: 20px;
          border-top: 1px solid #e7edf5;
          animation: ssServicesFade .4s ease both;
        }

        .ss-service-extra p {
          color: var(--ss-muted);
          font-size: 14px;
          line-height: 1.85;
          margin: 0 0 16px;
        }

        .ss-service-extra h4 {
          color: var(--ss-navy);
          font-size: 15px;
          margin: 0 0 13px;
        }

        .ss-service-extra ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .ss-service-extra li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #536b82;
          font-size: 13px;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .ss-service-extra li i {
          color: var(--ss-orange);
          margin-top: 3px;
        }

        .ss-service-card-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ss-service-readmore {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px;
          width: 100%;
          background: #fff2eb;
          color: var(--ss-orange);
          border: 1px solid #ffd7c3;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 800;
          transition: .3s;
        }

        .ss-service-readmore:hover {
          background: #ffe4d5;
        }

        .ss-service-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 13px 12px;
          background: #19a85a;
          color: white;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 800;
          transition: .3s;
        }

        .ss-service-whatsapp i {
          font-size: 21px;
          transition: transform .3s;
        }

        .ss-service-whatsapp:hover {
          background: #128448;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(25,168,90,.2);
        }

        .ss-service-whatsapp:hover i {
          transform: scale(1.2) rotate(-12deg);
        }

        /* CTA */
        .ss-services-cta {
          padding: 80px 20px;
          background:
            radial-gradient(circle at 85% 10%, #1b578c, transparent 40%),
            linear-gradient(120deg, #061f3b, #103c68);
          text-align: center;
        }

        .ss-services-cta h2 {
          color: white;
          font-size: clamp(28px, 3vw, 42px);
          margin: 0 0 18px;
        }

        .ss-services-cta p {
          max-width: 700px;
          color: #d9e5f2;
          font-size: 16px;
          line-height: 1.85;
          margin: 0 auto 27px;
        }

        .ss-services-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        .ss-services-btn-whatsapp {
          background: #19a85a;
          color: white;
        }

        .ss-services-btn-whatsapp i {
          font-size: 21px;
        }

        .ss-services-btn-whatsapp:hover {
          background: #128448;
          transform: translateY(-3px);
        }

        /* TABLET */
        @media (max-width: 1050px) {
          .ss-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* MOBILE */
        @media (max-width: 750px) {
          .ss-services-hero-grid {
            display: flex;
            flex-direction: column-reverse;
            min-height: auto;
          }

          .ss-services-hero-media {
            height: 270px;
            min-height: 270px;
          }

          .ss-services-hero-content {
            align-items: center;
            text-align: center;
            padding: 35px 6% 80px;
            min-height: 320px;
          }

          .ss-services-hero-title {
            font-size: clamp(29px, 7vw, 38px);
          }

          .ss-services-hero-description {
            font-size: 14px;
            margin: 18px 0 23px;
          }

          .ss-services-hero-label {
            font-size: 10px;
            margin-bottom: 13px;
          }

          .ss-services-hero-actions {
            justify-content: center;
          }

          .ss-services-hero-badge {
            right: 15px;
            bottom: 15px;
            font-size: 11px;
            padding: 11px 14px;
          }

          .ss-services-section {
            padding: 60px 0;
          }

          .ss-services-grid {
            grid-template-columns: 1fr;
            gap: 23px;
          }

          .ss-service-image-wrap {
            height: 235px;
          }

          .ss-service-card-body {
            padding: 23px 20px;
          }

          .ss-service-card-body h3 {
            font-size: 20px;
          }
        }

        @media (max-width: 390px) {
          .ss-services-hero-media {
            height: 230px;
            min-height: 230px;
          }

          .ss-services-hero-title {
            font-size: 27px;
          }

          .ss-services-btn {
            padding: 12px 17px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ss-services-page *,
          .ss-services-page *::before,
          .ss-services-page *::after {
            animation: none !important;
            transition-duration: .01ms !important;
          }

          .ss-services-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main className="ss-services-page">

        {/* HERO CAROUSEL */}
        <section
          className="ss-services-hero"
          aria-label="SS Enterprises services carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <div className="ss-services-hero-grid">
            <div
              className="ss-services-hero-content"
              key={`content-${activeSlide}`}
            >
              <span className="ss-services-hero-label">
                {current.label}
              </span>

              {activeSlide === 0 ? (
                <h1 className="ss-services-hero-title">
                  {current.title}
                  <span>{current.highlight}</span>
                </h1>
              ) : (
                <h2 className="ss-services-hero-title">
                  {current.title}
                  <span>{current.highlight}</span>
                </h2>
              )}

              <p className="ss-services-hero-description">
                {current.description}
              </p>

              <div className="ss-services-hero-actions">
                <a
                  href="#all-services"
                  className="ss-services-btn ss-services-btn-orange"
                >
                  Explore Services →
                </a>

                <Link
                  to="/contact"
                  className="ss-services-btn ss-services-btn-outline"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div
              className="ss-services-hero-media"
              key={`image-${activeSlide}`}
            >
              <ServiceImage
                image={current.image}
                alt={current.title}
                className="ss-services-hero-image"
                eager
              />

              <div className="ss-services-hero-badge">
                <i
                  className="fa fa-check-circle"
                  aria-hidden="true"
                ></i>
                Quality Safety Net Solutions
              </div>
            </div>
          </div>

          <div className="ss-services-carousel-controls">
            <button
              type="button"
              className="ss-services-arrow"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>

            {carouselSlides.map((slide, index) => (
              <button
                key={index}
                type="button"
                className={`ss-services-dot ${
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
              className="ss-services-arrow"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="ss-services-breadcrumb">
          <div className="ss-services-container ss-services-breadcrumb-inner">
            <Link to="/">Home</Link>
            <i
              className="fa fa-angle-right"
              aria-hidden="true"
            ></i>
            <span>Our Services</span>
          </div>
        </div>

        {/* ALL 11 SERVICES */}
        <section
          className="ss-services-section"
          id="all-services"
        >
          <div className="ss-services-container">
            <Reveal>
              <div className="ss-services-intro">
                <span className="ss-services-eyebrow">
                  What We Offer
                </span>

                <h2 className="ss-services-heading">
                  Explore Our Safety Net Services
                </h2>

                <p>
                  SS Enterprises offers a wide range of
                  residential, commercial and specialized
                  netting solutions in Bangalore. Explore
                  our services and contact us for a quotation
                  suited to your requirements.
                </p>
              </div>
            </Reveal>

            <div className="ss-services-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="ss-services-cta">
          <Reveal>
            <div className="ss-services-container">
              <h2>Need Safety Net Installation in Bangalore?</h2>

              <p>
                Whether you need balcony safety nets,
                pigeon nets, bird spikes, construction
                netting, invisible grills or cloth hangers,
                contact SS Enterprises to discuss your
                requirements and request a quotation.
              </p>

              <div className="ss-services-cta-actions">
                <a
                  href={`tel:+91${PHONE1}`}
                  className="ss-services-btn ss-services-btn-orange"
                >
                  <i
                    className="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  Call {PHONE1}
                </a>

                <a
                  href={`tel:+91${PHONE2}`}
                  className="ss-services-btn ss-services-btn-outline"
                >
                  <i
                    className="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  Call {PHONE2}
                </a>

                <a
                  href={whatsappLink("Safety Net Installation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-services-btn ss-services-btn-whatsapp"
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

export default Services;
