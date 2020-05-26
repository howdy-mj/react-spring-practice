/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { useSpring, animated } from "react-spring";

const currentTime = new Date();
const CURRENT_YEAR = currentTime.getFullYear();
const CURRENT_MONTH = currentTime.getMonth() + 1;
const CURRENT_DAY = currentTime.getDate();

const App = () => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const showTime = useSpring({ opacity: 1, from: { opacity: 0 } });

  const scrollTop = () => {
    if (window.scrollY > 100) {
      console.log("100");
    }
  };
  return (
    <div css={container}>
      <div css={time}>
        <animated.div style={showTime}>{year}</animated.div>
        <animated.div style={showTime}>{month}</animated.div>
        <animated.div style={showTime}>{day}</animated.div>
      </div>
    </div>
  );
};

const container = css`
  border: 1px solid red;
  width: 1920px;
  height: 1080px;
`;

const time = css`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin: 0 auto;
`;

export default App;
