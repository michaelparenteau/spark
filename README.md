spark
=====

A Webpack, React, hot loading enabled dev setup.

### Usage

Install node.js and then run:

```
npm install
npm start
open http://localhost:3000
```

Now edit `app/components/sampleComponent/sampleComponent.js`.
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.babel.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Stack includes:

* [React.js](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/)
* [Babeljs](https://babeljs.io/)
* [Sass](http://sass-lang.com/): using libsass via [node-sass](https://github.com/sass/node-sass)
* [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/)
* [Font Awesome](http://fontawesome.io) via [react-fa](https://www.npmjs.com/package/react-fa)

### Credits

This project is heavily influenced by:

* [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) by [Dan Abramov](https://github.com/gaearon)
* [griiid](https://github.com/TylerK/griiid) by [Tyler Kelley](https://github.com/TylerK)
