import "./StickyNote.css";
import { ReactComponent as StickyNote1 } from "./images/sticky-note-1.svg";
import { ReactComponent as StickyNote2 } from "./images/sticky-note-2.svg";
import { ReactComponent as StickyNote3 } from "./images/sticky-note-3.svg";

function StickyNote(props: { number: string; }) {
  return (
    <div >
      { props.number === "1" && <StickyNote1 /> }
      { props.number === "2" && <StickyNote2 /> }
      { props.number === "3" && <StickyNote3 /> }
    </div>
  );
}

export default StickyNote;