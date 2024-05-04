import React, { useState } from 'react';
import axios from 'axios';

const ClockInButton = () => {
  const [userID, setUserID] = useState('');
  const [description, setDescription] = useState('');

  const handleClockIn = async () => {
    try { console.log('button clicked')
      // Make POST request to backend API
      const response = await axios.post('/api/v1/logs', {
        description,
        userID,
      });

      // Display success message or perform any additional actions
      console.log('Clock In successful!', response.data);

      // Reset input fields
      setUserID('');
      setDescription('');
    } catch (error) {
      // Handle errors
      console.error('Clock In failed:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="User ID"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleClockIn}>Clock In</button>
    </div>
  );
};

export default ClockInButton;
