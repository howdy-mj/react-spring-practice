/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import { Spring } from "react-spring/renderprops";

const currentTime = new Date();
const CURRENT_YEAR = currentTime.getFullYear();
const CURRENT_MONTH = currentTime.getMonth() + 1;
const CURRENT_DAY = currentTime.getDate();

const WIDHT = 1920;
const HEIGHT = 1080;

const wrap = css`
  height: 3000px;
`;

const container = css`
  border: 1px solid red;
  width: ${WIDHT}px;
  height: ${HEIGHT}px;
`;

const time = css`
  font-size: 50px;
  font-weight: bold;
  width: ${WIDHT}px;
  text-align: center;
  // margin-bottom: 100px;

  span {
    padding: 70px;
  }
`;

const App = () => {
  const [toZero, setToZero] = useState(true);

  const moveScroll = () => {
    console.log("scroll");
    if (window.scrollY < HEIGHT * 0.1 || window.scrollY > HEIGHT * 0.9) {
      console.log("0", window.scrollY);
      setToZero(true);
      console.log("currentZero", toZero);
    } else if (window.scrollY > HEIGHT * 0.1 || window.scrollY < HEIGHT * 0.9) {
      console.log("날짜 표시", window.scrollY);
      setToZero(false);
      console.log("currentZero", toZero);
    }
  };

  return (
    <div css={wrap}>
      <div css={container} onWheel={moveScroll}></div>
      <div css={time}>
        <Spring
          config={{ delay: 2000 }}
          from={{
            year: toZero ? 0 : CURRENT_YEAR,
            month: toZero ? 0 : CURRENT_MONTH,
            day: toZero ? 0 : CURRENT_DAY,
          }}
          to={{
            year: toZero ? 0 : CURRENT_YEAR,
            month: toZero ? 0 : CURRENT_MONTH,
            day: toZero ? 0 : CURRENT_DAY,
          }}
        >
          {(props) => (
            <p>
              <span>
                {Number(props.year.toFixed(0)) < 999
                  ? `000${props.year.toFixed(0)}`
                  : props.year.toFixed(0)}
              </span>
              <span>
                {Number(props.month.toFixed(0)) < 10
                  ? `0${props.month.toFixed(0)}`
                  : props.month.toFixed(0)}
              </span>
              <span>
                {Number(props.day.toFixed(0)) < 10
                  ? `0${props.day.toFixed(0)}`
                  : props.day.toFixed(0)}
              </span>
            </p>
          )}
        </Spring>
      </div>
    </div>
  );
};

export default App;
