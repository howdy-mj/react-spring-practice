/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import { Spring } from "react-spring/renderprops";

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
  const [toZero, setToZero] = useState(true);
  const currentTime = new Date();

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

  return (
    <div css={wrap}>
      <div css={container}></div>
      <div css={time}>
        <Spring
          config={{ delay: 1000 }}
          from={{
            year: 0,
            month: 0,
            day: 0,
          }}
          to={{
            year: toZero ? 0 : currentTime.getFullYear(),
            month: toZero ? 0 : currentTime.getMonth() + 1,
            day: toZero ? 0 : currentTime.getDate(),
          }}
        >
          {(props) => (
            <p>
              <span>
                {Number(props.year.toFixed(0)) < 10
                  ? `000${props.year.toFixed(0)}`
                  : Number(props.year.toFixed(0)) < 100
                  ? `00${props.year.toFixed(0)}`
                  : Number(props.year.toFixed(0)) < 1000
                  ? `0${props.year.toFixed(0)}`
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
