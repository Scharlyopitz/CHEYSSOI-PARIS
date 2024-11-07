import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  );
}

function Logo() {
  return (
    <>
      <p>Logo</p>
    </>
  );
}

function Menu() {
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

  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)} className="menu">
        <p>Menu</p>
        {open && (
          <div className="burger">
            {links.map((link, i) => {
              return (
                <NavLink key={i} to={link.to}>
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
