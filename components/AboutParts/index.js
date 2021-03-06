import React from "react";

export default function AboutPart() {
  return (
    <section id="why" className="about_area pt-115 ">
      <div className="about_image d-flex align-items-end justify-content-end">
        <div className="image">
          <img
            className="wow fadeInLeftBig"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
            src="/images/about.svg"
            alt="about"
          />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div
              className="about_content wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div className="section_title pb-35">
                <h5 className="sub_title">Why Choose Us</h5>
                <h4 className="main_title">Your Goal is Our Achievement</h4>
              </div>
              <p>
                Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat sed diam voluptua. At vero eos et accusam et justo duo
                dolores et rebum. Stet clita kasd gubergren, no sea takimata
                sanctus.{" "}
              </p>
              <ul className="about_list">
                <li className="d-flex">
                  <div className="about_check">
                    <i className="lni lni-checkmark-circle"></i>
                  </div>
                  <div className="about_list_content">
                    <p>
                      Vero eos et accusam et justo duo dolores et rebum. Stet
                      clita kasd gubergrenv
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="about_check">
                    <i className="lni lni-checkmark-circle"></i>
                  </div>
                  <div className="about_list_content">
                    <p>
                      At vero eos et accusam et justo duo dolores et rebum. Stet
                      clita kasd gubergrenv
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="about_check">
                    <i className="lni lni-checkmark-circle"></i>
                  </div>
                  <div className="about_list_content">
                    <p>
                      Dvero eos et accusam et justo duo dolores et rebum. Stet
                      clita kasd gubergrenv
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
