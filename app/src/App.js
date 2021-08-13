import React from 'react';
import Navigation from './components/common/Navigation'
import Footer from './components/common/footer.js'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PageRenderer from './page-renderer'
import Resources from './pages/resources'
import Coordinators from './pages/coords'
import { HashRouter } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './fonts/Top-Secret.ttf';
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Schedule from './components/common/Schedule';
function App() {
  return (
    <HashRouter>
    <div className="App">
      <Navigation/>
      <Switch>
      <Route path="/resources" component={Resources}/>
      <Route path="/coordinators" component={Coordinators}/>
      <Route path="/schedule" component={Schedule}/>
        <Route path="/:page" component={PageRenderer} />
        
        <Route path="/" render={() => <Redirect to="/home" />}/>
        <Route component={() => 404} />
      </Switch>
      <Footer/>
    </div>

    </HashRouter>
  );
}

export default App;
