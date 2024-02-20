import { Logger } from './logger.plugin';

const payload = {
	method: 'GET',
	url: '/greeting',
	message: `{GET, /greeting}`,
	status: 200,
	content_length: '',
	response_time: '+1ms'
};

const infoMsg = 'Info';
const warnMsg = 'Warn';
const errorMsg = 'Error';
const debugMsg = 'Debug';

describe('logger.plugin', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should be instance of Logger', () => {
		const logger = new Logger();
		expect(logger).toBeInstanceOf(Logger);
	});

	test('should return the instance name', () => {
		const name = 'Testing';
		const logger = new Logger(name);
		expect(logger.message).toEqual(name);
	});

	test('should call all methods', () => {
		const infoSpy = jest.spyOn(Logger.prototype, 'info');
		const warnSpy = jest.spyOn(Logger.prototype, 'warn');
		const errorSpy = jest.spyOn(Logger.prototype, 'error');
		const debugSpy = jest.spyOn(Logger.prototype, 'debug');
		const httpSpy = jest.spyOn(Logger.prototype, 'http');

		const logger = new Logger('Testing');
		logger.info(infoMsg);
		logger.warn(warnMsg);
		logger.error(errorMsg);
		logger.debug(debugMsg);
		logger.http(payload);

		expect(infoSpy).toHaveBeenCalledWith(infoMsg);
		expect(infoSpy).toHaveBeenCalledTimes(1);
		expect(warnSpy).toHaveBeenCalledWith(warnMsg);
		expect(warnSpy).toHaveBeenCalledTimes(1);
		expect(errorSpy).toHaveBeenCalledWith(errorMsg);
		expect(errorSpy).toHaveBeenCalledTimes(1);
		expect(debugSpy).toHaveBeenCalledWith(debugMsg);
		expect(debugSpy).toHaveBeenCalledTimes(1);
		expect(httpSpy).toHaveBeenCalledWith(payload);
		expect(httpSpy).toHaveBeenCalledTimes(1);
	});
});
