import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md">
				<Link to="/" className="navbar-brand">
					<img className="navbar-img" src="https://electura.co/wp-content/uploads/2020/07/cropped-logo-3-192x192.png" height="160px" width="49px" />
					<span >lectura</span>
				</Link>
				<button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse"></div>
				<div className="collapse navbar-collapse" id="navLinks">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink exact to="/" className="nav-link" activeClassName="navLinkActive" >Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about-us" className="nav-link" activeClassName="navLinkActive">About Us</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/tutors" className="nav-link" activeClassName="navLinkActive">Our Tutors</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/courses" className="nav-link" activeClassName="navLinkActive">Buy a Course</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/join" className="nav-link" activeClassName="navLinkActive">Join as Teacher</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/blogs" className="nav-link" activeClassName="navLinkActive">Blogs</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/contact" className="nav-link" activeClassName="navLinkActive">Contact</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/login" className="nav-link" activeClassName="navLinkActive">Login</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;