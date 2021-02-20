import React, {Component} from "react";
import {Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Register from "./Register";
import Cards from "./Cards";
import SuccessPath from "./SuccessPath";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route 
					exact path="/" 
					render={() => (
						<div>
							<Navbar />
							<Register />
							<Cards />
							<SuccessPath />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/login" 
					render={() => (
						<div>
							<Navbar />
							<LoginForm />
							<Footer />
						</div>
					)}	
				/>
			</Switch>
			
		)
	}
}

export default App;