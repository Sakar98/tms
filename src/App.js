import './App.css';
import {
  // Switch, Route, withRouter, Redirect,
// } from 'react-router-dom';
  Switch, Route, Redirect,BrowserRouter,
} from 'react-router-dom';
// import {routes} from './component/utils/routes'
import HomePage from './component/homepage/'
import Navbar from './custom-component/navbar'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      {/* <Sidebar /> */}
      <BrowserRouter>
      <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => {return <HomePage />; }}
                    />
                    <Route
                      exact
                      path="/terminalList"
                      render={() => {return <Redirect to="/" />; }}
                    />
            </Switch>
  </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
