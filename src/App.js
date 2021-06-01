import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // BEM naming convention (Block Element Modifier methedology)
    <div className="App">
      {/* Floating App body */}
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar></Sidebar>
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
