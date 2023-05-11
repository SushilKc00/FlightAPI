import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </>
  );
};
