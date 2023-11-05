import React from "react";
import Navbar from "../navbar/Navbar";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
