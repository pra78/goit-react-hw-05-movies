import { BackLink } from 'components/BackLink/BackLink';
// import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
    
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';
    const backLinkHref = location.state?.from ?? "/";

    // useEffect(() => {
    // HTTP запрос, если нужно
    // }, []);

    const updateQueryString = evt => {
        const movieIdValue = evt.target.value;
        if (movieIdValue === '') {
            return setSearchParams({});
        }
        setSearchParams({ movieId: movieIdValue });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(movieId);

    };

    // const handleMovieClick = (movie) => {
    //     console.log(movie);
    // };

    // const shownMovies = movies.filter(movie => movie.includes(movieId));

    return (
        <div>
            <BackLink to={backLinkHref}>Go back</BackLink>
            <form onSubmit={handleSubmit}>
                <input type="text" value={movieId} onChange={updateQueryString} />
                <input type="submit" value="Search" />
            </form>
            
        </div>
    );
}

export default Movies;