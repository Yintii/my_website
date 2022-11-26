import React from 'react'
import '../intro.css'

function Intro() {
  return (
	<>
	<div id="intro">
		<div id="name-area">		
			<h1>
				<div id="kele">
					<div class='letter'>K</div>
					<div class='letter'>e</div>
					<div class='letter'>l</div>
					<div class='letter'>e</div>
				</div>
				<div id="heart">
					<div class='letter'>H</div>
					<div class='letter'>e</div>
					<div class='letter'>a</div>
					<div class='letter'>r</div>
					<div class='letter'>t</div>
				</div>
			</h1>
			<div id="title-wrap">
				<h2 class='wrapped-title'>Full Stack Web3 Developer</h2>
				<h3 class='wrapped-title'>React UI Developer</h3>
				<h4 class='wrapped-title'>Solidity Contract Engineer</h4>
				<h5 class='wrapped-title'>Wordpress Developer/Manager</h5>
			</div>
		</div>		
		<img src="#" width="400px" height="400px" />
	
		<div class="next-area-button">
			<span>About→</span>
		</div>
	</div>
	</>
  );
}

export default Intro;
