import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue) => {
	const [result, setResult] = useState(initialValue);

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setResult(data);
			});
	}, [url]);

	return result;
};
