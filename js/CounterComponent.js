import React from 'react';

class CounterComponent extends React.Component {
	render() {
		return (<div>
			<h4>Counter: <output value>{ this.props.counter }</output></h4>
			<div>
				<button	onClick={this.props.onPlusClick}>+</button>
				<button	onClick={this.props.onMinusClick}>-</button>
			</div>
		</div>);
	}
}

CounterComponent.propTypes = {
	counter: React.PropTypes.number.isRequired,
	onPlusClick: React.PropTypes.func.isRequired,
	onMinusClick: React.PropTypes.func.isRequired,
};

export default CounterComponent;
