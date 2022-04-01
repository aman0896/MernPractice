import "./App.css";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
