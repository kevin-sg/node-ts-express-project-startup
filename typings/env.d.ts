namespace NodeJS {
	interface ProcessEnv {
		PORT: string;
		NODE_ENV: 'development' | 'production' | 'test';
		GLOBAL_PREFIX: string;

		// Add here
		// SECRET_KEY: string...
	}
}
