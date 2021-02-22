import React, {Component} from "react";
import "./LoginForm.css";
import "./LoginFormUtil.css";

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
	}
	
	handleEmailChange(e) {
		this.setState({email: e.target.value});
	}
	
	handlePassChange(e) {
		this.setState({password: e.target.value});
	}
	
	handleSubmit(e) {
		e.preventDefault();
		var pass = localStorage.getItem(this.state.email);
		if(pass) {
			alert("User Already Exists, Please Login!");
		} else {
			localStorage.setItem(this.state.email, this.state.password);
		
			this.props.history.push({
					pathname: "/login"
				}
			)
			alert("Signup Successful, Please Login!");
		}
		
	}
	
	render() {
		return (
			<div>
				<div className="limiter">
					<div className="container-login100">
						<div className="wrap-login100">
							<form className="login100-form validate-form" onSubmit={this.handleSubmit}>
								<span className="login100-form-logo">
									<i className="zmdi zmdi-landscape"></i>
								</span>

								<span className="login100-form-title p-b-34 p-t-27">
									Sign in
								</span>

								<div className="wrap-input100 validate-input" data-validate = "Enter username">
									<input className="input100" type="text" name="username" placeholder="Username" onChange={this.handleEmailChange}/>
									<span className="focus-input100" data-placeholder="&#xf207;"></span>
								</div>

								<div className="wrap-input100 validate-input" data-validate="Enter password">
									<input className="input100" type="password" name="pass" placeholder="Password" onChange={this.handlePassChange}/>
									<span className="focus-input100" data-placeholder="&#xf191;"></span>
								</div>

								<div className="container-login100-form-btn">
									<button className="login100-form-btn">
										Signup
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>


				<div id="dropDownSelect1"></div>
			</div>
		)
	}
}

export default Signup;