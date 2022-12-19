import React from "react";
import "./App.css";
import LandingPageMobile from "./mobile/LandingPageMobile";
import LandingPageDesktop from "./LandingPageDesktop";

function App() {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <LandingPageMobile /> : <LandingPageDesktop />;
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
