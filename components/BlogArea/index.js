import React from "react";

export default function index() {
  return (
    <section id="blog" className="blog_area pt-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h5 className="sub_title">Blog</h5>
              <h4 className="main_title">Dolva fsorum</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7">
            <div
              className="single_blog mt-30 wow fadeIn"
              data-wow-duration="0.5s"
              data-wow-delay="0.3s"
            >
              <div className="blog_image">
                <img src="/images/blog-1.jpg" alt="blog" />
              </div>
              <div className="blog_content">
                <ul className="blog_meta d-flex justify-content-between">
                  <li>
                    By: <a href="#">Musharof Chowdury</a>
                  </li>
                  <li>15 June 2024</li>
                </ul>
                <h3 className="blog_title">
                  <a href="#">How to track your business revenue</a>
                </h3>
                <a href="#" className="more">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <div
              className="single_blog mt-30 wow fadeIn"
              data-wow-duration="0.5s"
              data-wow-delay="0.6s"
            >
              <div className="blog_image">
                <img src="/images/blog-2.jpg" alt="blog" />
              </div>
              <div className="blog_content">
                <ul className="blog_meta d-flex justify-content-between">
                  <li>
                    By: <a href="#">Dolva</a>
                  </li>                <li>
                    By: <a href="#">Dolva</a>
                  </li>
                  <li>15 June 2024</li>
                </ul>
                <h3 className="blog_title">
                  <a href="#">Improving products depending on feedback</a>
                </h3>
                <a href="#" className="more">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <div
              className="single_blog mt-30 wow fadeIn"
              data-wow-duration="0.5s"
              data-wow-delay="0.9s"
            >
              <div className="blog_image">
                <img src="/images/blog-3.jpg" alt="blog" />
              </div>
              <div className="blog_content">
                <ul className="blog_meta d-flex justify-content-between">
                  <li>
                    By: <a href="#">Musharof Chowdury</a>
                  </li>
                  <li>15 June 2024</li>
                </ul>
                <h3 className="blog_title">
                  <a href="#">How to diversify your audience</a>
                </h3>
                <a href="#" className="more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
