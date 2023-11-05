import Link from "next/link";
import React from "react";

const DesktopMenu = () => {
  const menus = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "TV Shows",
      link: "#",
    },
    {
      label: "Movies",
      link: "#",
    },
  ];
  return (
    <div>
      <ul className="flex items-center gap-4">
        {menus.map((item, index) => {
          const { label, link } = item;
          return (
            <Link key={index} href={link}>
              <li className="text-white">{label}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopMenu;
