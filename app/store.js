import { persistState } from 'redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import DevTools from './containers/DevTools';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const enhancer = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
                /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('reducers', () =>
                          store.replaceReducer(require('reducers')/*.default if you use Babel 6+ */)
                         );
    }

    return store;
}
