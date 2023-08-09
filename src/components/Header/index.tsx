import React, {useState, useEffect} from "react";

import "./headerStyle.scss";

import logo from "../../assets/logo.png";

function Header() {
	const [pageView, setpageView] = useState(false);
	const [navScroll, setNavScroll] = useState("");
	const [menuActive, setMenuActive] = useState(false);
	const fixHeader = () => {
		window.scrollY >= 80 ? setpageView(true) : setpageView(false);
		console.log(window.scrollY);
		if (window.scrollY <= 400) return setNavScroll("home");
		if (window.scrollY <= 800) return setNavScroll("about");
		if (window.scrollY <= 1200) return setNavScroll("services");
		if (window.scrollY < 1800) return setNavScroll("questions");
		if (window.scrollY >= 1800) return setNavScroll("contact");
	};

	window.addEventListener("scroll", fixHeader);

	const changeView = (e: React.MouseEvent<HTMLInputElement>) => {
		switch (e.currentTarget.id) {
			case "home":
				window.scrollTo({top: 0, behavior: "smooth"});
				break;
			case "about":
				window.scrollTo({top: 450, behavior: "smooth"});
				break;
			case "services":
				window.scrollTo({top: 970, behavior: "smooth"});
				break;
			case "questions":
				window.scrollTo({top: 1610, behavior: "smooth"});
				break;
			case "contact":
				window.scrollTo({top: 3200, behavior: "smooth"});
				break;
		}
	};

	useEffect(() => {
		fixHeader();
	}, []);

	return (
		<header className={`header-container ${pageView ? "fixed-bar" : ""}`}>
			<div className='logo'>
				<img src={logo} alt='CNX Telecom Logo' />
			</div>

			<nav className={`navigation-container ${menuActive ? "active" : ""}`}>
				<input
					type='radio'
					name='navigation-options'
					id='home'
					className='nav-radio'
					onClick={e => changeView(e)}
					checked={navScroll === "home" ? true : false}
				/>
				<label htmlFor='home'>Home</label>
				<input
					type='radio'
					name='navigation-options'
					id='about'
					className='nav-radio'
					onClick={e => changeView(e)}
					checked={navScroll === "about" ? true : false}
				/>
				<label htmlFor='about'>Sobre</label>
				<input
					type='radio'
					name='navigation-options'
					id='services'
					className='nav-radio'
					onClick={e => changeView(e)}
					checked={navScroll === "services" ? true : false}
				/>
				<label htmlFor='services'>Serviços</label>
				<input
					type='radio'
					name='navigation-options'
					id='questions'
					className='nav-radio'
					onClick={e => changeView(e)}
					checked={navScroll === "questions" ? true : false}
				/>
				<label htmlFor='questions'>Duvidas</label>
				<input
					type='radio'
					name='navigation-options'
					id='contact'
					className='nav-radio'
					onClick={e => changeView(e)}
					checked={navScroll === "contact" ? true : false}
				/>
				<label htmlFor='contact'>Fale conosco</label>
				<button className='menu-button'>
					<a href='https://assine.cnx.net.br/divulgador/login' target='_blank' rel='noreferrer'>
						Entrar
					</a>
				</button>
			</nav>

			<div
				className={`menu ${menuActive ? "active" : ""}`}
				onClick={() => setMenuActive(!menuActive)}
			>
				<span className='hamburguer-bar'></span>
				<span className='hamburguer-bar'></span>
				<span className='hamburguer-bar'></span>
			</div>

			<button className='enter-button'>
				<a href='https://assine.cnx.net.br/divulgador/login' target='_blank' rel='noreferrer'>
					Entrar
				</a>
			</button>
		</header>
	);
}

export default Header;
