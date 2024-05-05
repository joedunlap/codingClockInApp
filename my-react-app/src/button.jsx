import React from "react";

const ClockInButton = ({ onClockIn }) => {
  const handleClockIn = () => {
    // Perform any additional logic here before updating the time logs
    onClockIn();
  };
  
  return (
    <button onClick={handleClockIn}>Clock In</button>
  );
};

export default ClockInButton;
