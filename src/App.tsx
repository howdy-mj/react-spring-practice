/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

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

  const moveScroll = () => {
    if (window.scrollY > HEIGHT * 0.1 || window.scrollY < HEIGHT * 0.9) {
      console.log("window.scrollY 날짜 표시", window.scrollY);
      setYear(CURRENT_YEAR);
      setMonth(CURRENT_MONTH);
      setDay(CURRENT_DAY);
    } else if (window.scrollY < HEIGHT * 0.1 || window.scrollY > HEIGHT * 0.9) {
      console.log("window.scrollY 날짜 0", window.scrollY);
      setYear(0);
      setMonth(0);
      setDay(0);
    }
  };

  // const year = useSpring({ number: CURRENT_YEAR, from: { number: 0 } });
  // const month = useSpring({ number: CURRENT_MONTH, from: { number: 0 } });
  // const day = useSpring({ number: CURRENT_DAY, from: { number: 0 } });

  // const showYear = useSpring({
  //   from: { year: 0 },
  //   to: { year: CURRENT_YEAR },
  //   delay: 1000,
  // });

  // const showMonth = useSpring({
  //   from: { month: 0 },
  //   to: { month: CURRENT_MONTH },
  //   delay: 1000,
  // });

  // const showDay = useSpring({
  //   from: { number: 0 },
  //   to: { number: CURRENT_DAY },
  //   delay: 1000,
  // });

  const props = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, color: "#ffaaee" });
      await next({ opacity: 0, color: "rgb(14,26,19)" });
    },
    from: { opacity: 0, color: "red" },
  });

  return (
    <div>
      <animated.div style={props}>I will fade in and out</animated.div>
      <div css={container} onWheel={moveScroll}></div>
      <div css={time}>
        {/* <animated.span style={showYear}>{year}</animated.span>
        <animated.span style={showMonth}>{month}</animated.span>
        <animated.span style={showDay}>{day}</animated.span> */}
        {/* <Spring
          config={{ delay: 1000 }}
          from={{ year: 0 }}
          to={{ year: CURRENT_YEAR }}
        >
          {(props) => <span>{props.year}</span>}
        </Spring> */}
      </div>
    </div>
  );
};

export default App;
