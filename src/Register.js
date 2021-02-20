import React, {Component} from "react";
import "./Register.css";
import SForm from "./SForm";

class Register extends Component {
	render() {
		return (
			<div className="register">
				<div className="container">
					<div className="headline1">
						<h4>Your Learning Journey Matters to Us</h4>
					</div>
					<hr />
					<div className="row">
						<div id="headlineText" className="col-6">
							Future achievers study from IITians Online
							<br></br>
							<button type="button" className="btn btn-primary">Register For Free</button>
						</div>
						<div className="col-6">
							<SForm />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Register;