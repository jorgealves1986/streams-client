## This is a streaming App.

This was done using React and Redux.

You will need 2 more repositories to make this thing work:

- streams-api (https://github.com/jorgealves1986/streams-api)
- streams-rtmpserver (https://github.com/jorgealves1986/streams-rtmpserver)

Note: This was done using node v12.16.1

Instructions for this repo:

- (1) After cloning execute command "npm install" on root folder;
- (2) You need to create a file "config.js" on root folder with the following content: export const googleClientId = <your Client ID from Google OAuth 2.0>;
- (3) Start streams-api server and streams-rtmpserver (instructions for theese are on each of those repos);
- (4) After creating a stream on this App, you should open your streaming software of choice (for example: OBS) and configure the server, for example, in OBS go to settings -> tab Stream -> Service = custom, Server = rtmp://localhost/live, Stream key = <your stream id created on this App>.
- (5) Start streaming on your streaming software of choice and select the stream you created on this App.

Note: on point 4, you can see your stream id on this App when you select one previouslly created stream and look to the browser URL. Should be something like: http://localhost:3000/streams/<your stream id>

## -- / --

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
