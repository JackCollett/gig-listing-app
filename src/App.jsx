import Hello from "./components/Hello";
import Gig from "./components/Gig";
import makersLogo from "./assets/Makers-Logo.png";
import logo from './assets/beatles.jpeg';
import logo2 from './assets/police.jpeg';
import "./App.css";
import "./Gig.css";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Gig name="beatles" image={logo} desc="band" location="o2" time="1pm" />
      <Gig name="The Police" image={logo2} desc="band" location="High Park" time="6pm" />
    </>
  );
};

export default App;
