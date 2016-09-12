import React from 'react';
import { store } from './store';

export class App extends React.Component {

	componentDidMount() {
		//
		store.subscribe(() => {
			this.forceUpdate();
		});
	}

	onInc() {
		console.log('App onInc');
		store.dispatch({ type: 'INC'});
	}

	onDec() {
		console.log('App onDec');
		store.dispatch({ type: 'DEC'});
	}

	render () {
		return (
			<div>
				Counting: { store.getState() }
				<div>
					<button	onClick={this.onInc}>+</button>
					<button	onClick={this.onDec}>-</button>
				</div>
			</div>
		);
	}
}
