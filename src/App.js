import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
