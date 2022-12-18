import React from "react";
import "./App.css";
import IntroFrame from "./IntroFrame";
import TornStickyNote from "./TornStickyNote";
import HandsHoldingBanner from "./HandsHoldingBanner";
import LandingPageMobile from "./mobile/LandingPageMobile";
import IntroVideo from "./IntroVideo";
import StickyNote from "./StickyNote";

function App() {
  const DesktopComponent = () => {
    return (
      <div className="DesktopComponent">
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
      </div>
    );
  };

  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <LandingPageMobile /> : <DesktopComponent />;
}

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

export default App;
