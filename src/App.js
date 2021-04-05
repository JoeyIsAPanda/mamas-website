import "./App.css";
import "./Layout/Layout.css";
import "./HorseBreeding/Horse.css";
import { Navbar } from "./Layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HorseBreeding from "./HorseBreeding/HorseBreeding";
import HorseContextProvider from "./Contexts/HorseContext";
import { HorseProfile } from "./HorseBreeding/HorseProfile";
import Landing from "./Landing";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="App">
      <HorseContextProvider>
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/Pferdezucht" component={HorseBreeding} />
          <Route exact path="/Pferde/:name" component={HorseProfile} />
          <Footer />
        </Router>
      </HorseContextProvider>
    </div>
  );
}

export default App;
