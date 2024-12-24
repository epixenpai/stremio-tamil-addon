# Tamil Movies Stremio Addon

This addon provides a curated collection of Tamil movies for Stremio, including:
- Trending Tamil Movies
- Top Rated Tamil Movies
- Recent Releases
- OTT Platform Availability

## Features
- Categorized Tamil movie collections
- Information about OTT platform availability (Netflix, Prime, Disney+, SonyLIV)
- Movie ratings from TMDB and IMDB
- Regular updates with new releases

## Installation
1. Open Stremio
2. Go to the Addons section
3. Click "Community Addons"
4. Paste the following URL: `http://your-deployment-url/manifest.json`

## Development
1. Install dependencies:
\`\`\`
npm install
\`\`\`

2. Get a TMDB API key from https://www.themoviedb.org/settings/api

3. Set your TMDB API key:
\`\`\`
export TMDB_API_KEY=your_api_key
\`\`\`

4. Start the addon:
\`\`\`
npm start
\`\`\`