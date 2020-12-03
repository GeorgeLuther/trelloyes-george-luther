import React, { Component } from 'react';
import './App.css';
import Child from './Child';
import Form from './Form';

export default class App extends Component {
	state = { cards: [] };

	addCard = (card) => {
		this.setState({ cards: [...this.state.cards, card] });
	};

	render() {
		return (
			<div className='App'>
				<h1>Start Here...</h1>
				<Child addCard={this.addCard} />
			</div>
		);
	}
}
