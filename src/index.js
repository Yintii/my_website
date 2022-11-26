import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom"; 
import './index.css';
import Intro from './components/intro.js';
import About from './components/about.js';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Intro />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/projects',
		element: <div>Projects go here</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
