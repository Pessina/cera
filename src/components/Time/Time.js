import React, { useState } from "react";
import { formatDate } from "../../utils/utils.js";
import TimeStyles from "./TimeStyles.js";

const Time = () => {
  const [time, setTime] = useState(Date.now());

  setInterval(() => {
    setTime(Date.now());
  }, 1000);

  return <TimeStyles>{formatDate(time)}</TimeStyles>;
};

export default Time;
