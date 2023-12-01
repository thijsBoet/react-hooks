import { useFetch } from './hooks';

const News = () => {
	const newsURL = 'https://news-proxy-230704.appspot.com/stories';
	const localNewsURL = 'http://localhost:3005/stories';

	const stories = useFetch(localNewsURL, {});

	console.log(stories);

	return (
		<article className='Stories'>
			<h3>News</h3>
			{stories.map(story => {
				const { id, by, time, title, url } = story;

				return (
					<div key={id}>
						<a href={url}>
							<h3>{title}</h3>
						</a>
						<p>
							Witten by {by} -{' '}
							<small>
								<em>
									{new Date(time * 1000).toLocaleDateString()}
								</em>
							</small>
						</p>
					</div>
				);
			})}
		</article>
	);
};

export default News;