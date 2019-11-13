import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "../App";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";


const Header = () => {

    return (
        <Router>
            <div>
                <nav>
                    <h1>Ósk Björns</h1>
                    <h2>Jr. Web Developer</h2>
                    <div className="nav-route">
                        <NavLink to='/' exact className="nav-title" activeClassName='active'>Portfolio</NavLink>
                        <NavLink to='/about' className="nav-title" activeClassName='active'>About Me</NavLink>
                    </div>
                </nav>
                <Route path='/' exact component={Portfolio} />
                <Route path='/about' component={About} />
            </div>
        </Router>
    );
}

export default Header;