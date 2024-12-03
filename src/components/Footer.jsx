import React from "react";
import Socials from "./Socials";

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
