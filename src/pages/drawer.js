import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectingStart, setSelectingStart] = useState(true);

  const handleDateChange = (dates) => {
    const [start, end] = dates;

    if (selectingStart) {
      setStartDate(start);
      if (!endDate) setSelectingStart(false); // Move to return date if it's empty
    } else {
      setEndDate(end);
      setSelectingStart(true); // Reset after full selection
    }
  };

  return (
    <div className="date-picker-container">
      {/* Header with buttons to manually choose selection mode */}
      <div className="header">
        <button
          className={`date-label ${selectingStart ? "highlight" : ""}`}
          onClick={() => setSelectingStart(true)}
        >
          DEPARTURE DATE
        </button>
        <button
          className={`date-label ${!selectingStart ? "highlight" : ""}`}
          onClick={() => setSelectingStart(false)}
        >
          RETURN DATE
        </button>
      </div>

      {/* Date Picker */}
      <DatePicker
        selected={selectingStart ? startDate : endDate}
        onChange={(date) => {
          if (selectingStart) {
            setStartDate(date);
            setSelectingStart(false);
          } else {
            setEndDate(date);
            setSelectingStart(true);
          }
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange={false} // Disable built-in range selection to handle it manually
        inline
      />

      {/* Styles */}
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .date-label {
          padding: 8px 12px;
          border: none;
          background: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .highlight {
          background: #4caf50;
          color: white;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default DateRangePicker;
