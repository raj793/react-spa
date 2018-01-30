import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';

export default class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>

                <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/Services" component={Services} />
                <Route path="/Contact" component={Contact} />
                </div>

            </div>
            </HashRouter>
        );
    }
}