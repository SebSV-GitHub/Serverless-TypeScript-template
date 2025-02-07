# TypeScript Template Repository 🚀

A ready-to-use TypeScript project template with modern tooling to streamline your development workflow. Use this template on GitHub to kickstart a new project with ease.

## 🌟 Features

- **TypeScript** with TSX, a fast `Node.js + TypeScript` runtime.
- **ECMAScript Modules (ESM)** for modern module usage.
- **XO** for strict linting and maintaining code quality.
- **Prettier** for automatic code formatting.
- **Jest** for unit and integration testing.
- **TypeScript Path Aliases** for easier imports and cleaner code structure.
- **Git Hooks** managed by **Husky** and **lint-staged** for seamless pre-commit and pre-push checks.
- **EditorConfig** to keep editor settings consistent across various IDEs.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+) – required by the `tsx` runtime.
- **npm** (package manager)

### Installation

1. **Use as a Template**: Select this template on GitHub when creating a new repository.
2. Clone your new repository:

   ```bash
   git clone https://github.com/your-username/your-new-repo.git
   cd your-new-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

## 📜 Scripts

- **`npm start`**: Starts the development server using `tsx` for fast TypeScript execution.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Runs the XO linter on all files.
- **`npm run format`**: Formats code using Prettier.
- **`npm run test`**: Runs tests using Jest.
- **`npm run prepare`**: Sets up Husky hooks (automatically run during npm install).

## 🛠️ Tools

### TypeScript Path Aliases

TypeScript path aliases help keep import statements cleaner, making it easier to manage large projects with multiple modules. This template includes an example path alias setup.

1. **Configure Paths**: In `tsconfig.json`, define aliases within the `compilerOptions` field:

   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@components/*": ["src/components/*"],
         "@utils/*": ["src/utils/*"]
       }
     }
   }
   ```

2. **Using Aliases**: Once configured, use the paths in your import statements, like so:

   ```typescript
   import MyComponent from "@components/MyComponent";
   import { myUtilityFunction } from "@utils/helpers";
   ```

This setup allows for absolute imports and improves code readability by avoiding complex relative paths.

### TypeScript with `tsx`

This template uses the `tsx` runtime, providing a zero-config, lightning-fast TypeScript environment. The `tsx` package allows for easy TypeScript execution, similar to using `node` directly.

### Jest

- **Jest** is configured to run unit and integration tests. Place your tests in a `tests` folder or follow Jest's default structure by naming test files with `.test.ts` or `.spec.ts`.

### XO & Prettier

- **XO** enforces a strict code style to keep your code clean and maintainable.
- **Prettier** works alongside XO to auto-format code, helping maintain a consistent style across the project.

### Git Hooks (Husky + lint-staged)

- **Husky** manages Git hooks to automate checks before commits.
- **lint-staged** runs linting and formatting on staged files, ensuring only committed code is checked.

### EditorConfig

The included `.editorconfig` file ensures consistent editor behavior across different IDEs.

## 📚 Usage

To create a new repository from this template, select it in the **GitHub repository creation** options and hit **Create Repository**. All configurations are ready to use out of the box!

## 🧪 Running Tests

- Run all tests:

  ```bash
  npm test
  ```

- Run tests in watch mode:

  ```bash
  npm test -- --watch
  ```

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
