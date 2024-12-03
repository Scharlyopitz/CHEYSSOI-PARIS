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
    <a href={"/"} className="LogoContainer">
      <img src={LogoCheyssoi} alt="LogoCheyssoi" />
    </a>
  );
}

function Menu() {
  const links = [
    { name: "à propos", to: "#apropos" },
    { name: "galerie", to: "#galerie" },
    { name: "demarrer mon projet", to: "#demarrerprojet" },
    { name: "Ebook", to: "#ebook" },
  ];

  return (
    <>
      <div className="menu">
        {links.map((link, i) => {
          return (
            <a key={i} className={"link"} href={link.to}>
              {link.name}
            </a>
          );
        })}
      </div>
    </>
  );
}
