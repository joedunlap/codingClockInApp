import React from "react";

const ClockOutButton = ({ onClockOut }) => {
  const handleClockOut = () => {
    // Perform any additional logic here before triggering clock-out
    onClockOut();
  };
  
  return (
    <button onClick={handleClockOut}>Clock Out</button>
  );
};

export default ClockOutButton;
