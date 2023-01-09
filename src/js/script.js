import './gsap.min';

window.onload = function() {
	const headerBtn = document.querySelector('.header__btn');

	const link1 = document.querySelector('.link1');
	const link2 = document.querySelector('.link2');
	const link3 = document.querySelector('.link3');
	const link4 = document.querySelector('.link4');

	const logo = document.querySelector('.header__logo');

	const mh = document.querySelector('.m-hero');

	const svg = document.querySelector('.m-hero__svg');

	// header animations

	let btnAnimation = () => {
		const tlBtnGo = gsap.timeline({ defaults: { duration: .15 }, repeat: -1, repeatDelay: 3 });
		tlBtnGo.to(headerBtn, { rotate: 5 })
			.to(headerBtn, { rotate: -5 })
			.to(headerBtn, { rotate: 5 })
			.to(headerBtn, { rotate: 0 });
		return tlBtnGo;
	}

	let svgAnimation = () => {
		const tlSvg = gsap.timeline({ defaults: { duration: 5 }, repeat: -1, repeatDelay: 0 });
		tlSvg.from(svg, { y: -20, rotate: -10 })
			.to(svg, { y: -20, rotate: -10})
		return svgAnimation;
	}

	let logoAnimation = () => {
		const tlLogo = gsap.timeline({ defaults: { duration: .4 } });
		tlLogo
			.to(logo, { y: -20 })
			.to(logo, { y: 0, ease: "bounce.out" })
		return logoAnimation
	}

	const tl = gsap.timeline({ defaults: { duration: .5 }});
	tl.add(svgAnimation)
		.from(logo, { opacity: 0, x: -20 })
		.from(link1, { opacity: 0, x: -20 })
		.from(link2, { opacity: 0, x: -20 })
		.from(link3, { opacity: 0, x: -20 })
		.from(link4, { opacity: 0, x: -20 })
		.from(headerBtn, { opacity: 0, x: -20 })
		.add(btnAnimation)
		.add(logoAnimation)

	// parallax effect

	document.onmousemove = (e) => {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;

		mh.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";

		if(window.innerWidth <= 1440) {
			mh.style.transform = "translate(0)"
		}
	}
}