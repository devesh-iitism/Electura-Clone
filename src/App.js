import React, {Component} from "react";
import Navbar from "./Navbar";
import Register from "./Register";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Register />
			</div>
		)
	}
}

export default App;