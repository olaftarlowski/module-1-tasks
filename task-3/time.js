import moment from "moment";

const printDate = () => {
  const currentDate = moment().format("MMM Do YYYY");
  const currentTime = moment().format("h:mm:ss");

  const dateAndTime = { currentDate, currentTime };

  return dateAndTime;
};

console.log(printDate().currentDate);
console.log(printDate().currentTime);

export default printDate;
