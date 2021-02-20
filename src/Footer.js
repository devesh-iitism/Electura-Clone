import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<div className="footer-body">
				<div className="container">
					<div className="row footer-row">
						<div className="col">
							<a href="#">Home</a>
						</div>
						<div className="col">
							<a href="#">Abut Us</a>
						</div>
						<div className="col">
							<a href="#">Join as Teacher</a>
						</div>
						<div className="col">
							<a href="#">Our Tutors</a>
						</div>
						<div className="col">
							<a href="#">Contact</a>
						</div>
						<div className="col">
							<a href="#">Disclaimer</a>
						</div>
						<div className="col">
							<a href="#">Blogs</a>
						</div>
						<div className="col">
							<a href="#">Buy a Course</a>
						</div>
						<div className="col">
							<a href="#">Privacy Policy</a>
						</div>
						<div className="col">
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