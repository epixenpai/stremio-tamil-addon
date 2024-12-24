const fetch = require('node-fetch');
const config = require('./config');

async function fetchTMDBMovies(endpoint, page = 1) {
    const url = `${config.tmdb.baseUrl}${endpoint}?api_key=${config.tmdb.apiKey}&with_original_language=ta&page=${page}`;
    const response = await fetch(url);
    return await response.json();
}

function getImageUrl(path, size = 'w500') {
    return `${config.tmdb.imageBaseUrl}/${size}${path}`;
}

module.exports = {
    fetchTMDBMovies,
    getImageUrl
};