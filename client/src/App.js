import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './config/routes';
import AppRoute from "./AppRoutes";
import { SmokedProvider } from './context';
import Dummy from "./components/Dummy"
import Credits from "./components/Credits"
import groundZero from './components/GroundZero';
import Side from "./components/Sidetrial"
import Signup from './components/SignUpForm';


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
            <Route exact path="/signups" component={Signup}></Route>
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
