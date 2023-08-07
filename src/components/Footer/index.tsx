import React from "react";

import "./footerStyles.scss";

import instagramLogo from "../../assets/mediaIcons/instagram-icon.png";
import facebookLogo from "../../assets/mediaIcons/facebook-icon.png";
import whatsappLogo from "../../assets/mediaIcons/whatsapp-icon.png";

function Footer() {
	return (
		<footer className='footer-container'>
			<section className='footer-item location'>
				<h3 className='item-title'>Onde Estamos</h3>
				<p>R. Divinópolis, 716 - St. Afonso Pena, Itumbiara - GO, 75513-130</p>
			</section>
			<section className='footer-item contact'>
				<h3 className='item-title'>Fale Conosco</h3>
				<h3 className='item-title number-call'>64 3404-8181</h3>
			</section>
			<section className='footer-item social-medias'>
				<h3 className='item-title'>Siga-nos!</h3>
				<div className='social-medias-icons'>
					<a href='https://www.instagram.com/cnxtelecom/' target='_blank' rel='noreferrer'>
						<img src={instagramLogo} alt='instagram logo' />
					</a>
					<a href='https://www.facebook.com/cnxtelecom' target='_blank' rel='noreferrer'>
						<img src={facebookLogo} alt='facebook logo' />
					</a>
					<a
						href='https://api.whatsapp.com/send?phone=556434048181'
						target='_blank'
						rel='noreferrer'
					>
						<img src={whatsappLogo} alt='whatsapp logo' />
					</a>
				</div>
			</section>

			<p className='copy-text'>
				© 2023 <span> CNX Telecom </span>
			</p>
		</footer>
	);
}

export default Footer;
