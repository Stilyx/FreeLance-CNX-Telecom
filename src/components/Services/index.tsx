import React from "react";

import "./servicesStyle.scss";
import servicesGirl from "../../assets/services/services-girl.png";

import ServicesContent from "../ServicesContent";

import phoneLogo from "../../assets/services/phone-logo.png";
import internetLogo from "../../assets/services/internet-logo.png";
import tvLogo from "../../assets/services/tv-logo.png";
import Animation from "../../styles/animation";

function ServicesComponent() {
	return (
		<div className='services-container'>
			<section className='service-girl-image'>
				<img src={servicesGirl} alt='service girl' />
			</section>
			<section className='services'>
				<h2 className='services-title' data-aos='fade-down'>
					Nossos serviços
				</h2>

				<div className='services-content' data-aos='fade-right' data-aos-duration='1000'>
					<ServicesContent
						logo={tvLogo}
						altLogo='Tv logo'
						paragraph=' Mais de 90 canais para você se divertir, aprender e relaxar. Para todos os gostos e idades.'
						title='CNX Play'
					/>
					<ServicesContent
						logo={internetLogo}
						altLogo='Internet logo'
						paragraph='Internet Fibra Óptica: Conexões ultravelozes e confiáveis que elevam sua experiência na web.'
						title='Internet Fibra Óptica'
					/>
					<ServicesContent
						logo={phoneLogo}
						altLogo='Phone logo'
						paragraph='Sua playlist perfeita e os maiores hits do momento a um clique de distância.'
						title='CNX Music by Deezer'
					/>
				</div>
			</section>
			<Animation />
		</div>
	);
}

export default ServicesComponent;
