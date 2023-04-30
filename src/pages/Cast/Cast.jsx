import { api } from "api/api";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Cast = () => {
    const location = useLocation();
    const movieId = useParams().movieId ?? '';
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (location.pathname !== `/movies/${movieId}/cast`) {
            return;
        }
        const getMovieCast = async () => {
            const response = await api.getCredits(movieId);
            setCast(response.cast.map(actor => ({
                id: actor.id,
                profilePic: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
                name: actor.name,
                character: actor.character,
            })));
        }
        
        getMovieCast();
        
    }, [movieId, location]); 

    return (
        <>
            <p>Cast</p>
            <ul>
                {cast.map(actor => {
                    return (
                        <li key={actor.id}>
                            {actor.profilePic}
                            {actor.name}
                            {actor.character}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Cast;