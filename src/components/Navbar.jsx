import { NavLink } from "react-router-dom";
import LogoCheyssoi from "/Logo.png";

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <Menu />
    </nav>
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
    { name: "à propos", to: "/apropos" },
    { name: "demarrer mon projet", to: "/demarrermonprojet" },
    { name: "L'équipe", to: "/team" },
    { name: "galerie", to: "/galerie" },
    { name: "ebook", to: "/ebook" },
  ];

  return (
    <>
      <div className="menu">
        {links.map((link, i) => {
          return (
            <NavLink key={i} className={"link"} to={link.to}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
