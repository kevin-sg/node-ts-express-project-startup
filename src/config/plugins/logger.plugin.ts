import winston from 'winston';

export class Logger {
	public readonly logger: winston.Logger;

	constructor(public message?: string) {
		this.logger = winston.createLogger({
			level: 'info',
			format: winston.format.combine(
				winston.format.label({ label: message || 'App' }),
				winston.format.colorize({ level: true, message: true }),
				winston.format.timestamp({
					format: 'hh:mm:ss.SSS A'
				}),
				winston.format.splat(),
				winston.format.printf((info) => {
					const line = `\x1b[37m[${info.timestamp}]\x1b[37m ${info.level} \x1b[33m[${info.label}]\x1b[33m ${info.message}`;
					return info.obj ? line.concat(JSON.stringify(info.obj || '')) : line;
				})
			),
			transports: [new winston.transports.Console()]
		});
	}

	public info(message: string, obj?: object) {
		this.logger.info(message, { obj });
	}

	public warn(message: string, obj?: object) {
		this.logger.warn(message, { obj });
	}

	public error(message: string, obj?: object) {
		this.logger.error(message, { obj });
	}

	public debug(message: string, obj?: object) {
		this.logger.debug(message, { obj });
	}

	public http(obj: Record<string, unknown>) {
		const payload = {
			method: obj.method,
			url: obj.url,
			message: `{${String(obj.method)}, ${String(obj.url)}}`,
			status: obj.status,
			content_length: obj.content_length,
			response_time: '+'.concat(String(Math.trunc(obj.response_time as number)), 'ms')
		};

		const loggerRequest = winston.createLogger({
			level: 'http',
			format: winston.format.combine(
				winston.format.label({ label: this.message }),
				winston.format.colorize({ level: true, message: true }),
				winston.format.timestamp({
					format: 'hh:mm:ss.SSS A'
				}),
				winston.format.splat(),
				winston.format.printf((info) => {
					const line = `\x1b[37m[${info.timestamp}]\x1b[37m ${info.level} \x1b[33m[${info.label}]\x1b[33m ${info.message} ${payload.status} \x1b[33m${payload.response_time}`;
					return info.obj ? line.concat(JSON.stringify(info.obj || '')) : line;
				})
			),
			transports: [new winston.transports.Console()]
		});

		loggerRequest.http(payload.message);
	}
}
