import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-nav">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
