import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<nav id="mainNavbar" className="navbar navbar-expand-md py-0">
				<a href="#" className="navbar-brand">Electura</a>
				<button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse"></div>
				<div className="collapse navbar-collapse" id="navLinks">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a href="#home" className="nav-link active">Home</a>
						</li>
						<li className="nav-item">
							<a href="#projects" className="nav-link">About Us</a>
						</li>
						<li className="nav-item">
							<a href="#skills" className="nav-link">Our Tutors</a>
						</li>
						<li className="nav-item">
							<a href="#education" className="nav-link">Buy a Course</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link">Join as Teacher</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link">Blogs</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link">Contact</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link">Login</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link">Phone No.</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;