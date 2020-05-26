/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1;
const data = currentTime.getDate();

const App = () => {
  return (
    <div css={container}>
      <div css={time}></div>
    </div>
  );
};

const container = css`
  border: 1px solid red;
  width: 1920px;
  height: 1080px;
`;

const time = css`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

export default App;
