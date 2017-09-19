import React,{Component} from 'react';

class Counter extends Component {
	render (){
		//从组件的props属性中导入四个方法和一个变量
        const {increment, decrement, counter} = this.props;
		return (
			<div>
				<p>
	                Clicked: {counter} times
	                {' '}
	                <button onClick={increment}>+</button>
	                {' '}
	                <button onClick={decrement}>-</button>
	                {' '}
            	</p>
			</div>
		)
	}
}
export default Counter;