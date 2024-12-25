const manifest = {
    id: 'org.tamilmovies',
    version: '1.0.0',
    name: 'Tamil & English Movies',
    description: 'High-rated and trending Tamil and English movies from various OTT platforms',
    types: ['movie'],
    background: 'https://www.pngarts.com/files/2/Blue-Abstract-Lines-PNG-Transparent-Image.png',
    catalogs: [
        {
            type: 'movie',
            id: 'tamil.trending',
            name: 'Trending Tamil Movies',
            extra: [{ name: 'genre' }, { name: 'skip' }]
        },
        {
            type: 'movie',
            id: 'tamil.toprated',
            name: 'Top Rated Tamil Movies',
            extra: [{ name: 'genre' }, { name: 'skip' }]
        },
        {
            type: 'movie',
            id: 'tamil.recent',
            name: 'Recent Tamil Movies',
            extra: [{ name: 'genre' }, { name: 'skip' }]
        },
        {
            type: 'movie',
            id: 'english.mustwatch',
            name: 'Must-Watch English Movies',
            extra: [{ name: 'genre' }, { name: 'skip' }]
        },
        {
            type: 'movie',
            id: 'english.highgrossing',
            name: 'High-Grossing English Movies',
            extra: [{ name: 'genre' }, { name: 'skip' }]
        },
        {
            type: 'movie',
            id: 'english.newott',
            name: 'New OTT English Releases',
            extra: [{ name: 'genre' }, { name: 'skip' }]
        },
        {
            type: 'movie',
            id: 'english.intheatre',
            name: 'English Movies in Theatres',
            extra: [{ name: 'genre' }, { name: 'skip' }]
        },
        {
            type: 'movie',
            id: 'english.scifi',
            name: 'English Sci-Fi Movies',
            extra: [{ name: 'genre' }, { name: 'skip' }]
        }
    ],
    resources: ['catalog'],
    idPrefixes: ['tt', 'tmdb']
};

module.exports = manifest;
