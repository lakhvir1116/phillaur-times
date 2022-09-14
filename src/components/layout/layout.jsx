import * as React from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
