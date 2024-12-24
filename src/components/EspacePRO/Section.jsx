import React from "react";
import ContactButon from "./ContactButon";

export default function Section({ title, text }) {
  return (
    <div className="sectionContainer espaceProSection">
      <div className="image">{/* <img src="" alt="" /> */}</div>
      <div className="textContainer">
        {title && <h2>{title}</h2>}
        <p className="justify">{text}</p>
        <ContactButon />
      </div>
    </div>
  );
}
