import React, { Component } from 'react';

export default class Form extends Component {
	state = { text: '' };

	handleChange = (e) => this.setState({ text: e.target.value });

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addCard(this.state.text);
		this.setState({ text: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					onChange={this.handleChange}
					value={this.state.text}
				/>
				<input type='submit' value='add card' />
			</form>
		);
	}
}
