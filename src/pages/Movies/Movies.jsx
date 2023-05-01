import { api } from 'api/api';
import { BackLink } from 'components/BackLink/BackLink';
import MoviesList from 'components/MoviesList/MoviesList';
import { Suspense, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { StyledInput } from './Movies.styled';

const Movies = () => {
    
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';
    const backLinkHref = location.state?.from ?? "/";
    const [movies, setMovies] = useState([]);

    const updateQueryString = evt => {
        const movieIdValue = evt.target.value;
        if (movieIdValue === '') {
            return setSearchParams({});
        }
        setSearchParams({ movieId: movieIdValue });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await api.getSaughtMovies(movieId);
        setMovies(response);
    };

    return (
        <div>
            <BackLink to={backLinkHref}>Go back</BackLink>
            <form onSubmit={handleSubmit}>
                <StyledInput type="text" value={movieId} onChange={updateQueryString} />
                <button type="submit">Search</button>
            </form>
            <MoviesList movies={ movies } />
            <Suspense fallback={<div>LOADING...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default Movies;