import React from "react";
import ContactButon from "./ContactButon";
import ImageReveal from "../ImageReveal";

export default function Section({ title, text, src, alt }) {
  return (
    <div className="sectionContainer espaceProSection">
      <div className="image">
        <img src={src} alt={alt} />
      </div>
      <div className="textContainer">
        {title && <h2>{title}</h2>}
        <p className="justify">{text}</p>
        <ContactButon />
      </div>
    </div>
  );
}
