import './App.css';
import Posts from './Posts';
import Questions from './Questions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddExperienceForm from './AddExperienceForm';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path='/addexperience'><AddExperienceForm/></Route>
      <Route path ='/'>
      <div className="interviewlist">
        <Link to = '/addexperience'><div className="addexperience"><button className="btn">Share your interview experience with community</button></div></Link>
        <Posts />
        <Posts/>
        <Posts/>
      </div>
      <Questions/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
