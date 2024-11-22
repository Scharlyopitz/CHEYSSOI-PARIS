import React from "react";

export default function TexteSeparation() {
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
                      <span>Cheyssoi</span>
                      <span>Paris</span>
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
