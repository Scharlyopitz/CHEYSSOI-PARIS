import AproposInfos from "../assets/AproposInfos.json";
import Text from "../components/Text";
import Title from "../components/Title";

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
          />
        );
      })}
    </section>
  );
}

function AproposSection({ wordsTitle, text, image }) {
  return (
    <section className="aproposSection">
      <div className="lineContainer">
        <div className="line" />
      </div>
      <div className="content">
        <div className="txt">
          <Title words={wordsTitle} />
          <div className="paragraphe">
            <Text text={text} />
          </div>
        </div>
        <div className="image">
          <img src={image} alt="image" />
        </div>
      </div>
    </section>
  );
}
