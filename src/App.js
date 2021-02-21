import React, {Component} from "react";
import {Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Register from "./Register";
import Cards from "./Cards";
import SuccessPath from "./SuccessPath";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import UnderC from "./UnderC";

import { animateSwitch } from "./animateSwitch";
import { SlideOut } from "./SlideOut";

const SwitchWithSlide = animateSwitch(Switch, SlideOut);

class App extends Component {
	render() {
		return (
			<SwitchWithSlide>
				<Route 
					exact path="/" 
					render={(routeProps) => (
						<div>
							<Navbar {...routeProps}/>
							<Register />
							<Cards />
							<SuccessPath />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/login" 
					render={(routeProps) => (
						<div>
							<Navbar />
							<LoginForm {...routeProps}/>
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
				<Route 
					exact path="/disclaimer" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/newHome" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route 
					exact path="/policy" 
					render={() => (
						<div>
							<Navbar />
							<UnderC />
							<Footer />
						</div>
					)}	
				/>
				<Route render={() => <h1>Error 404</h1>} />
			</SwitchWithSlide>
			
		)
	}
}

export default App;