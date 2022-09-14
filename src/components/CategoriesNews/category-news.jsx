import React, { Component } from "react";
import { Container, Row, Col, Carousel, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriesNews = () => {
  return (
    <>
      <section class="whats-news-area">
        <div class="properties__button">
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="mb-3 justify-content-start"
          >
            <Tab eventKey="all" title="All">
              <div class="whats-news-caption">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews1.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews2.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews3.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews4.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="lifestyle" title="Lifestyle">
              <div class="whats-news-caption">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews1.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews2.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews3.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews4.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="travel" title="Travel">
              <div class="whats-news-caption">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews1.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews2.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews3.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews4.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="fashion" title="Fashion">
              <div class="whats-news-caption">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews1.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews2.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews3.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews4.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="sports" title="Sports">
              <div class="whats-news-caption">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews1.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews2.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews3.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews4.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="technology" title="Technology">
              <div class="whats-news-caption">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews1.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews2.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews3.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-what-news mb-100">
                      <div class="what-img">
                        <img src="./static/img/news/whatNews4.jpg" alt="" />
                      </div>
                      <div class="what-cap">
                        <span class="color1">Night party</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default CategoriesNews;
