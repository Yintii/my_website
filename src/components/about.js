import React, { useState, useEffect, useRef } from 'react'
import '../css/about.css';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const About = () => {

	const sectionRef = useRef(null);

	const [active, setActive] = useState(0);
	
	useEffect(()=>{
		setTimeout(()=>{
			setActive(1);
		}, 500)
	}, [])

	useEffect(()=>{
		gsap.to(sectionRef.current, {
			duration: 1,
			autoAlpha: active,
			ease: 'none',
			delay: 0,
		})
	}, [active]);
	return(
		<section style={{opacity:0}} ref={sectionRef} id="about-section">
			<h1>About</h1>
			<ul>
				<li>Born (27 years old)</li>
			</ul>	
		</section>
	);
}

export default About;
