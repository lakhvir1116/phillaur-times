import * as React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top black-bg d-none d-md-block">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="header-info-left">
                      <ul>
                        <li>
                          <img
                            src="./static/img/icon/header_icon1.png"
                            alt=""
                          />
                          34ºc, Sunny{" "}
                        </li>
                        <li>
                          <img
                            src="./static/img/icon/header_icon1.png"
                            alt=""
                          />
                          Tuesday, 18th June, 2019
                        </li>
                      </ul>
                    </div>
                    <div className="header-info-right">
                      <ul className="header-social">
                        <li>
                          <a href="#">
                            <i className="bi bi-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="bi bi-instagram"></i>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">
                            <i className="bi bi-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mid d-none d-md-block">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="logo">
                    <a href="index.html">
                      <img src="./static/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right ">
                    <img src="./static/img/hero/header_card.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                  <div className="sticky-logo">
                    <a href="index.html">
                      <img src="./static/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="main-menu d-none d-md-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="categori.html">Category</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="latest_news.html">Latest News</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="#">Pages</a>
                          <ul className="submenu">
                            <li>
                              <a href="elements.html">Element</a>
                            </li>
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="single-blog.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="details.html">Categori Details</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <i className="fas fa-search special-tag"></i>
                    <div className="search-box">
                      <form action="#">
                        <input type="text" placeholder="Search" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-md-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
