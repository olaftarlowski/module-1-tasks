import printDate from "./time.js";

const getData = printDate();

const printTime = () => {
  console.log("Current date: " + getData.currentDate);
  setInterval(() => {
    console.log("Time: " + printDate().currentTime);
  }, 1000);
};

printTime();
