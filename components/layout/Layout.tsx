import React from "react";
import Navbar from "../navbar/Navbar";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-w-[1280px] pb-20">
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
