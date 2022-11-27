import React, { useState, useEffect, useRef } from 'react'
import '../css/about.css';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const About = () => {

	const sectionRef = useRef(null);
	const navigate = useNavigate();
	const [active, setActive] = useState(0);
	
	const handlePageChange = () => {
		setActive(0);
		setTimeout(()=>{
			navigate('/projects');
		},1000)
	}

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
			<div id="wrapper">
				<h1 id="about">
					<div>A</div>
					<div>b</div>
					<div>o</div>
					<div>u</div>
					<div>t</div>
				</h1>
				<p>
					My name is Kele(pronounced 'Kelly') Heart and I am a fullstack web3
					developer as you may have already guessed. Below are a few key points on my projects
					and experience working as a developer. 
				</p>
				<ul>
					<li>Self taught developer over 7 years</li>
					<li>
						Received a Front End Honors Certification in Web and Mobile Development 
						from a bootcamp, NuCamp (Shout out to them)
					</li>
					<li>Experience managing websites for worldwide client base in enterprise environments</li>
					<li>Developed personal poety/painting NFT collection on Ethereum Mainnet using machine learning models</li>
					<li>Worked in web3 wallet company developing custom solutions and maintence to existing codebases (React Native and Node.js)</li> 
					<li>Developed and currently developing custom websites and bots for existing projects in the NFT and Web3 spaces currently</li>
					<li>Current day job is as a Web Developer for a marketing agency building custom solutions for client companies all across America and Mexico</li> 
				</ul>
			</div>
		<span className="next-area-button" onClick={()=>handlePageChange()}>Projects→</span>
		</section>
	);
}

export default About;
