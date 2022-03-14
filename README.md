# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

### `Project Structure - Source`

.src
├── common                    # Shared components / hooks (alternatively `common` or `tests`)
│   ├── components            # Presentation / Stateless components
|   |   ├──index.tsx          # All files will be exported from a common index.tsx      
│   ├── hooks
│   ├── vendor         
│   └── tools                
└── assets
|   ├── images         
|   ├── svg
|   └── index.tsx
├── config                   # Contains all constants which will be used through out the App
├── containers               # Nested react component which contains state                    
├── pages                  
├── layouts                    
├── tools                   
├── models
├── services                 # GraphQL endpoints
├── tests
├── routes.ts
├── index.css
└── App.tsx

## Routes will be nested and nested routes will live in pages directory
## Each page will have an context through which the containers can access the data if needed.
