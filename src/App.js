import React, {Component} from "react";
import {Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Register from "./Register";
import Cards from "./Cards";
import SuccessPath from "./SuccessPath";
import Footer from "./Footer";

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
					render={() => <h1>Login</h1>}	
				/>
			</Switch>
			
		)
	}
}

export default App;