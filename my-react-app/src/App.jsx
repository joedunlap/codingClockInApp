import Header from './header.jsx'
import Footer from './footer.jsx';
import TimeTable from './timetable.jsx';
import { useState } from 'react';
import ClockInButton from './button.jsx';
import ClockOutButton from './clockoutbutton.jsx';
import CatClockImg from './catclock.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [timeLogs, setTimeLogs] = useState([
    { date: '2024-05-01', hours: 4, activity: 'Coding feature X' },
    { date: '2024-05-02', hours: 3, activity: 'Debugging' },
    // Add more time logs as needed
  ]);

  const handleClockIn = () => {
    const currentTime = new Date().toLocaleString();
    const newTimeLog = { date: currentTime, hours: 0, activity: 'Clock In' };
    setTimeLogs([...timeLogs, newTimeLog]);
  };

  const handleClockOut = () => {
    const currentTime = new Date().toLocaleString();
    const lastClockInIndex = timeLogs.findIndex(log => log.activity === 'Clock In');
    if (lastClockInIndex !== -1) {
      const updatedTimeLogs = [...timeLogs];
      updatedTimeLogs[lastClockInIndex] = { ...timeLogs[lastClockInIndex], date: currentTime, activity: 'Clock Out' };
      setTimeLogs(updatedTimeLogs);
    }
  };

    return(
      //fragment created for multiple components
      <>
      <CatClockImg/>
      <Header/>
      <div className="clock-buttons">
      <ClockInButton onClockIn={handleClockIn}/>
      <ClockOutButton onClockOut={handleClockOut}/>
      </div>
      <TimeTable timeLogs={timeLogs}/>
      <Footer/>
      </>
    );

    
     
}

export default App
