# Lava-rock (Express ESM TypeScript Starter)

A template repository for building modern Express.js applications using TypeScript, ES Modules, and Mongoose. All in one(Node express, ESM, Typescript, jest, superTest, Eslint, Prettier, Nodemon) configurations.

## Technologies Used

Express.js: Web framework for Node.js
TypeScript: Type-safe JavaScript development
ES Modules: Native module system (type: "module")
Mongoose: MongoDB object modeling
Jest: Testing framework
ESLint: Linting for code quality
Prettier: Code formatting
Nodemon/TSX: Development server with hot reload

### File Structure

The file structure of the project is as follows:

```
src/
  app.ts
  index.ts
  utility.js
  data/
    sample.json
  routes/
    health.ts
tests/
  app.test.ts
```

### What this template include and how its configured

#### TypeScript:

Strict type checking
ES2022 target
Source maps enabled for debugging
Separate build config (tsconfig.build.json)

#### Linting & Formatting:

ESLint and Prettier with auto-fix scripts
Scripts:
dev, build, start, lint, format, test

### PR Check Workflow

Automated checks run on every pull request to main, develop, or trunk:

Checkout code
Set up Node.js 22
Install dependencies (npm ci)
Lint code (npm run lint)
Run tests with coverage (npm test -- --ci --coverage)
Build project (npm run build)

### Minimal Express app

with ESM and json import

### test folder with test example

### Docker files(docker and compose)
