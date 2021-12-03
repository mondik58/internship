# Internship Boilerplate

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Folder Structure

You need to follow this folder structure based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

Here components are divided according to Atomic Design principles but also divided by features which adds extra scalability:

```
📦src
 ┣ 📂components // Components that can be used in any feature
 ┃ ┣ 📂atoms
 ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂molecules
 ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂organisms
 ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┗ 📂templates
 ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜styles.js
 ┣ 📂constants // Files with various constants
 ┃ ┗ 📜api.js
 ┣ 📂features // Features (for example: Auth, Projects etc)
 ┃ ┗ 📂MyFeature
 ┃ ┃ ┣ 📂atoms
 ┃ ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┣ 📂molecules
 ┃ ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┣ 📂organisms
 ┃ ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┗ 📂templates
 ┃ ┃ ┃ ┗ 📂MyComponent
 ┃ ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyComponent.test.js
 ┃ ┃ ┃ ┃ ┣ 📜MyComponent.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜styles.js
 ┣ 📂mutations // GraphQL mutations divided by features
 ┃ ┗ 📂MyFeature
 ┃ ┃ ┗ 📜myMutation.js
 ┣ 📂queries // GraphQL queries divided by features
 ┃ ┗ 📂MyFeature
 ┃ ┃ ┗ 📜myQuery.js
 ┣ 📂utils // Various small functions (for example: date formatting utils)
 ┃ ┣ 📂__tests__
 ┃ ┃ ┗ 📜myUtil.test.js
 ┃ ┗ 📜myUtil.js
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

## API
GraphQL API is hosted at [https://powerful-ridge-97119.herokuapp.com/graphql](https://powerful-ridge-97119.herokuapp.com/graphql)

It is self documented and the easiest way to introspect it is to use GraphQL client application. \
For example you can use [Altair](https://altair.sirmuel.design/).
