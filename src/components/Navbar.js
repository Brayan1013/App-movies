import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Details from './Details';
import Home from './Home';
import Tv from './Tv';
import DetailsTv from './DetailsTv';
import Search from './Search';
import About from './About';

export const Navbar = () => {
    return (
        <Fragment>
            <Router>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">APP MOVIES</Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" to="/tv" className="nav-link">Tv shows</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" to="/search" className="nav-link">Search</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" to="/about" className="nav-link">About</NavLink>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    <Switch>
                        <Route path="/details/:id">
                            <Details />
                        </Route>
                        <Route path="/details-tv/:id">
                            <DetailsTv />
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route path="/tv">
                            <Tv />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Fragment>
    )
}

export default Navbar;
