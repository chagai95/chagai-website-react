import "./TornStickyNote.css";
import { ReactComponent as TornStickyNoteLeftSideSVG } from "./images/torn-sticky-note-left-side.svg";
import { ReactComponent as TornStickyNoteRightSideSVG } from "./images/torn-sticky-note-right-side.svg";

function TornStickyNote(props: { position: string; }) {
  return (
    <div >
      { props.position === "left" && <TornStickyNoteLeftSideSVG /> }
      { props.position === "right" && <TornStickyNoteRightSideSVG /> }
    </div>
  );
}

export default TornStickyNote;