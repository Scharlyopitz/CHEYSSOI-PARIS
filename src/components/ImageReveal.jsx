import InView from "./InView";

export default function ImageReveal({ src, alt, color }) {
  return (
    <InView>
      <div className="image" style={{ background: color }}>
        <img src={src} alt={alt} />
      </div>
    </InView>
  );
}
