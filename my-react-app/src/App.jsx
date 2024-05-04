import Header from './header.jsx'
import Footer from './footer.jsx';
import TimeTable from './timetable.jsx';
import ClockInButton from './button.jsx';
import ClockOutButton from './clockoutbutton.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return(
      //fragment created for multiple components
      <>
      <Header/>
      <div className="clock-buttons">
      <ClockInButton/>
      <ClockOutButton/>
      </div>
      <TimeTable/>
      <Footer/>
      </>
    );

    
     
}

export default App
