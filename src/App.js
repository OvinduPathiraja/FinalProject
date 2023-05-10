
import Location2 from './Location2';
import BloodCountChart from './BloodCountChart';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Location1 from './Location1';
import Donorpoints from './Donorpoints';
import Dashboards from './Dashboards';
import Navigation from './Navigation';



function App() {
  return (
    <Router>
      <Route exact path='/'>
      <Dashboards/>
      </Route>
      <Route path='/Location1'>
        <Location1/>
      </Route>
      <Route path='/Location2'>
        <Location2/>
      </Route>
      <Route path='/Donorpoints'>
        <Donorpoints/>
      </Route>
      <Route path='/Dashboards'>
        <Dashboards/>
      </Route>
      <Route path='/BloodCountChart'>
        <BloodCountChart/>
      </Route>
      <Route path='/Navigation'>
        <Navigation/>
      </Route>
      <div className='foot'>
      <footer></footer>
      </div>
    </Router>
  );
}

export default App;
