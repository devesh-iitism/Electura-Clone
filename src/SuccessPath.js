import React, {Component} from "react";
import "./SuccessPath.css";

class SuccessPath extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<h1 data-aos="fade-up" className="pathSuccess">The Path to Success</h1>
					<div className="headHr">
						<hr />
					</div>
					<img data-aos="flip-right" className="pathImg" width="100%" height="773" src="https://electura.co/wp-content/uploads/2020/07/Presentation1-1-768x773.jpg" />
					<div data-aos="fade-up" className="row afterImage">
						<div className="col-lg-6 col-sm-12">
							<p className="afterImagePara">Register for a webinar with an IITian Expert</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSez3GmJ7YF3-DOnDMOt0YRl8K1C-exeZg0O7owZJjkOASFcBA/viewform" target="_blank" className="button button-custom">Register</a>
						</div>
					</div>
					<div data-aos="fade-up" className="reviewHeader">
						<h1>Happy Students, Happy Parents!</h1>
						<hr />
					</div>
				</div>
				<div className="container-custom">
					<div className="row review">
						<div data-aos="zoom-in" className="col-lg-3 textBox">
							<p className="para">There are a lot of services in the market for e-learning but I was looking for something that I can trust on. I contacted Electura for a doubt clearing session and I was amazed at the quality of the teachers they have. They put forward their best foot in order to help me. I am surely going to continue with Electura for my study journey.</p>
							<div className="review-footer">
								<img src="https://electura.co/wp-content/uploads/2020/08/indian-boy-teenager-young-boy-2982850-e1598879893185.jpg" alt="" width="65" height="65" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
								<p>Rohit (Student)</p>
								<i className="fas fa-quote-right"></i>
							</div>
						</div>
						<div data-aos="zoom-in" className="col-lg-3 textBox">
							<p className="para">I was worried about my child as he was never able to focus on his studies. I got to know about Electura & looking at the background of their teachers, I booked a counselling session for my kid. It was good to see such dedicated tutors, genuinely thinking about a child’s future. After the session, I am confident enough and ready to enroll my child with them.</p>
							<div className="review-footer">
								<img src="https://electura.co/wp-content/uploads/2020/07/220-SM832665-e1598879947986.jpg" alt="" width="65" height="65" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
								<p>Neha (Parent)</p>
								<i className="fas fa-quote-right"></i>
							</div>
						</div>
						<div data-aos="zoom-in" className="col-lg-3 textBox">
							<p className="para">I always strive for creating value in this world. Though having worked in the corporate as well as going through the MBA process after cracking IIT, I was looking for the satisfaction of shaping the future. Electura gave me a platform to give back to the society and help young minds of the world. Happy to be an Electurar.</p>
							<div className="review-footer">
								<img src="https://electura.co/wp-content/uploads/2020/07/220-SM860530-e1594939645307.jpg" alt="" width="65" height="65"  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />	
								<p>Harsh (Tutor)</p>
								<i className="fas fa-quote-right"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SuccessPath;