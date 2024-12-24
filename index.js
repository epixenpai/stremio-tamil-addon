const { addonBuilder, serveHTTP } = require('stremio-addon-sdk');
const manifest = require('./src/manifest');
const catalogHandler = require('./src/catalogHandler');
const config = require('./src/config');

const builder = new addonBuilder(manifest);
builder.defineCatalogHandler(catalogHandler);

serveHTTP(builder.getInterface(), { port: config.port });
console.log(`Addon running at http://localhost:${config.port}`);