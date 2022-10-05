import React from "react";

//import your own components
import MyNavBar from "./navbar.jsx";
import MyJumboTron from "./jumbotron.jsx";
import MyFooter from "./footer.jsx";
import MyCard from "./card.jsx";

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
				<MyCard/>
				<MyCard/>
				<MyCard/>
				<MyCard/>	
			</div>
		</div>
		<MyFooter/>	
		</>
	);
};

export default Home;
