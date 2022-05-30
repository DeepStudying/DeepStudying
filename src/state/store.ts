import {applyMiddleware } from "@reduxjs/toolkit"
import reducers from "./reducers";
import { legacy_createStore as createStore} from 'redux'

import thunk from "redux-thunk"

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);