import rootReducer from "./reducers";
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";

export function configureStore() {    
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )

    )
    return store;
}
