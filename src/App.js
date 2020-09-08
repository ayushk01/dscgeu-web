import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Importing Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Join from './pages/Join';

//Importing Components
import Header from './components/Header';
import Footer from './components/Footer';
import Domains from './pages/Domains';
import Why from './pages/Why';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/join" exact component={Join} />
          <Route path="/why" exact component={Why} />
          <Route path="/domains" exact component={Domains} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
