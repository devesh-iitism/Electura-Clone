import React, {Component} from "react";
import {Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Register from "./Register";
import Cards from "./Cards";
import SuccessPath from "./SuccessPath";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import UnderC from "./UnderC";

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
				<Route 
					exact path="/about-us" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/tutors" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/courses" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/join" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/blogs" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/contact" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route render={() => <h1>Error 404</h1>} />
			</Switch>
			
		)
	}
}

export default App;