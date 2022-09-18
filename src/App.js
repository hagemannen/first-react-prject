import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import HoverInfo from "./Components/HoverInfo/HoverInfo";


function App() {
  return(
    <>
      <Router>
        <Navbar/>
        <HoverInfo/>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
