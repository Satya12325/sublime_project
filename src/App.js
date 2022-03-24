import {useState} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Signup from "./components/Signup"
import {Routing} from "./Router/Allpagerout"
import Login from "./components/Login"
function App() {

  return (
    <div className="App">
     <Navbar/>
    {/* <Signup/> */}
    <Routing/>
    {/* <Login/> */}
    </div>
  );
}

export default App;
