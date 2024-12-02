import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function Socials() {
  const socialMedias = [
    {
      icon: <FontAwesomeIcon icon={faFacebookF} />,
      to: `https://www.facebook.com/CheyssoiParis/`,
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} />,
      to: `https://www.instagram.com/cheyssoiparis/`,
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
