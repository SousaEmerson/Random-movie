const axios = require('axios');
const { baseURL, bearerToken, timeout, apiKey } = require('../../config');

const instance = axios.create({
	baseURL,
	timeout,
	'Authorization': bearerToken
});

const getMovies = async (page, language) => {
	try {
		const params = {
			api_key: apiKey,
			language,
			page,
			'release_date.gte': '2018',
			without_genres: 27
		};
		const { data: { results } } = await instance.get('/3/discover/movie', { params });
		return results;
	} catch (e) {
		throw e;
	}
};
module.exports = { getMovies };