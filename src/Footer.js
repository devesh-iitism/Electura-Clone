import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<div className="footer-body">
				<div className="arrowIcon">
					<a className="scroll" href="#mainNavbar"><i className="fas fa-arrow-circle-up"></i></a>
				</div>
				<div className="container">
					<div className="row footer-row">
						<div className="footerLinks col text-nowrap">
							<Link to="/">Home</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/about-us">About Us</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/join">Join as Teacher</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/tutors">Our Tutors</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/contact">Contact</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/disclaimer">Disclaimer</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/blogs">Blogs</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/courses">Buy a Course</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/policy">Privacy Policy</Link>
						</div>
						<div className="footerLinks col text-nowrap">
							<Link to="/newHome">Home New</Link>
						</div>
					</div>
					<div className="footer-copy">
						Copyright © 2021 Electura | Powered by BrandCobblers Services Pvt. Ltd.
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;