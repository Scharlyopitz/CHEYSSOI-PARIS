export default function Button({ href, txt }) {
  return (
    <a href={href} className="Button">
      {txt}
    </a>
  );
}
