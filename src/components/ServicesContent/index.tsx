import React from "react";

import "./servicesContentStyle.scss";

interface Iservices {
	logo: string;
	altLogo: string;
	paragraph: string;
	title: string;
}

function ServicesContent({logo, altLogo, paragraph, title}: Iservices) {
	return (
		<div className='services-content-container'>
			<img src={logo} alt={altLogo} />
			<p>
				<span>{title}</span>
				{paragraph}
			</p>
		</div>
	);
}

export default ServicesContent;
