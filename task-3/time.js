import { format } from "date-fns";

const printDate = () => {
  const currentDate = format(new Date(), "MM-dd-yyy");
  const currentTime = format(new Date(), "h:mm:ss");

  const dateAndTime = { currentDate, currentTime };

  return dateAndTime;
};

console.log(printDate().currentDate);
console.log(printDate().currentTime);

export default printDate;
