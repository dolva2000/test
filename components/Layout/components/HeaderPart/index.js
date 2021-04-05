import React from "react";

export default function index() {
  return (
    <section className="header_area">
      <div className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="images/logo.svg" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#work">
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#pricing">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div id="home" className="header_hero d-lg-flex align-items-center">
        <div className="hero_shape shape_1">
          <img src="images/shape/shape-1.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_2">
          <img src="images/shape/shape-2.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_3">
          <img src="images/shape/shape-3.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_4">
          <img src="images/shape/shape-4.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_6">
          <img src="images/shape/shape-1.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_7">
          <img src="images/shape/shape-4.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_8">
          <img src="images/shape/shape-3.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_9">
          <img src="images/shape/shape-2.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_10">
          <img src="images/shape/shape-4.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_11">
          <img src="images/shape/shape-1.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_12">
          <img src="images/shape/shape-2.svg" alt="shape" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="header_hero_content">
                <h2
                  className="hero_title wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  L’intégrité est une composante essentielle de la sécurité. Et
                  pas seulement en informatique !.<span> </span>
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  Parole de Dolva Samuel Bolokondi pour la motivation
                  informatique
                </p>
                <ul>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.9s"
                  >
                    <a
                      className="main-btn"
                      rel="nofollow"
                      href="https://rebrand.ly/plain-ud"
                    >
                      Bonjour le Monde
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header_shape d-none d-lg-block"></div>

        <div className="header_image d-flex align-items-center">
          <div className="image">
            <img
              className="wow fadeInRightBig"
              data-wow-duration="2s"
              data-wow-delay="1.6s"
              src="images/header-image.svg"
              alt="Header Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
