"use client";
import React, { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

const Modal = ({
  children,
  handleClose,
}: {
  children?: ReactNode;
  handleClose: () => void;
}) => {
  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="z-50 fixed top-0 w-screen h-screen left-0 bg-black bg-opacity-40 flex items-center justify-center backdrop-blur-sm"
      >
        <div className="relative">
          <button
            onClick={() => handleClose()}
            className="absolute top-2 right-2 z-50 w-10 h-10 rounded-full bg-black bg-opacity-50 hover:scale-[1.1] transition-all"
          >
            <i className="ri-close-line text-white"></i>
          </button>
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
