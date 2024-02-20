import { ServerApp } from './presentation';

describe('App', () => {
	test('should call method ServerApp.start', async () => {
		const mockedStart = jest.fn();
		ServerApp.prototype.start = mockedStart;

		await import('./app');

		expect(mockedStart).toHaveBeenCalled();
		expect(mockedStart).toHaveBeenCalledTimes(1);
	});
});
