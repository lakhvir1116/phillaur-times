import React, { Fragment } from "react";
import HomePage from "./../pages/home";
import AboutPage from "./../pages/about";
import CategoryPage from "./../pages/category";
import ContactPage from "./../pages/contact";
import LatestNewsPage from "./../pages/latest-news";
import BlogPage from "./../pages/blog";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/latest-news" element={<LatestNewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
