import "./LandingPageMobile.css";
import IntroFrameMobile from "./IntroFrameMobile";
import TornStickyNoteMobile from "./TornStickyNoteMobile";
import HandsHoldingBannerMobile from "./HandsHoldingBannerMobile";
import IntroVideoMobile from "./IntroVideoMobile";

function LandingPageMobile() {
  return (
    <div>
      <IntroFrameMobile />
      <div className="TornStickyNotesMobile">
        <TornStickyNoteMobile position="left" />
        <TornStickyNoteMobile position="right" />
      </div>
      <HandsHoldingBannerMobile />
      <IntroVideoMobile />
    </div>
  );
}

export default LandingPageMobile;