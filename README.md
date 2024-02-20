<h1 align="center">Pre-configured Project</h1>

<h3 align="center">Node + TypeScript + Express + Jest + Supertest</h3>

<br/>
<br/>

This pre-configured project is designed to initialize any project quickly.

#### Support

- Logger: visually informative provided by [winston](https://github.com/winstonjs/winston)
- Path alias: default as default `@/` this can be configured in the `tsconfig.json` file.
- Testing: is configured with the [jest](https://github.com/jestjs/jest) library.
- Document format: is configured with the [eslint](https://github.com/eslint/eslint) and [prettier](https://github.com/prettier/prettier) library.
- Typed environment variable: you can add more variables in the file `typings/env.d.ts` .

#### Command

```bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Testing
pnpm test:watch

# Build
pnpm build

# Production
pnpm start
```

#### Project structure inspired by clean architecture

```
├── jest.config.ts
├── package.json
├── pnpm-lock.yaml
├── README.md
├── src
│   ├── app.test.ts
│   ├── app.ts
│   ├── config
│   │   ├── index.ts
│   │   └── plugins
│   │       ├── http.plugin.test.ts
│   │       ├── http.plugin.ts
│   │       ├── index.ts
│   │       ├── logger.plugin.test.ts
│   │       └── logger.plugin.ts
│   └── presentation
│       ├── index.ts
│       ├── server.test.ts
│       └── server.ts
├── tsconfig.json
└── typings
    └── env.d.ts
```
