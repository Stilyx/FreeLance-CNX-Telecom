import React from "react";

import "./aboutStyle.scss";

import earningIcon from "../../assets/earning-icon.png";

const earningsObj = [
	{logo: earningIcon, title: "Lorem ipsum", paragraph: "Lorem ipsum dolor sit amet"},
	{logo: earningIcon, title: "Lorem ipsum", paragraph: "Lorem ipsum dolor sit amet"},
	{logo: earningIcon, title: "Lorem ipsum", paragraph: "Lorem ipsum dolor sit amet"},
	{logo: earningIcon, title: "Lorem ipsum", paragraph: "Lorem ipsum dolor sit amet"},
	{logo: earningIcon, title: "Lorem ipsum", paragraph: "Lorem ipsum dolor sit amet"},
	{logo: earningIcon, title: "Lorem ipsum", paragraph: "Lorem ipsum dolor sit amet"}
];

function AboutComponent() {
	return (
		<div className='about-container'>
			<h2 className='about-title' data-aos='zoom-in-up'>
				Sobre nós!
			</h2>

			<section className='earnings-container' data-aos='zoom-in-up' data-aos-duration='1000'>
				{earningsObj.map(({logo, title, paragraph}, i) => (
					<div className='earnings' key={i}>
						<img src={logo} alt='eraning-logo' className='earning-icon' />
						<h3 className='earning-title'>{title}</h3>
						<p className='earning-paragraph'>{paragraph}</p>
					</div>
				))}
			</section>
		</div>
	);
}

export default AboutComponent;
