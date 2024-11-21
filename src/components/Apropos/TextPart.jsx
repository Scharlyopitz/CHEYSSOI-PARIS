export default function TextPart({ texts, title }) {
  return (
    <div className="textPart">
      <h2>{title}</h2>
      <div className="txtContainer">
        <p>{texts}</p>
      </div>
    </div>
  );
}
