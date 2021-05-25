import React, { Component } from 'react';

class Counter extends Component {
	getBtnClasses() {
		let classes = 'btn m-2 ';
		classes += this.props.value === 0 ? 'btn-secondary' : 'btn-warning';
		return classes;
	}

	render() {
		return (
			<div>
				{this.props.children}
				<span className={this.getBtnClasses()}>{this.props.value}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.id)}
					className="btn btn-primary"
				>
					increment
				</button>
				<button
					className="btn btn-danger m-2"
					onClick={() => this.props.onDelete(this.props.id)}
				>
					Delete
				</button>
				<button
					className="btn btn-success m-2"
					onClick={() => this.props.onClear(this.props.id)}
				>
					Clear
				</button>
			</div>
		);
	}
}

export default Counter;
