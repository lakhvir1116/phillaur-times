import * as React from "react";
import Layout from "./../../Components/Layout/layout";
import TrendingNews from "../../Components/TrendingNews/trending-news";
import WeeklyTopNews from "../../Components/WeeklyTopNews/weekly-top-news";
import CategoriesNews from "../../Components/CategoriesNews/category-news";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Layout>
        <TrendingNews />
        <WeeklyTopNews />

        <section class="whats-news-area pt-50 pb-20">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="row ">
                  <div class="col-lg-12 col-md-12">
                    <div class="section-tittle mb-30">
                      <h3>Whats New</h3>
                    </div>
                  </div>
                </div>
                <CategoriesNews />
              </div>

              <div class="col-lg-4">
                <div class="section-tittle mb-40">
                  <h3>Follow Us</h3>
                </div>
                <div class="single-follow mb-45">
                  <div class="single-box">
                    <div class="follow-us d-flex align-items-center">
                      <div class="follow-social">
                        <Link to="/">
                          <img src="./static/img/news/icon-fb.png" alt="" />
                        </Link>
                      </div>
                      <div class="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div class="follow-us d-flex align-items-center">
                      <div class="follow-social">
                        <Link to="/">
                          <img src="./static/img/news/icon-tw.png" alt="" />
                        </Link>
                      </div>
                      <div class="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div class="follow-us d-flex align-items-center">
                      <div class="follow-social">
                        <Link to="/">
                          <img src="./static/img/news/icon-ins.png" alt="" />
                        </Link>
                      </div>
                      <div class="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div class="follow-us d-flex align-items-center">
                      <div class="follow-social">
                        <Link to="/">
                          <img src="./static/img/news/icon-yo.png" alt="" />
                        </Link>
                      </div>
                      <div class="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news-poster d-none d-lg-block">
                  <img src="./static/img/news/news_card.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
