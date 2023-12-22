### 1. Run Setup command to install all needed packages (you only need to run this once)

Installs packages and tools used by the project

```bash
npm install
```

### 2. Running dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Documentation

## Tech Stack

- React over [Nextjs](https://nextjs.org/)
- State Management: [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/), [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- Styles: [Tailwind CSS](https://tailwindcss.com/)
- Unit testing: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Jest](https://jestjs.io/)
- Code Quality: [Prettier](https://prettier.io/), [husky](https://www.npmjs.com/package/husky), [lint-staged](https://github.com/okonet/lint-staged), [eslint](https://eslint.org/)
- Other:
  - [Volta](https://volta.sh/)
  - [Next Auth](https://next-auth.js.org/)

---

## Store and Services

For store management we are using [Redux Toolkit](https://redux-toolkit.js.org/) with [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for handling api requests and caching. In this context a file inside the **services** folders should be a slice that interacts with the api using RTQ; and a file inside **slices** folder should be a more general slice that doesn't use RTQ. Both services and slices should be correctly imported to the store.ts file.

## Routes

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Code quality tools

- prettier
- eslint
- git hooks

#### Git pre-commit hook:

Before every commit we run prettier to ensure correct code style and eslint to check for syntax errors or improvements. If there's an error the commit will not go through. If for any reason you need to cheat and force the commit without doing this checks, you can always pass the flag "--no-verify" to the git commit command. (This will void your warranty!)

#### Git pre-push hook:

Before every commit we run the build to ensure nothing would break. This way we avoid loosing time on

#### Git branch naming convention:

The GitHub branch naming convention follows the format `${type}/${#ticket}-${name}`. Let's break down each part:

`${type}`: This part represents the type of the branch and can take on values such as:

- `feature`: Used for branches related to new feature development.
- `bugfix`: Used for branches focused on fixing bugs or issues.
- `improvement`: Used for branches aimed at making improvements or enhancements to existing features.
- `prerelease`: Used for branches dedicated to preparing a prerelease version.
- `release`: Used for branches associated with the final release version.
- `hotfix`: Used for branches addressing critical issues that need immediate fixes.

`${#ticket}`: This part represents the ticket number associated with the work being done. It helps in tracking and referencing the specific task or issue related to the branch.

`${name}`: This part represents a brief feature name or description. It helps provide a concise summary of the work being done in the branch.

#### Git commit message convention:

The GitHub commit message convention follows the format `${type}: ${detail}`. Let's break down each part:

`${type}`: This part represents the type of the commit and can take on values such as:

- `build`: Used for changes related to build processes or tools.
- `chore`: Used for regular maintenance or miscellaneous tasks.
- `ci`: Used for changes related to continuous integration configurations or scripts.
- `docs`: Used for changes to documentation or comments in the code.
- `feat`: Used for introducing new features or functionalities.
- `fix`: Used for fixing bugs or errors.
- `perf`: Used for improvements to performance.
- `refactor`: Used for code refactoring without changing functionallity.
- `revert`: Used for reverting previous commits.
- `style`: Used for changes related to code style or formatting.
- `test`: Used for adding or modifying tests.

`${detail}`: This part represents a brief description of the commit. It helps provide a concise summary of the changes made in the commit.

## Disabling Next 13 app directory.

If you don't want to use the new app directory, which is still in beta, you can remove the /app folder and the lines on the next.config file that enables support for this feature:

```
  experimental: {
    appDir: true,
  },
```

## The library for the design system

The project uses a library where many of de components are built. This library is "modives-design-system". If you want to run locally the library you can find the repo in here: https://github.com/ModivesEnterprise/modives_design_system

For running an testing locally the library where any change made can be instantly tested in this project you will need to run:

1. npm link => in the project modives_design_system
2. npm link "modives-design-system" => in this project

With this steps any chagne made in the library will be automatically reflected in this project.

## Nextjs Documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
