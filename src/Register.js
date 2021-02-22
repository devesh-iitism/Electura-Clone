import React, {Component} from "react";
import "./Register.css";

import SForm from "./SForm";

class Register extends Component {
	render() {
		return (
			<div data-aos="fade-up" className="register">
				<div className="container">
					<div className="headline1">
						<h4>Your Learning Journey Matters To Us</h4>
					</div>
					<hr />
					<div className="row">
						<div id="headlineText" className="col-lg-6 col-sm-12">
							Future Achievers Study From IITians Online
							<br></br>
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSez3GmJ7YF3-DOnDMOt0YRl8K1C-exeZg0O7owZJjkOASFcBA/viewform" target="_blank" className="button">Register For Free  <i className="fas fa-arrow-right"></i></a>
						</div>
						<div className="col-lg-6 col-sm-12">
							<SForm />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Register;