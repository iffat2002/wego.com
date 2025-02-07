import React,{useState,  forwardRef, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB"; 
import dayjs from 'dayjs'; // Ensure dayjs is imported
import { DateRangeCalendar } from "@mui/x-date-pickers-pro";

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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Detect screen width and set months to show
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Show 12 months on mobile
      } 
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    {calender &&( 
    <div style={{ display: "flex",overflowX:"hidden", justifyContent: "center", marginTop: "20px" }}>
      <DatePicker
       selectsRange
       formatWeekDay={nameOfDay => isMobile && nameOfDay.substr(0,3)}
        value={value} // Pass the formatted value (array of Date objects)
        shouldCloseOnSelect={true}
        minDate={minDate} // Pass formatted minDate
        onChange={(dates) => changeFormat(dates) }
        selected={value[0]}
       // Use the first date of the range
         startDate={returns ? formattedValue[0] : null} // Set the start date of the range
        endDate={returns ? formattedValue[1] : null} // Set the end date of the range
        locale="en-GB"
        monthsShown={isMobile ? 12 : 2} // Show two months side by side
        inline
      />
    </div>)
  
    }
      </>
  );
});

export default TwoMonthRangePicker;