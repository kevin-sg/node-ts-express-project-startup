import { HTTPRequest } from './http.plugin';

describe('http.plugin', () => {
	test('should be instance of HTTPRequest', () => {
		const httpRequest = new HTTPRequest();
		expect(httpRequest).toBeInstanceOf(HTTPRequest);
	});

	test('should call the method HTTPRequest.run', () => {
		const mockedRun = jest.fn();
		const httpRequest = new HTTPRequest();
		httpRequest.run = mockedRun;
		httpRequest.run();

		expect(mockedRun).toHaveBeenCalledTimes(1);
	});
});
