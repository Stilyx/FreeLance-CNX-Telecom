import React, {useState} from "react";

import "./questionsStyle.scss";

import arrow from "../../assets/arrow.png";
import {questionObj} from "../../Messages/questions";

function QuestionsComponent() {
	const [selected, setSelected] = useState<null | number>(null);

	const toggle = (i: number) => {
		if (selected === i) {
			return setSelected(null);
		}
		setSelected(i);
	};

	return (
		<div className='questions-container'>
			<h2 data-aos='fade-right' data-aos-duration='1000'>
				Possui alguma dúvida?
			</h2>

			<section className='accordion-container'>
				<div className='accordion-items' data-aos='fade-down' data-aos-duration='1000'>
					{questionObj.map(({question, answer}, i) => (
						<div className='accordion-card' key={i}>
							<div className='question' onClick={() => toggle(i)}>
								<p>{question}</p>
								<img
									src={arrow}
									alt='arrow'
									className={`${selected === i ? "rotateAnimation" : ""}`}
								/>
							</div>

							<div className={`answer-container  ${selected === i ? "show" : " "}`}>{answer}</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default QuestionsComponent;
