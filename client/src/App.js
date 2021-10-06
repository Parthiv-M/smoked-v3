import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './config/routes';
import AppRoute from "./AppRoutes";
import { SmokedProvider } from './context';
import Dummy from "./components/Dummy"
import "./styles/global.css"

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
            <Route exact path="/dummy" component={Dummy}></Route>
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
