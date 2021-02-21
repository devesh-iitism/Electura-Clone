import React, {Component} from "react";
import "./SuccessPath.css";

class SuccessPath extends Component {
	render() {
		return (
			<div className="container">
				<h1>The Path to Success</h1>
				<img width="100%" src="https://electura.co/wp-content/uploads/2020/07/Presentation1-1-768x773.jpg" />
				<div>
					<p>Register for a webinar with an IITian Expert</p>
					<button type="button" className="btn btn-primary">Register</button>
				</div>
				<h1>Happy Students, Happy Parents!</h1>
				<hr />
				<div className="row">
					<div className="col-lg-3 textBox">
						<p>There are a lot of services in the market for e-learning but I was looking for something that I can trust on. I contacted Electura for a doubt clearing session and I was amazed at the quality of the teachers they have. They put forward their best foot in order to help me. I am surely going to continue with Electura for my study journey.</p>
						<img src="https://cdn3.vectorstock.com/i/1000x1000/92/57/live-icon-design-template-isolated-vector-27549257.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
					</div>
					<div className="col-lg-3 textBox">
						<p>I was worried about my child as he was never able to focus on his studies. I got to know about Electura & looking at the background of their teachers, I booked a counselling session for my kid. It was good to see such dedicated tutors, genuinely thinking about a child’s future. After the session, I am confident enough and ready to enroll my child with them.</p>
						<img src="https://cdn3.vectorstock.com/i/1000x1000/92/57/live-icon-design-template-isolated-vector-27549257.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
					</div>
					<div className="col-lg-3 textBox">
						<p>I always strive for creating value in this world. Though having worked in the corporate as well as going through the MBA process after cracking IIT, I was looking for the satisfaction of shaping the future. Electura gave me a platform to give back to the society and help young minds of the world. Happy to be an Electurar.</p>
						<img src="https://cdn3.vectorstock.com/i/1000x1000/92/57/live-icon-design-template-isolated-vector-27549257.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
					</div>
				</div>
			</div>
		)
	}
}

export default SuccessPath;