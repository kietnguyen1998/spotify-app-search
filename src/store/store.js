import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import ArtistReducer from "./artist/reducer";
import TrackReducer from "./track/reducer";

const rootReducer = combineReducers({
  Artists: ArtistReducer,
  Tracks: TrackReducer,
});

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);
export default store;
