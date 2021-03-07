import React from 'react';
import './styles/main.css';


import{
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//Pages
import MainPage from "./pages/indexpage";
import NotFound from "./pages/404";
import ContactMe from "./pages/contactme"
import Projects from "./pages/projects"

class App extends React.Component {

  render() {
    return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
        
      <Route exact path="/404-Not-Found" component={NotFound}/>
      <Route exact path="/ContactMe" component={ContactMe}/>
      <Route exact path="/Projects" component={Projects} />
      <Redirect to="404-Not-Found"/>
      </Switch>
      </Router>
    );
  }
}

export default App;
