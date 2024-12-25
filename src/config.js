// Configuration settings
const config = {
    tmdb: {
        apiKey: 'c24113df2abdd79f92e92c696d366b25',
        baseUrl: 'https://api.themoviedb.org/3',
        imageBaseUrl: 'https://www.pngarts.com/files/2/Blue-Abstract-Lines-PNG-Transparent-Image.png'
    },
    background: 'https://www.pngarts.com/files/2/Blue-Abstract-Lines-PNG-Transparent-Image.png',
    port: process.env.PORT || 3000
};

module.exports = config;
