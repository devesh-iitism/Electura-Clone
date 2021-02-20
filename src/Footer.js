import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<div className="footer-body">
				<div className="container">
					<div className="row footer-row">
						<div className="col text-nowrap">
							<a href="#">Home</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">About Us</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">Join as Teacher</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">Our Tutors</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">Contact</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">Disclaimer</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">Blogs</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">Buy a Course</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">Privacy Policy</a>
						</div>
						<div className="col text-nowrap">
							<a href="#">Home New</a>
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