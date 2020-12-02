import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import store from './STORE'

describe('List component', () => {
    //SMOKE TEST
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    //SNAPSHOT
    it('renders correctly with no cards', () => {
        const tree = renderer
            .create(<List header='A test list' />)
            .toJSON()
    expect(tree).toMatchSnapshot()
    })
    it('renders correctly with no cards', () => {
        const tree = renderer
            .create(<List header='A test list' cards={store.lists[0].cardIds.map(id => store.allCards[id])}/>)
            .toJSON()
    expect(tree).toMatchSnapshot()
    })
})