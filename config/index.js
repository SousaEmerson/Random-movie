const {config} = require('dotenv');
config();

module.exports = {
	port: process.env.PORT || process.env.port ||  8080,
	baseURL: process.env.BASE_URL_TMDB,
	timeout: process.env.TIMEOUT_URL_TMDB,
	bearerToken:  process.env.BEARER_TOKEN_TMDB,
	apiKey: process.env.API_KEY_TMDB
};