"use client";
import React, { useEffect } from "react";

type DetectScrollProps = {
  handleIsScrolled: () => void;
  handleIsNotScrolled: () => void;
};

const DetectScroll = ({
  handleIsScrolled,
  handleIsNotScrolled,
}: DetectScrollProps) => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      handleIsScrolled();
    } else {
      handleIsNotScrolled();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return null;
};

export default DetectScroll;
