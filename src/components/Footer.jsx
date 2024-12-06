import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <Contact />
        <Socials />
      </div>
    </footer>
  );
}

function Contact() {
  return (
    <div className="contact">
      <div>+33 (0)7 81 16 56 22</div>
      <div>CHEYSSOIPARIS@GMAIL.COM</div>
    </div>
  );
}

function Socials() {
  const socialMedias = [
    {
      icon: <FontAwesomeIcon icon={faFacebookF} />,
      to: `https://www.facebook.com/CheyssoiParis/`,
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} />,
      to: `https://www.instagram.com/cheyssoiparis/`,
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedinIn} />,
      to: `https://www.linkedin.com/in/tania-vingadassalon-design/`,
    },
  ];
  return (
    <div className="socials">
      {socialMedias.map((social, i) => {
        return (
          <NavLink key={i} target="_blank" to={social.to}>
            {social.icon}
          </NavLink>
        );
      })}
    </div>
  );
}
