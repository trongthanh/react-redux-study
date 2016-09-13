import React from 'react';
import { connect } from 'react-redux';
import CounterComponent from './CounterComponent';

class AppComponent extends React.Component {

	render () {
		return (
			<div>
				<h2>React Redux Counter Example</h2>
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

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
