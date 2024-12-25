const { fetchTMDBMovies, getImageUrl } = require('./tmdb');
const { getOTTAvailability } = require('./ott');

async function catalogHandler({ type, id, extra }) {
    const page = extra.skip ? Math.floor(extra.skip / 20) + 1 : 1;
    let movies = [];

    if (type === 'movie') {
        let endpoint = '';
        switch (id) {
            case 'tamil.trending':
                endpoint = '/trending/movie/week';
                break;
            case 'tamil.toprated':
                endpoint = '/movie/top_rated';
                break;
            case 'tamil.recent':
                endpoint = '/movie/now_playing';
                break;
            case 'english.mustwatch':
                endpoint = '/trending/movie/week';
                break;
            case 'english.highgrossing':
                endpoint = '/discover/movie';
                extraParams = { sort_by: 'revenue.desc', with_original_language: 'en' };
                break;
            case 'english.newott':
                endpoint = '/movie/upcoming';
                break;
            case 'english.intheatre':
                endpoint = '/movie/now_playing';
                extraParams = { with_original_language: 'en' };
                break;
            case 'english.scifi':
                endpoint = '/discover/movie';
                extraParams = { with_genres: '878', with_original_language: 'en' };
                break;
            default:
                throw new Error('Invalid catalog');
        }

        const data = await fetchTMDBMovies(endpoint, page, extraParams);
        
        movies = await Promise.all(data.results.map(async (movie) => {
            const ottAvailability = await getOTTAvailability(movie.id);
            
            return {
                id: 'tmdb:' + movie.id,
                type: 'movie',
                name: movie.title,
                poster: getImageUrl(movie.poster_path),
                background: getImageUrl(movie.backdrop_path, 'original'),
                description: movie.overview,
                releaseInfo: new Date(movie.release_date).getFullYear().toString(),
                imdbRating: movie.vote_average,
                genres: movie.genre_ids,
                ottPlatforms: Object.entries(ottAvailability)
                    .filter(([_, available]) => available)
                    .map(([platform]) => platform)
                    .join(', ')
            };
        }));
    }

    return { metas: movies };
}

module.exports = catalogHandler;
