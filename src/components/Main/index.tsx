import React from "react";

import "./mainStyle.scss";
import IntrodctionComponent from "../Introduction";
import AboutComponent from "../About";
import ServicesComponent from "../Services";
import QuestionsComponent from "../Questions";

function Main() {
	return (
		<div className='main-container'>
			<IntrodctionComponent />
			<AboutComponent />
			<ServicesComponent />
			<QuestionsComponent />
		</div>
	);
}

export default Main;
