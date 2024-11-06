import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const links = [
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Team",
      to: "/team",
    },
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <div>
      {links.map((link, i) => {
        return (
          <NavLink key={i} to={link.to}>
            {link.name}
          </NavLink>
        );
      })}
    </div>
  );
}
