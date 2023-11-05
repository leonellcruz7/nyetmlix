"use client";
import React, { useEffect, useState } from "react";
import DesktopMenu from "./shared/DesktopMenu";
import styles from "./styles.module.scss";
import DetectScroll from "../helpers/DetectScroll";
import classNames from "classnames";
import Search from "../assets/Search";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search?search=${search}`);
  };
  return (
    <>
      <DetectScroll
        handleIsNotScrolled={() => setIsScrolled(false)}
        handleIsScrolled={() => setIsScrolled(true)}
      />
      <div
        className={classNames(
          styles.container,
          isScrolled && styles["-isScrolled"]
        )}
      >
        <div className="main-container flex justify-between w-full">
          <div className="flex gap-10">
            <p className="text-white">Nyetmlix</p>
            <DesktopMenu />
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-[300px]">
            <Search
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
