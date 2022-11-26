import React, { useState, useEffect, useRef } from 'react'
import '../css/intro.css'
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap'
function Intro() {

	const navigate = useNavigate();
	const [active, setActive] = useState(1);
	const sectionRef = useRef(null);
	


	const handlePageChange = () => {
		setActive(0);
	}		

	useEffect(()=>{
		gsap.to(sectionRef.current, {
			duration: 1,
			autoAlpha: active,
			ease: 'none',
			delay: 1
		})
	}, [active]);

  return (
	<section ref={sectionRef}>
		<div id="name-area">		
			<h1>
				<div id="kele">
					<div className='letter'>K</div>
					<div className='letter'>e</div>
					<div className='letter'>l</div>
					<div className='letter'>e</div>
				</div>
				<div id="heart">
					<div className='letter'>H</div>
					<div className='letter'>e</div>
					<div className='letter'>a</div>
					<div className='letter'>r</div>
					<div className='letter'>t</div>
				</div>
			</h1>
			<div id="title-wrap">
				<h2 className='wrapped-title'>Full Stack Web3 Developer</h2>
				<h3 className='wrapped-title'>React UI Developer</h3>
				<h4 className='wrapped-title'>Solidity Contract Engineer</h4>
				<h5 className='wrapped-title'>Wordpress Developer/Manager</h5>
			</div>
		</div>		
		<img src="#" width="400px" height="400px" />
		<span className="next-area-button" onClick={()=>handlePageChange()}>About→</span>
	</section>
  );
}

export default Intro;
