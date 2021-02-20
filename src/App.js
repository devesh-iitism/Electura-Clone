import React, {Component} from "react";
import Navbar from "./Navbar";
import Register from "./Register";
import Cards from "./Cards";
import SuccessPath from "./SuccessPath";
import Footer from "./Footer";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Register />
				<Cards />
				<SuccessPath />
				<Footer />
			</div>
		)
	}
}

export default App;