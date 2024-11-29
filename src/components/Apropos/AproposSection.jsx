export default function AproposSection({ wordsTitle, text, number }) {
  return (
    <section className="aproposSection">
      <div className="lineContainer">
        <div className="line" />
        <span className="number">[ {number} ]</span>
      </div>
      <div className="content">
        <div className="txt">
          <div className="title">
            {wordsTitle.map((word, i) => {
              return <h2 key={i}>{word}</h2>;
            })}
          </div>
          <div className="paragraphe">
            <p>{text}</p>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </section>
  );
}
