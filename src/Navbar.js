import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
