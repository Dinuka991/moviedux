import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("movies.json") // Fetch the movies.json file
            .then((response) => response.json()) // Parse the JSON data
            .then((data) => {
                setMovies(data); // Set the movies state
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });
    }, []); // The empty array ensures this effect runs only once after the initial render

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={handleSearchChange}
                value={searchTerm}
            />
            <div className="movies-grid">
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
