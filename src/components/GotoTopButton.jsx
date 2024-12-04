import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function GotoTopButton() {
  return (
    <div className="gotoTopButton">
      <a href="#" className="button">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
}
