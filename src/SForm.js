import React, {Component} from "react";
import "./SForm.css";

class SForm extends Component {
	render() {
		return (
			<div className="form-container">
				<h2>Get Started with Electura!</h2>
				<h3>Get free Counselling from an IITian</h3>
				<hr />
				<form>
					<div className="container">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Your Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Phone Number</label>
							<input type="text" className="form-control" />
						</div>
						<div className="formButton">
							<button type="button" className="btn btn-primary">Send</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
} 

export default SForm;