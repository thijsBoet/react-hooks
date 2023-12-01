import { useState } from 'react';
import Joke from './Joke';
import News from './News';
function App() {
	const [userQuery, setUserQuery] = useState('');

	const SearchQuery = () =>
		window.open(`https://www.google.com/search?q=${userQuery}`, '_blank');

	const updateUserQuery = event => setUserQuery(event.target.value);

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			SearchQuery();
		}
	};

	return (
		<div className='App'>
			<h1>Hello Matthijs</h1>
			<div className='form'>
				<input
					type='text'
					value={userQuery}
					onChange={updateUserQuery}
					onKeyUp={handleKeyPress}
					placeholder='Search Google'
				/>
				<button onClick={SearchQuery}>Search</button>
			</div>
			<hr />
			<News />
			<hr />
			<Joke />
		</div>
	);
}

export default App;
