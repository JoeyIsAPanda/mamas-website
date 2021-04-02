import "./App.css";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
