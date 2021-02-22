import React, {Component} from "react";
import "./SForm.css";

class SForm extends Component {
	render() {
		return (
			<div className="login-box">
			  <h2>Get Started with Electura!</h2>
			  <h3>Get free Counselling from an IITian</h3>
			  <hr />
			  <form>
				<div className="user-box">
				  <input type="text" name="" required="" />
				  <label>Your Name</label>
				</div>
				<div className="user-box">
				  <input type="text" name="" required="" />
				  <label>Phone Number</label>
				</div>
				<a href="/">
				  <span></span>
				  <span></span>
				  <span></span>
				  <span></span>
				  Send
				</a>
			  </form>
			</div>
		)
	}
} 

export default SForm;