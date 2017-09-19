import { combineReducers } from "redux";
import {counter,counter222} from './counter';



/*
	使用redux的combineReducers方法把所有的reducer打包起来
*/
const reducers = combineReducers({
	counter,
	counter222
})

export default reducers;