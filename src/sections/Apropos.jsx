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
    <div className="aproposSection">
      <TitleReveal words={wordsTitle} />
      <TextReveal text={text} />
    </div>
  );
}
