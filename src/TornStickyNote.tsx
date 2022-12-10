import React from "react";
import "./TornStickyNote.css";

function TornStickyNote(props: { position: string; }) {
  let shortMargin = "29.3%";
  let longMargin = "11.7%";
  return (
    <div
      className="TornStickyNote"
      style={{
        marginLeft: props.position === "left" ? shortMargin : longMargin,
        marginRight: props.position === "left" ? longMargin : shortMargin,
      }}
    >
      <p
        style={{
          fontSize: "0.7vw",
          marginLeft: "23%",
          marginRight: "18%",
          marginTop: "5%"
        }}
      >
        {props.position === "left" ? 
        "Communication is very important to me"
        :
        "I have this page so it is easy and quick to contact me"
      }
      </p>
    </div>
  );
}

export default TornStickyNote;
