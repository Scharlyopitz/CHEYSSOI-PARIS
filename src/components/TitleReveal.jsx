export default function TitleReveal({ words }) {
  return (
    <div className="titleContainer">
      {words.map((word, i) => {
        return (
          <div key={i} className="wordContainer">
            <h2>{word}</h2>
          </div>
        );
      })}
    </div>
  );
}
