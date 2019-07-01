# Chuck Norris facts

This projects consumes the [ChuckNorris.io](https://api.chucknorris.io/) API. You can:

- see all fact categories
- see a fact for a given category

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<a href="https://www.styled-components.com/"><img src="https://img.shields.io/badge/built%20with-styled%20components-db7093.svg" alt="Built with Styled Components" /></a>

<img src="https://img.shields.io/badge/powered%20by-typescript-blue.svg" alt="Powered by TypeScript" />

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Project folder organization

```
├── `src`
│   ├── `atomic` => it has the project components. Check the readme inside `src/atomic/README.md`
│   ├── `data` => it should have all datasources (http, database, session storage, local storage)
│   │   └── `http` => it should have http related code: data transfer objects (DTO), request objects, response objects, urls, interceptors
│   └── `modules` => project modules/pages (ex: home, category-detail) and their specific dependencies/components
```

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the storybook which lists the project components.<br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploy it to GH Pages

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
