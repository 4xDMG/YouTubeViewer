import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCChYM02xESrmf2skyzbiCfDaW7EEl4hiw';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


ReactDOM.render(<App />, document.querySelector('.container'));