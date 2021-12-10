import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));
