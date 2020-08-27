import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Importing Pages
import Home from './pages/Home';
import Register from './pages/Register';

//Importing Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
