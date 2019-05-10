import React, { Component } from 'react';
import {
	Route,
	BrowserRouter
} from "react-router-dom";
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';

import { Main } from './components/Pages';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
				<div id="app">
					<Navigation menuItems={[
						{
							id: 'main', url: '/', name: 'Main', pageNav: [
								{ id: 'about', name: 'About' },
								{ id: 'skills', name: 'Skills' },
								{ id: 'code', name: 'Code' },
								{ id: 'social', name: 'Social' },
								{ id: 'contact', name: 'Contact' }
							]
						}
					]} />
					<div className="content" style={{ height: '100%' }}>
						<Route exact path="/" component={Main} />
					</div>
				</div>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default App;
