import React from 'react';
import { connect, Provider } from 'react-redux';
import CounterComponent from './CounterComponent';
import store from './store';

class AppComponent extends React.Component {

	render () {
		return (
			<div>
				<h2>Counter React Redux Example</h2>
				<CounterComponent
					counter={this.props.counter}
					onPlusClick={this.props.onInc.bind(this)}
					onMinusClick={this.props.onDec.bind(this)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state/*, ownProps*/) => {
	return {
		counter: state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onInc() {
			console.log('App onInc');
			dispatch({ type: 'INC'});
		},

		onDec() {
			console.log('App onDec');
			dispatch({ type: 'DEC'});
		}
	};
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);
	}
}
