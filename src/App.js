import "./App.css";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import HorseContextProvider, { HorseContext } from "./HorseContext";
import { HorseProfile } from "./HorseProfile";

function App() {
  return (
    <div className="App">
      <HorseContextProvider>
        <Router>
          <Navbar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/pferde/:name" component={HorseProfile} />
        </Router>
      </HorseContextProvider>
    </div>
  );
}

export default App;
