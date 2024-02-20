import 'dotenv/config';
import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import compress from 'compression';
import { Logger, HTTPRequest } from '@/config';

export class ServerApp {
	public readonly app: Express;
	private readonly port: number;
	private readonly globalPrefix: string;
	private readonly logger = new Logger('Server');

	constructor() {
		this.app = express();
		this.port = JSON.parse(process.env.PORT || String(8081));
		this.globalPrefix = process.env.GLOBAL_PREFIX || '/api';
	}

	public middleware() {
		this.logger.info('Configure middleware');
		// Request Origin
		this.app.use(cors({ origin: ['*'] }));
		this.app.use(compress());
		this.app.use(new HTTPRequest().run());
	}

	public routers() {
		this.logger.info('Configure router');
		this.app.use(this.globalPrefix.concat('/greeting'), (req: Request, res: Response) => {
			res.status(200).json({ message: 'Hello world!' });
		});
	}

	public start() {
		this.logger.info('Starting Node application...');
		this.logger.info(`Global prefix {${this.globalPrefix}}`);
		this.middleware();
		this.routers();
		return this.app.listen(this.port, () => {
			this.logger.info(`Server running on: http://localhost:${this.port}`);
		});
	}
}
