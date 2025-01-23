import React, {useState, useEffect} from "react";


function FetchComponent() {

    const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://api.themoviedb.org/3/movie/550?api_key=272e0a4f8aed64cdcbc79856c6259d84"
				);
				if (!response.ok) {
					throw new Error("Network response is tweking man");
				}
				const data = await response.json();
				setCharacters(data);
				console.log(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<pre>
			<h2>Game of Thrones Characters lol</h2>
			<ul>
				{characters.map((character) => (
					<li key={character.id}>{character.fullName}</li>
				))}
			</ul>
		</pre>
	);
    
   


    
}

export default FetchComponent;