import React, {Component} from "react";
import "./LoginForm.css";
import "./LoginFormUtil.css";


localStorage.setItem("Devesh", "Devesh");

class LoginForm extends Component {
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
		console.log(pass);
		if(!pass) {
			alert("User Not Found, Please Signup!");
		} else {
			if(pass==this.state.password) {
				localStorage.setItem("isLogin", JSON.stringify({yes: 1, name: this.state.email}));
				this.props.history.push({
						pathname: "/"
					}
				)
				alert("Login Successful");
			} else {
				alert("Wrong Password");
			}
		}
		
		// alert("Login Successful");
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
									Log in
								</span>

								<div className="wrap-input100 validate-input" data-validate = "Enter username">
									<input className="input100" type="text" name="username" placeholder="Username" onChange={this.handleEmailChange}/>
									<span className="focus-input100" data-placeholder="&#xf207;"></span>
								</div>

								<div className="wrap-input100 validate-input" data-validate="Enter password">
									<input className="input100" type="password" name="pass" placeholder="Password" onChange={this.handlePassChange}/>
									<span className="focus-input100" data-placeholder="&#xf191;"></span>
								</div>

								<div className="contact100-form-checkbox">
									<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
									<label className="label-checkbox100" htmlFor="ckb1">
										Remember me
									</label>
								</div>

								<div className="container-login100-form-btn">
									<button className="login100-form-btn">
										Login
									</button>
								</div>

								<div className="text-center p-t-90 row">
									<div className="col-6">
										<a className="txt1" href="#">
											Forgot Password?
										</a>
									</div>
									<div className="col-6">
										<a className="txt1" href="/signup">
											Signup
										</a>
									</div>
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

export default LoginForm;