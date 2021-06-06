import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // BEM naming convention (Block Element Modifier methedology)
    <div className="App">
      {/* Floating App body */}
      <div className="app_body">
        <Router>
          {/* Sidebar */}
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/rooms/:roomId">
              {/* Chat */}
              <Chat></Chat>
            </Route>
            <Route path="/">
              <Chat></Chat>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
