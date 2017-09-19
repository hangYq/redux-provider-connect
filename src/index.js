import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducers from './reducers/index.js';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

//创建一个store接收合并后的reducers,提供state和action
let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>,
document.getElementById('root'));
registerServiceWorker();
