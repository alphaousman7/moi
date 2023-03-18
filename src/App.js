import { Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Video from "./components/Video";
import { Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App bg-green-600">

<NavBar/>
<Home/>
<About/>
<SocialLinks/>
<Portfolio/>
<Experience/>
<Contact/><Video/>

    </div>
  );
}

export default App;
