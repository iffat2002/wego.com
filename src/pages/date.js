import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB"; 


// Register the locale
registerLocale("en-GB", enGB);

export default function TwoMonthRangePicker() {
  const [dateRange, setDateRange] = useState([value]);
  const [startDate, endDate] = dateRange;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <DatePicker
      shouldCloseOnSelect={true}
       
        onChange={(update) => setDateRange(update)}
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        locale="en-GB" 
        selectsRange
        monthsShown={2} // Show two months side by side
       // Keep the calendar open
      />
    </div>
  );
}
