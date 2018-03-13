import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import StopWatch from './Stopwatch';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadLine: 'May 4, 2018',
			newDeadline: ''
		}
	}

	changeDeadLine() {
		this.setState({deadLine: this.state.newDeadline});
	}

	render() {
		return (
			<div className="App">
				<StopWatch/>
				<div className="App-tittle">
					Countdown to {this.state.deadLine}
				</div>
				<Clock 
					deadLine={this.state.deadLine}
				/>
				<Form inline>
					<FormControl 
					className="DeadLine-input"
					placeholder='new date'
					onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<Button onClick={() => this.changeDeadLine()}>
						Submit
					</Button>
				</Form>
			</div>

		)
	}
}

export default App;