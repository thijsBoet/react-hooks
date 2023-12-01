import { useFetch } from './hooks';

function Joke() {
	const jokeURL = 'https://official-joke-api.appspot.com/jokes/random';
	// const localJokeURL = 'http://localhost:3005/jokes/random';

	const { setup, punchline } = useFetch(jokeURL, {});

	return (
		<div>
			<h3>Joke of the session</h3>
			<p>{setup}</p>
			<p>
				<em>{punchline}</em>
			</p>
		</div>
	);
}

export default Joke;
