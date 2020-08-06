import React from 'react';
import './App.css';
import Header from './components/Header';

import { Theme } from './theme/theme';

import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<div className="App">
				<Header />
			</div>
		</ThemeProvider>
	);
}

export default App;
