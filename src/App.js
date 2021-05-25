import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};

	handleIncrement = (counterID) => {
		const counters = [...this.state.counters];
		const countersIndex = counters
			.map(function (x) {
				return x.id;
			})
			.indexOf(counterID);
		counters[countersIndex].value++;
		this.setState({ counters });
	};

	handleDelete = (counterID) => {
		const counters = this.state.counters.filter((c) => c.id !== counterID);
		this.setState({ counters });
	};

	handleClear = (counterID) => {
		const counters = this.state.counters;
		console.log('clear called on ', counterID);
		console.log(this.state);
		const newCounters = counters.map((element) => {
			if (element.id === counterID) {
				element.value = 0;
			}
			return element;
		});
		this.setState({ counters: newCounters });
	};
	handleResetGlobal = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter((c) => c.value > 0).length}
				></NavBar>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onClear={this.handleClear}
						onResetGlobal={this.handleResetGlobal}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
					></Counters>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
