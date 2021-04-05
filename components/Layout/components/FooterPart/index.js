import React from "react";

export default function index() {
  return (
    <footer id="footer" className="footer_area">
      <div className="container">
        <div className="footer_widget pt-70 pb-120">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="footer_about mt-50">
                <div className="footer_logo">
                  <a href="#">
                    <img src="images/logo-footer.svg" alt="" />
                  </a>
                </div>
                <div className="footer_content">
                  <p>
                    Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor
                    invidunt ut labore et dolore magna uyam erat, sed diam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer_link_wrapper d-flex flex-wrap">
                <div className="footer_link mt-50">
                  <h2 className="footer_title">Quick Links</h2>
                  <ul className="link">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>
                <div className="footer_link mt-50">
                  <h2 className="footer_title">Resources</h2>
                  <ul className="link">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer_subscribe mt-50">
                <h2 className="footer_title">Newsletter</h2>
                <div className="subscribe_form text-right">
                  <form action="#">
                    <input type="text" placeholder="Enter email" />
                    <button className="main-btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright d-sm-flex justify-content-between">
          <div className="footer_social text-center">
            <ul className="social">
              <li>
                <a href="https://facebook.com/uideckHQ">
                  <i className="lni lni-facebook-filled"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/uideckHQ">
                  <i className="lni lni-twitter-filled"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/uideckHQ">
                  <i className="lni lni-instagram-original"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni lni-linkedin-original"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_copyright_content  text-center">
            <p>
              Designed and Developed by{" "}
              <a href="https://uideck.com" rel="nofollow">
                UIdeck
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
