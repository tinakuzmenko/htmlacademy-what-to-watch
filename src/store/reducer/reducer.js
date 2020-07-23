import {combineReducers} from "redux";
import {data} from "./data/data.js";
import {appState} from "./app-state/app-state.js";
import {user} from "./user/user.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user,
});
