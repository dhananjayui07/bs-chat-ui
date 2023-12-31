import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // You might need to adjust this import based on your file structure
import './assets/scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Router basename="/">
			<App />
		</Router>
	</React.StrictMode>
);
