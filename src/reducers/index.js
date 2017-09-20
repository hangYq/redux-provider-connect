import { combineReducers } from "redux";
import {counter} from './counter';



// 使用redux的combineReducers方法把所有的reducer打包起来

const reducers = combineReducers({
	counter
})

export default reducers;