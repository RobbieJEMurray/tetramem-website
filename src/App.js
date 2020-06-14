import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Blog from './components/Blog';
import Careers from './components/Careers';

function App() {
    return (
        <Router>
            <div className="bg">
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" exact component={About}/>
                    <Route path="/Products" component={Products}/>
                    <Route path="/Blog" component={Blog}/>
                    <Route path="/Careers" component={Careers}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;