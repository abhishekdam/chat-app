import "./App.css";
import { useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    // BEM naming convention (Block Element Modifier methedology)
    <div className="App">
      {!user ? (
        <h1>
          <Login></Login>
        </h1>
      ) : (
        <div className="app_body">
          <Router>
            {/* Sidebar */}
            <Sidebar></Sidebar>
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat></Chat>
              </Route>
              <Route path="/">
                <Chat></Chat>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
