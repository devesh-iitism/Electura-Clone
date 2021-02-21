import React, {Component} from "react";
import {Link} from "react-router-dom";
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
							<Link to="/" className="nav-link">Home</Link>
							
						</li>
						<li className="nav-item">
							<Link to="/about-us" className="nav-link">About Us</Link>
						</li>
						<li className="nav-item">
							<Link to="/tutors" className="nav-link">Our Tutors</Link>
						</li>
						<li className="nav-item">
							<Link to="/courses" className="nav-link">Buy a Course</Link>
						</li>
						<li className="nav-item">
							<Link to="/join" className="nav-link">Join as Teacher</Link>
						</li>
						<li className="nav-item">
							<Link to="/blogs" className="nav-link">Blogs</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">Contact</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link">Login</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;