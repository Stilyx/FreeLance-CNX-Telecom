import React from "react";

import girl from "../../assets/introduction/introduction-girl.png";

import "./introductionStyle.scss";
import Animation from "../../styles/animation";

function IntrodctionComponent() {
	return (
		<div className='introduction'>
			<section className='introduction-text' data-aos='fade-right' data-aos-duration='1000'>
				<div className='introduction-title'>
					<h1>Você pode ser um</h1>
					<span>Parceiro CNX!</span>
				</div>

				<div className='introduction-paragraph'>
					<p>Cadastre-se e lucre conosco!</p>
					<span>Ganhe por cada plano vendido e faça parte do sucesso CNX.</span>
				</div>
			</section>
			<img src={girl} alt='introduction girl' data-aos='fade-left' data-aos-duration='2000' />
			<Animation />
		</div>
	);
}

export default IntrodctionComponent;
