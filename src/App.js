import React, {Component} from "react";
import Navbar from "./Navbar";
import Register from "./Register";
import Cards from "./Cards";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Register />
				<Cards />
			</div>
		)
	}
}

export default App;