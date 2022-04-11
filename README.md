# mono.lgr.dev

Welcome to the monorepo for `@lgr.dev`.

## Prerequisites

### Node.js

Install [Node.js](https://nodejs.org/) which includes [Node Package Manager](https://docs.npmjs.com/getting-started).

### Nx

Install the [Nx CLI](https://nx.dev/getting-started/nx-setup#install-nx-cli) globally.

## Get Started

The following commands may require a `project-name` to be specified. For a full list of project names, please refer to
the [workspace.json](./workspace.json) file.

### Development Server

Run `nx serve project-name` for an app development server. Navigate to http://localhost:4200/. The app will
automatically reload if you change any of the source files.

### Build

Run `nx build project-name` to build the project. The build artifacts will be stored in the `dist/` directory. Use
the `--prod` flag for a production build.

### Unit tests

Run `nx test project-name` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### End-to-end tests

Run `nx e2e project-name` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Contributing

### Commit Message Format

Please adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for adding
human and machine-readable meaning to commit messages.

#### Commit Message Header

```text
<type>([optional scope]): <short summary>

[optional body]

[optional footer(s)]
```

##### Type

- **build:** Changes to the build system or external dependencies
- **ci:** Changes to the continuous integration configuration
- **docs:** Changes to documentation
- **feat:** Changes which include a new feature
- **fix:** Changes which include a bug fix
- **perf:** Changes which include a performance improvement
- **refactor:** Changes which neither fix a bug nor add a feature
- **style:** Changes to styling
- **test:** Changes to unit tests or end-to-end tests

##### Scope

- **workspace:** Changes to the workspace

##### Summary

Use the summary field to provide a succinct description of the changes:

- Use the imperative, present tense (i.e. 'change', not 'changed' nor 'changes')
- Do not capitalise the first letter
- Do not include a period at the end

## Workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

### Applications

### Libraries
