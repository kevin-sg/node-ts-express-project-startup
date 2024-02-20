import { ServerApp } from './server';

describe('ServerApp', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should be instance of ServerApp', () => {
		const mainApp = new ServerApp();
		expect(mainApp).toBeInstanceOf(ServerApp);
	});

	test('should call all methods', () => {
		const startSpy = jest.spyOn(ServerApp.prototype, 'start');
		const middlewareSpy = jest.spyOn(ServerApp.prototype, 'middleware');
		const routerSpy = jest.spyOn(ServerApp.prototype, 'routers');
		const mainApp = new ServerApp();
		const server = mainApp.start();
		server.close();

		expect(startSpy).toHaveBeenCalledTimes(1);
		expect(middlewareSpy).toHaveBeenCalledTimes(1);
		expect(routerSpy).toHaveBeenCalledTimes(1);
	});
});
