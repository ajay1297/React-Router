import React from 'react';
import './App.css';
import Shop from './Shop';
import About from './About';
import Navbar from './Navbar';
import ItemDetail from './itemDetail'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component = {Home}></Route>
          <Route path="/Shop" exact component = {Shop} ></Route>
          <Route path="/About" component = {About} ></Route>
          <Route path="/Shop/:id" component = {ItemDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home Page </h1>
  </div>
);

export default App;
