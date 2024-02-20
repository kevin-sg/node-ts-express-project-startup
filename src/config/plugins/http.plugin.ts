import morgan from 'morgan';
import { Logger } from './logger.plugin';

export class HTTPRequest {
	private readonly logger = new Logger('Request');

	constructor() {}

	public run() {
		return morgan(
			function (tokens, req, res) {
				return JSON.stringify({
					method: tokens.method(req, res),
					url: tokens.url(req, res),
					status: Number.parseFloat(tokens.status(req, res) || ''),
					content_length: tokens.res(req, res, 'content-length'),
					response_time: Number.parseFloat(tokens['response-time'](req, res) || '')
				});
			},
			{
				stream: {
					write: (message) => {
						this.logger.http(JSON.parse(message));
					}
				}
			}
		);
	}
}
