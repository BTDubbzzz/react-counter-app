import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
	render() {
		const { onClear, counters, onDelete, onIncrement, onResetGlobal } =
			this.props;
		return (
			<div>
				<button className="btn btn-primary btn-sm m-4" onClick={onResetGlobal}>
					Reset ALL
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						onClear={onClear}
						value={counter.value}
						id={counter.id}
					>
						<h4>Counter # {counter.id}</h4>
					</Counter>
				))}
			</div>
		);
	}
}

export default Counters;
