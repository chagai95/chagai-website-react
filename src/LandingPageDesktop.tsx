import "./LandingPageDesktop.css";
import IntroFrame from "./IntroFrame";
import TornStickyNote from "./TornStickyNote";
import HandsHoldingBanner from "./HandsHoldingBanner";
import IntroVideo from "./IntroVideo";
import StickyNote from "./StickyNote";
import VideoCall from "./VideoCall";
import { useEffect } from "react";
import { sendMessage } from "./utils";

let didInit = false;


function LandingPageDesktop() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      sendMessage("Someone went to desktop");
    }
  }, []);
  return (
    <div className="LandingPageDesktop">
      <IntroFrame />
      <div className="TornStickyNotes">
        <TornStickyNote position="left" />
        <TornStickyNote position="right" />
      </div>
      <HandsHoldingBanner />
      <IntroVideo />
      <div className="StickyNotes">
        <StickyNote number="1" />
        <StickyNote number="2" />
        <StickyNote number="3" />
      </div>
      <VideoCall />
    </div>
  );
}

export default LandingPageDesktop;
