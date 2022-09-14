import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./top-news.scss";

export default class TopNewsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className="top-slider-wrapper">
        <Slider {...settings}>
          <div class="weekly-single">
            <div class="weekly-img">
              <img src="./static/img/news/weeklyNews1.jpg" alt="" />
            </div>
            <div class="weekly-caption">
              <span class="color1">Strike</span>
              <h4>
                <a href="#">Welcome To The Best Model Winner Contest</a>
              </h4>
            </div>
          </div>
          <div class="weekly-single">
            <div class="weekly-img">
              <img src="./static/img/news/weeklyNews2.jpg" alt="" />
            </div>
            <div class="weekly-caption">
              <span class="color1">Strike</span>
              <h4>
                <a href="#">Welcome To The Best Model Winner Contest</a>
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
                <a href="#">Welcome To The Best Model Winner Contest</a>
              </h4>
            </div>
          </div>
          <div class="weekly-single">
            <div class="weekly-img">
              <img src="./static/img/news/weeklyNews2.jpg" alt="" />
            </div>
            <div class="weekly-caption">
              <span class="color1">Strike</span>
              <h4>
                <a href="#">Welcome To The Best Model Winner Contest</a>
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
                <a href="#">Welcome To The Best Model Winner Contest</a>
              </h4>
            </div>
          </div>
          <div class="weekly-single">
            <div class="weekly-img">
              <img src="./static/img/news/weeklyNews2.jpg" alt="" />
            </div>
            <div class="weekly-caption">
              <span class="color1">Strike</span>
              <h4>
                <a href="#">Welcome To The Best Model Winner Contest</a>
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
                <a href="#">Welcome To The Best Model Winner Contest</a>
              </h4>
            </div>
          </div>
          <div class="weekly-single">
            <div class="weekly-img">
              <img src="./static/img/news/weeklyNews2.jpg" alt="" />
            </div>
            <div class="weekly-caption">
              <span class="color1">Strike</span>
              <h4>
                <a href="#">Welcome To The Best Model Winner Contest</a>
              </h4>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
