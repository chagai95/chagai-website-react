import "./LandingPageMobile.css";
import IntroFrameMobile from "./IntroFrameMobile";
import TornStickyNoteMobile from "./TornStickyNoteMobile";
import StickyNoteMobile from "./StickyNoteMobile";
import HandsHoldingBannerMobile from "./HandsHoldingBannerMobile";
import IntroVideoMobile from "./IntroVideoMobile";

function LandingPageMobile() {
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
        <StickyNoteMobile number="1" />
        <StickyNoteMobile number="2" />
        <StickyNoteMobile number="3" />
      </div>
    </div>
  );
}

export default LandingPageMobile;