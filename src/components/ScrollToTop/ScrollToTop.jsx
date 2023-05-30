import "./ScrollToTop.css";
import { useState, useEffect } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollBtnHandler = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightoBeHidden = 100;
    const winHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    setIsVisible(winHeight > heightoBeHidden);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-btn" onClick={scrollBtnHandler}>
          <div>
            <KeyboardArrowUpOutlinedIcon />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
