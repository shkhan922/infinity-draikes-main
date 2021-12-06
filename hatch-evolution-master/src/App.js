import './App.css';
import Page1 from './pages/home'
import Page2 from './pages/page2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>

        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/">
          <Page1 />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
