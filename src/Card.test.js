import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
    //SMOKE TEST
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    //SNAPSHOT
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card title='Chicken' content='The animal, not the meat.'/>)
            .toJSON()
    expect(tree).toMatchSnapshot()
    })
})