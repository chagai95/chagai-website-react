import React from "react";
import "./App.css";
import IntroFrame from "./IntroFrame";
import TornStickyNote from "./TornStickyNote";
import HandsHoldingBanner from "./HandsHoldingBanner";
import LandingPageMobile from "./mobile/LandingPageMobile";
import IntroVideo from "./IntroVideo";

function App() {
  const DesktopComponent = () => {
    return (
      <div>
        <IntroFrame />
        <div className="TornStickyNotes">
          <TornStickyNote position="left" />
          <TornStickyNote position="right" />
        </div>
        <HandsHoldingBanner />
        <IntroVideo />
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
