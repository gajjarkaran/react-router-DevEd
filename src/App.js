import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from './ItemDetail'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* Switch: as soon as it finds a specific route, it is gonna render it out */}
        <Switch>  
          <Route path = "/" exact component = {Home} />
          <Route path = "/about" component = {About} />
          <Route path = "/shop" exact component = {Shop} />
          <Route path = "/shop/:id" components = {ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
