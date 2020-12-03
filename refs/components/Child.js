import React from 'react';
import Form from './Form';

export default function Child({ addCard }) {
	return (
		<div>
			<Form addCard={addCard} />
		</div>
	);
}
