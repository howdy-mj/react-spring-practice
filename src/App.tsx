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
  height: ${HEIGHT * 2}px;
`;

const container = css`
  border: 1px solid green;
  width: ${WIDHT}px;
  height: ${HEIGHT}px;
  position: relative;
`;

const time = css`
  font-size: 50px;
  font-weight: bold;
  width: ${WIDHT}px;
  text-align: center;
  position: absolute;
  top: ${HEIGHT - 75}px;

  span {
    padding: 70px;
  }
`;

const App = () => {
  const moveScroll = () => {
    if (window.scrollY < HEIGHT * 0.1 || window.scrollY > HEIGHT * 0.9) {
      setToZero(true);
      console.log("0으로");
    } else if (window.scrollY > HEIGHT * 0.1 || window.scrollY < HEIGHT * 0.9) {
      setToZero(false);
      console.log("숫자로");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", moveScroll);
    return () => window.removeEventListener("scroll", moveScroll);
  });

  const [toZero, setToZero] = useState(true);

  return (
    <div css={wrap}>
      <div css={container}></div>
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
