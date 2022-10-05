import React from "react";

//import your own components
import MyNavBar from "./navbar.jsx";
import MyJumboTron from "./jumbotron.jsx";
import MyFooter from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<MyNavBar />
		<div className="container">
			<div className="row">
				<MyJumboTron />
			</div>
		
			<br></br>

			<div className="row justify-content-around" id="cards">
				<div className="col-2">1</div>
				<div className="col-2">2</div>
				<div className="col-2">3</div>
				<div className="col-2">4</div>		
			</div>
		</div>
		<MyFooter/>	
		</>
	);
};

export default Home;
