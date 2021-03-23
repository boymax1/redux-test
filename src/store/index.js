import { createStore,applyMiddleware,compose,combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import homeReducer from "./reducers/homeReducer";

const rootReducer=combineReducers({
    homeReducer,
});

export default createStore(rootReducer,compose(applyMiddleware(thunk),composeWithDevTools()));

