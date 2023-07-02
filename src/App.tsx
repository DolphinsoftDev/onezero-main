import { useState } from "react";
import "./App.css";
import oneZeroLogo from "./assets/onezero-logo.svg";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import SecondScreen from "./components/SecondScreen/SecondScreen";
import ThirdScreen from "./components/ThirdScreen/ThirdScreen";
import FourthScreen from "./components/FourthScreen/FourthScreen";
import FifthScreen from "./components/FifthScreen/FifthScreen";
import Form from "./components/Form/Form";
import FormImage from "./components/Form/FormImage";
import Qa from "./components/Qa/Qa";
import Footer from "./components/Footer/Footer";
import StickyFooter from "./components/Footer/StickyFooter";
import { MIN_DESKTOP_WIDTH } from "./constants/constants";
import { useIsScrolled } from "./hooks/useIsScrolled";
import { useIsMobile } from "./hooks/useIsMobile";
import Desktop from "./components/Desktop/Desktop";

function App() {
  const isMobile = useIsMobile();
  if (!isMobile) {
    return <Desktop />;
  }
  return (
    <div>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <Qa />
      <Footer />
    </div>
  );
}

export default App;
