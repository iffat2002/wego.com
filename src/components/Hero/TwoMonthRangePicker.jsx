import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB"; 
import dayjs from 'dayjs'; // Ensure dayjs is imported

// Register the locale
registerLocale("en-GB", enGB);

export default function TwoMonthRangePicker({ minDate, value, handleChange,  setCalender, calender }) {
  // const [startDate, endDate] = value;
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
console.log("date range", dateRange)
  // Convert value (if dayjs) to native Date objects
  const formattedValue = value.map((date) => {
    // If date is a dayjs object, convert it to a native Date
    if (dayjs.isDayjs(date) && date.isValid()) {
      return date.toDate();
    }
    return null; // Return null if date is invalid or null
  });

  // Convert minDate to a native Date object if it is a valid dayjs object
  const formattedMinDate = minDate && dayjs.isDayjs(minDate) && minDate.isValid() ? minDate.toDate() : null;

  const changeFormat = (dates) => {
    // Convert the selected range to dayjs objects
    const formattedRange = dates.map(date => dayjs(date));
    
    // Now you can set this formattedRange to your state or pass it to the DatePicker component
    setDateRange(formattedRange);
    handleChange(formattedRange)
    setCalender(false)
  };
  
  console.log(calender)
  console.log("picker date range", dateRange)
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <DatePicker
       selectsRange
        value={value} // Pass the formatted value (array of Date objects)
        shouldCloseOnSelect={true}
        minDate={minDate} // Pass formatted minDate
        onChange={(dates) => changeFormat(dates)}
        selected={dateRange[0]}
        
       // Use the first date of the range
         startDate={formattedValue[0]} // Set the start date of the range
        endDate={formattedValue[1]} // Set the end date of the range
  
        locale="en-GB"
        monthsShown={2} // Show two months side by side
        inline // Keep the calendar open
      />
    </div>
  );
}
