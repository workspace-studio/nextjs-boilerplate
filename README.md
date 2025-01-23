# Next.js Boilerplate

This project was bootstrapped with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## How to use

### Prerequisites

First, make sure you have `Node.js` (**npm** or **yarn**) installed.

```
$ node -v
v22.x.x
```

Also, you can use `nvm` as a helpful tool to install the correct **node** and **npm**/**yarn** version.

### Installing the application

```
$ git clone https://github.com/workspace-studio/nextjs-boilerplate.git <my-project-name>
$ cd <my-project-name>
$ yarn
```

_This command will install all of the latest dependencies. Installation might take some time._

### Dev

```
$ yarn dev
```

_Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser._

### Build

```
$ yarn build
```

_Builds the application for production usage._

### Lint

```
$ yarn lint
```

_Checks the app for any lint errors and/or warnings._

### Upgrade

```
$ yarn upgrade
```

_Upgrades packages to their latest version based on the specified range. Find out more at: https://classic.yarnpkg.com/lang/en/docs/cli/upgrade/_

---

## Built with

- [Next.js](https://github.com/vercel/next.js) as a [React](https://github.com/facebook/react/) framework for Static Generation and Server-side Rendering
- [TypeScript](https://github.com/microsoft/TypeScript) as a language for application-scale JavaScript
- [Sass](https://github.com/sass/dart-sass) as CSS pre-processor

## Libraries

In addition several smaller libraries are used. Instructions on how to use them are linked below.

| Library                                             | Purpose                                                 |
| --------------------------------------------------- | ------------------------------------------------------- |
| [clsx](https://github.com/lukeed/clsx)              | for conditionally joining classNames together           |
| [ESLint](https://github.com/eslint/eslint)          | for making code more consistent and avoiding bugs       |
| [Stylelint](https://github.com/stylelint/stylelint) | for avoiding errors and enforcing conventions in styles |
| [Prettier](https://github.com/prettier/prettier)    | for code formatting                                     |
| [Husky](https://github.com/typicode/husky)          | for preventing bad commit or push                       |

See `package.json` for a complete overview.

---

## Folder structure

```
src
├── app                                        # place to store pages (routes); each page should match a route
│   ├── {page}                                 # place for page (route)
│   │   ├── [param].tsx                        # dynamic page (route)
│   │   └── index.tsx                          # page (route)
│   ├── layout.tsx                             # custom layout
│   └── index.tsx                              # home page
├── components                                 # place for all reusable components
│   └── {ComponentName}                        # reusable component
│   │   ├── {ComponentName}.module.scss        # component styles
│   │   ├── {ComponentName}.tsx                # component
│   │   └── index.ts                           # for root component of a directory
├── config                                     # place to store all config data
├── styles                                     # place to store global styles
│   ├── globals                                # place for reset and base styling
│   ├── mixins                                 # place to store all mixins
│   ├── settings                               # place to store all fonts, colors, and breakpoints
│   ├── utils                                  # place to store all utility functions for styling
│   └── index.scss                             # styling entry point
├── types                                      # place to store all types
├── utils                                      # place to store all utility functions that are shared across the app
│   ├── context                                # place to store all Context data
│   ├── hooks                                  # place to store all custom Hooks
│   └── static                                 # place to store all other utility functions
└── views                                      # place to store view pages; each view should match a route
```

## Style Guide

As a "base" style guide, the [Airbnb's style guide](https://airbnb.io/javascript/react) is being used. Since we're applying different eslint configs that are combined with Airbnb's [config](https://yarnpkg.com/package/eslint-config-airbnb), large number of these rules are already enforced.

## Versioning

This project use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/workspace-studio/nextjs-boilerplate/tags).

## Contributing

If you're interested in contributing to this project, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before submitting a pull request.
