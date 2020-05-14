const supertest = require('supertest');
// our server won't actuall start when it's required in,
// due to the if statement in index.js
const server = require('../index');

test('GET /', async () => {
	// we start by ARRANGING  the test data we need
	const endpoint = '/';
	const status = 200;

	// then we ACT on whatever we're testing
	const res = await supertest(server).get(endpoint);

	// then we ASSERT the response data
	expect(res.statusCode).toBe(status);
	expect(res.type).toBe('application/json'); // res.type is shorthand for res.headers['content-type']
	expect(res.body.message).toBe('Welcome to our API');
	expect(res.body.message).toMatch(/welcome/i);
});
