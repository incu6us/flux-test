import React, {Component} from 'react';
import * as appActions from '../actions/index';
import appStore from '../stores/store';

export default class App extends Component {

    constructor (props) {
        super(props);
        appStore.addListener(this._handleStoreChange.bind(this));
        this.state = {number: 10};
    }

    _handleStoreChange () {
        this.setState(this.storeState);
    }

    get storeState () {
        return {
            number: appStore.number
        };
    }

    render() {
        const {
            number
        } = this.state;
        return (
            <div className="container form-group">
                <button className="btn btn-success" onClick={ this._handleClick.bind(this, number) }>click</button>
                <span class="badge">{ number }</span>
            </div>
        );
    }

    _handleClick (number) {
        appActions.addClick(number);
    }
}

