import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import requests from '../requests'; // Import your requests file

const NavPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(requests.requestMovieDetails(id));
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div className='p-4'>
      {movie ? (
        <div>
          <h1 className='text-3xl font-bold'>{movie.title}</h1>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
          {/* Add more movie details here */}
        </div>
      ) : (
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
      )}
    </div>
  );
};

export default NavPage;
