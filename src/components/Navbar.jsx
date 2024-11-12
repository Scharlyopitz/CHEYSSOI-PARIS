import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import LogoCheyssoi from "/Logo.png";
import { motion as m } from "framer-motion";

export default function Navbar() {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  );
}

function Logo() {
  return (
    <NavLink to={"/"} className="LogoContainer">
      <img src={LogoCheyssoi} alt="LogoCheyssoi" />
    </NavLink>
  );
}

function Menu() {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Works",
      to: "/works",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  const ref = useRef(null);
  console.log(ref.current);

  return (
    <>
      <div className="menu">
        {links.map((link, i) => {
          return (
            <NavLink ref={ref} key={i} to={link.to}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
