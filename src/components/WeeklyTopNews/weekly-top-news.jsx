import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopNewsSlider from "../TopNewsSlider/top-news";

const WeeklyTopNews = () => {
  return (
    <>
      <section className="custom-slider">
        <div class="weekly-news-area pt-50">
          <div class="container">
            <div class="weekly-wrapper">
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-tittle mb-30">
                    <h3>Weekly Top News</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <TopNewsSlider />

                  {/* <div class="weekly-news-active dot-style d-flex dot-style">
                    <div class="weekly-single">
                      <div class="weekly-img">
                        <img src="./static/img/news/weeklyNews2.jpg" alt="" />
                      </div>
                      <div class="weekly-caption">
                        <span class="color1">Strike</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div class="weekly-single active">
                      <div class="weekly-img">
                        <img src="./static/img/news/weeklyNews1.jpg" alt="" />
                      </div>
                      <div class="weekly-caption">
                        <span class="color1">Strike</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div class="weekly-single">
                      <div class="weekly-img">
                        <img src="./static/img/news/weeklyNews3.jpg" alt="" />
                      </div>
                      <div class="weekly-caption">
                        <span class="color1">Strike</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div class="weekly-single">
                      <div class="weekly-img">
                        <img src="./static/img/news/weeklyNews1.jpg" alt="" />
                      </div>
                      <div class="weekly-caption">
                        <span class="color1">Strike</span>
                        <h4>
                          <a href="#">
                            Welcome To The Best Model Winner Contest
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeeklyTopNews;
