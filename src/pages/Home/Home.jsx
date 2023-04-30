import { api } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

// import { useLocation } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]);
    // const location = useLocation();

    useEffect(() => {
        const getTrendingMovies = async () => {
            const response = await api.getTrendingMovies();
            setMovies(response);
        }
        
        getTrendingMovies();
        
    }, []); 

    return (
        <>
            <h2>Trending today</h2>
            <MoviesList movies={ movies } />
        </>
    );
}

export default Home;