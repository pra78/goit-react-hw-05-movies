import axios from "axios";

const refs = {
    API_URL: "https://api.themoviedb.org/3",
    KEY: "63021acb907201a1471dfb5721049566",
};

const axiosInst = axios.create({
  baseURL: refs.API_URL,
  params: {
    api_key: refs.KEY,
  },
});

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export const api = {
    getTrendingMovies: async () => {
        try {
            const res = await axiosInst.get('/trending/movie/day');
            const data = res.data.results;
            return data;
        } catch (error) {
            console.log(error);
            // location.replace('../404.html');
        }
    },
    getMovieDetails: async (movieId) => {
        try {
            const res = await axiosInst.get(`/movie/${movieId}`, {params: {language: "en-US"}});
            const data = res.data;
            return data;
        } catch (error) {
            console.log(error);
            // location.replace('../404.html');
        }
    },
    getCredits: async (movieId) => {
        try {
            const res = await axiosInst.get(`/movie/${movieId}/credits`, {params: {language: "en-US"}});
            const data = res.data;
            return data;
        } catch (error) {
            console.log(error);
            // location.replace('../404.html');
        }
    }
}