import './App.css';
import "./assets/css/style.css";
import Home from "./components/portfolio/Home";
import About from "./components/portfolio/About";
import Resume from "./components/portfolio/Resume";
import Skills from "./components/portfolio/Skills";
import Services from "./components/portfolio/Services";
import ContactUs from "./components/portfolio/ContactUs";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
       
        
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/skills" component={Skills}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={ContactUs}/>
      </Switch>
    </Router>
  </div>
  
  );
}

export default App;
