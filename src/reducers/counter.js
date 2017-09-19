//声明一个reducer,reudcer接收连个参数，分别是当前的state树和要处理的action，返回新的state树
export  function counter(state = 0,action){
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			console.log("INCREMENT_COUNTER");
			console.log(state);
			return state+1;
			break;
		case 'DECREMENT_COUNTER':
			console.log("DECREMENT_COUNTER");
			return state-1;
			break;
		default:
			console.log("default");
			return state;
			break;
	}
};


export  function counter222(state = {a:1},action){
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			console.log("INCREMENT_COUNTER");
			console.log(state);
			return state.a+1;
			break;
		case 'DECREMENT_COUNTER':
			console.log("DECREMENT_COUNTER");
			return state.a-1;
			break;
		default:
			console.log("default");
			return state;
			break;
	}
};