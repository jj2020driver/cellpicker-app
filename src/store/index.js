import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fetchModesReducer from "./fetchModes.js";
import activeModeReducer from "./activeMode.js";
import isGameStartedReducer from "./isGameStarted.js";
import hoverRecordsReducer from "./hoverRecords.js";

const rootReducer = combineReducers({
    modes: fetchModesReducer,
    activeMode: activeModeReducer,
    isGameStarted: isGameStartedReducer,
    hoverRecords: hoverRecordsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;