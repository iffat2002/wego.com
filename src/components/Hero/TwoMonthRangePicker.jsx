import React,{useState,  forwardRef, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB"; 
import dayjs from 'dayjs'; // Ensure dayjs is imported
import { DateRangeCalendar } from "@mui/x-date-pickers-pro";

// Register the locale
registerLocale("en-GB", enGB);


 const TwoMonthRangePicker = forwardRef(({ minDate, value, handleChange,  setCalender, calender, returns }, ref) => {
  // const [startDate, endDate] = value;
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
console.log("date range", dateRange)

  const formattedValue = value?.map((date) => {
  
    if (dayjs.isDayjs(date) && date.isValid()) {
      return date.toDate();
    }
    return null; 
  });
  useEffect(() => {
    if(dateRange[1] != null){
 setCalender(false)
    }
    if(returns === false && dateRange[0] != null){
      setCalender(false)
    }
  }, [dateRange])
  // Convert minDate to a native Date object if it is a valid dayjs object
  const formattedMinDate = minDate && dayjs.isDayjs(minDate) && minDate.isValid() ? minDate.toDate() : null;

  const changeFormat = (dates) => {
    const formattedRange = Array.isArray(dates) 
    ? dates.map(date => date && dayjs(date).isValid() ? dayjs(date) : null) 
    : [dayjs(dates).isValid() ? dayjs(dates) : null]; // Handle single-date case
  
    setDateRange(formattedRange);
    handleChange(formattedRange);
    setCalender(false);
    console.log("calemder inside func", calender)
  };
  

  console.log("picker date range", dateRange)
//  const [returns ,setreturns] = useState(true)
  return (
    <>
    {calender &&( 
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <DatePicker
       selectsRange
        value={value} // Pass the formatted value (array of Date objects)
        shouldCloseOnSelect={true}
        minDate={minDate} // Pass formatted minDate
        onChange={(dates) => changeFormat(dates) }
        selected={value[0]}
       // Use the first date of the range
         startDate={returns ? formattedValue[0] : null} // Set the start date of the range
        endDate={returns ? formattedValue[1] : null} // Set the end date of the range
        locale="en-GB"
        monthsShown={2} // Show two months side by side
        inline
      />
          {/* <DatePicker selected={dateRange[0]} onChange={(date) => changeFormat(date)} locale="en-GB"
        monthsShown={2} // Show two months side by side
        inline /> */}
    </div>)
  
    }
      </>
  );
});

export default TwoMonthRangePicker;