import AproposInfos from "../assets/AproposInfos.json";
import ImageReveal from "../components/ImageReveal";
import TextReveal from "../components/TextReveal";
import TitleReveal from "../components/TitleReveal";

export default function Apropos() {
  return (
    <section id="apropos">
      {AproposInfos.map((info, i) => {
        return (
          <AproposSection
            key={i}
            wordsTitle={info.wordsTitle}
            text={info.text}
            image={info.image}
            index={i}
          />
        );
      })}
    </section>
  );
}

function AproposSection({ wordsTitle, text, image, index }) {
  return (
    <section className="aproposSection">
      <div className="lineContainer">
        <div className="line" />
      </div>
      <div className="content">
        <div className="txt">
          <TitleReveal words={wordsTitle} />
          <div className="paragraphe">
            <TextReveal text={text} />
          </div>
        </div>
        <ImageReveal
          src={image}
          alt={`image projet ${index + 1}`}
          color="#2e1006"
        />
      </div>
    </section>
  );
}
