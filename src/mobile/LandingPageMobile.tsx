import "./LandingPageMobile.css";
import IntroFrameMobile from "./IntroFrameMobile";
import TornStickyNoteMobile from "./TornStickyNoteMobile";
import StickyNoteMobile from "./StickyNoteMobile";
import HandsHoldingBannerMobile from "./HandsHoldingBannerMobile";
import IntroVideoMobile from "./IntroVideoMobile";
import VideoCallMobile from "./VideoCallMobile";
import { useEffect } from "react";
import { sendMessage } from "../utils";
import ChatBubbleMobile from "./ChatBubbleMobile";
import PersonMobile from "./PersonMobile";

let didInit = false;

function LandingPageMobile() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      //sendMessage("Someone went to mobile");
    }
  }, []);
  return (
    <div className="LandingPageMobile">
      <IntroFrameMobile />
      <div className="TornStickyNotesMobile">
        <TornStickyNoteMobile position="left" />
        <TornStickyNoteMobile position="right" />
      </div>
      <HandsHoldingBannerMobile />
      <IntroVideoMobile />
      <div className="StickyNotes">
        <StickyNoteMobile number="2" />
        <StickyNoteMobile number="3" />
      </div>
      <VideoCallMobile />
      <div className="ChatBubbles">
        <ChatBubbleMobile number="1" />
        <ChatBubbleMobile number="2" />
        <ChatBubbleMobile number="3" />
      </div>
      <div className="Persons">
        <PersonMobile number="1" />
        <PersonMobile number="2" />
      </div>
    </div>
  );
}

export default LandingPageMobile;