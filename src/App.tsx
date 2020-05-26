/** @jsx jsx */
// import React from "react";
import { jsx, css } from "@emotion/core";
import { useSpring, animated } from "react-spring";

const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1;
const date = currentTime.getDate();

const App = () => {
  const showTime = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div css={container}>
      <div css={time}>
        <animated.div style={showTime}>{year}</animated.div>
        <animated.div style={showTime}>{month}</animated.div>
        <animated.div style={showTime}>{date}</animated.div>
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
