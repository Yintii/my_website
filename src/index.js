import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Intro from './components/intro.js';
import About from './components/about.js';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Intro />,
	},
	{
		path: '/about',
		element: <About />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
