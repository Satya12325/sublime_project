import {combineReducers} from "redux";
import {addReducer} from "./add/addreducer";


export const rootReducer = combineReducers({
    add : addReducer,
  
   
})