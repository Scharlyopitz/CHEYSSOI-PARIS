import React from "react";

export default function TextSeparation({ textSeparation }) {
  return (
    <div className="txtSeparation">
      <div className="txtInfinite">
        {[...Array(2)].map((_, i) => {
          return (
            <div key={i} className="wordsContainer">
              {[...Array(4)].map((_, i) => {
                return (
                  <div className="words" key={i}>
                    <div className="word">
                      {textSeparation.split(" ").map((t, i) => {
                        return <span key={i}>{t}</span>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
