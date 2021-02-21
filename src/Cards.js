import React, {Component} from "react";
import "./Cards.css";

class Cards extends Component {
	render() {
		return (
			<div className="container">
				<div className="row cardsRow text-center">
					<div className="cardsCol col-xl-3 col-sm-6 mb-5">
						<div className="bg-white rounded shadow-sm">
							<img src="https://cdn3.vectorstock.com/i/1000x1000/92/57/live-icon-design-template-isolated-vector-27549257.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
							<h5 className="mb-2">Online Live Classes</h5>
							<p>Get your concepts clear directly through a dedicated coach</p>
						</div>
					</div>
					<div className="cardsCol col-xl-3 col-sm-6 mb-5">
						<div className="bg-white rounded shadow-sm">
							<img src="https://5.imimg.com/data5/RU/UJ/MY-17868609/school-gold-medal-500x500.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
							<h5 className="mb-2">IITian Teachers</h5>
							<p>Premium teachers who have passed one of the toughest exams themselves</p>
						</div>
					</div>
					<div className="cardsCol col-xl-3 col-sm-6 mb-5">
						<div className="bg-white rounded shadow-sm">
							<img src="https://5.imimg.com/data5/RU/UJ/MY-17868609/school-gold-medal-500x500.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
							<h5 className="mb-2">For Classes 9th to 12th</h5>
							<p>Changing the way of learning for 9th to 12th grade students with online 1 to 1 classes</p>
						</div>
					</div>
				</div>
				<p className="someLine">Electura lays a path of realizable and practical knowledge for young minds, by acting as a rendezvous between them and high academic achievers, through technology.</p>
			</div>
		)
	}
}

export default Cards;