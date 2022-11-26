import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './components/intro.js';
import About from './components/about.js';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Intro />
	</React.StrictMode>
);
