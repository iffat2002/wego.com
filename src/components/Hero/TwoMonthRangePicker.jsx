import React,{useState,  forwardRef, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB"; 
import dayjs from 'dayjs'; // Ensure dayjs is imported

// Register the locale
registerLocale("en-GB", enGB);


 const TwoMonthRangePicker = forwardRef(({ minDate, value, handleChange,  setCalender, calender }, ref) => {
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
  }, [dateRange[1]])
  // Convert minDate to a native Date object if it is a valid dayjs object
  const formattedMinDate = minDate && dayjs.isDayjs(minDate) && minDate.isValid() ? minDate.toDate() : null;

  const changeFormat = (dates) => {
    const formattedRange = dates.map(date => 
      date && dayjs(date).isValid() ? dayjs(date) : null
    );
    setDateRange(formattedRange);
    handleChange(formattedRange);
    setCalender(false);
    console.log("calemder inside func", calender)
  };
  

  console.log("picker date range", dateRange)
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
        selected={dateRange[0]}
       // Use the first date of the range
         startDate={formattedValue[0]} // Set the start date of the range
        endDate={formattedValue[1]} // Set the end date of the range
        locale="en-GB"
        monthsShown={2} // Show two months side by side
        inline
      />
    </div>)
  
    }
      </>
  );
});

export default TwoMonthRangePicker;