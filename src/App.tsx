/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { useSpring, animated } from "react-spring";

const currentTime = new Date();
const CURRENT_YEAR = currentTime.getFullYear();
const CURRENT_MONTH = currentTime.getMonth() + 1;
const CURRENT_DAY = currentTime.getDate();

const WIDHT = 1920;
const HEIGHT = 1080;

const container = css`
  border: 1px solid red;
  width: ${WIDHT}px;
  height: ${HEIGHT}px;
`;

const time = css`
  font-size: 40px;
  font-weight: bold;
  width: ${WIDHT}px;
  text-align: center;
  // margin-bottom: 100px;

  span {
    padding: 70px;
  }
`;

const App = () => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const showTime = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  const moveScroll = () => {
    if (window.scrollY > HEIGHT * 0.1) {
      console.log("window.scrollY", window.scrollY);
      setYear(CURRENT_YEAR);
      setMonth(CURRENT_MONTH);
      setDay(CURRENT_DAY);
    } else if (window.scrollY < HEIGHT * 0.1) {
      setYear(0);
      setMonth(0);
      setDay(0);
    }

    if (window.scrollY > HEIGHT * 0.9) {
      console.log("window.scrollY", window.scrollY);
      setYear(0);
      setMonth(0);
      setDay(0);
    } else if (window.scrollY < HEIGHT * 0.9) {
      setYear(CURRENT_YEAR);
      setMonth(CURRENT_MONTH);
      setDay(CURRENT_DAY);
    }
  };

  return (
    <div>
      <div css={container} onWheel={moveScroll}></div>
      <div css={time}>
        <animated.span style={showTime}>{year}</animated.span>
        <animated.span style={showTime}>{month}</animated.span>
        <animated.span style={showTime}>{day}</animated.span>
      </div>
    </div>
  );
};

export default App;
