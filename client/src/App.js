import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './config/routes';
import AppRoute from "./AppRoutes";
import { SmokedProvider } from './context';
import Dummy from "./components/Dummy"
import "./styles/global.css"
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import GameArea from './components/GameArea';
import GroundZero from './components/GroundZero';

var __html = require("./pages/entry.html");
var template = { __html: __html };

function App() {
  return (
    <div className="App">
      <SmokedProvider>
        <Router>
          <Switch>
            <Route exact path="/game/firstone">
              <span dangerouslySetInnerHTML={template}></span>
            </Route>
            <Route exact path="/gamepage" component={GamePage}></Route>
            {
              routes.map((route) => (
                <AppRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                />
              ))
            }
          </Switch>
        </Router>
      </SmokedProvider>
    </div>
  );
}

export default App;
