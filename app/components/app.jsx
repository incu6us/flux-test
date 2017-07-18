import React, {Component} from 'react';
import appActions from '../actions/index';
import appStore from '../stores/store';

export default class App extends Component {

    constructor (props) {
        super(props);
        appStore.addListener(this._handleStoreChange.bind(this));
    }

    _handleStoreChange () {
        this.setState(this.storeState);
    }

    get storeState () {
        return {
            number: appStore.number
        }
    }

    render() {
        console.log(this.state);
        const {
            number
        } = this.state;
        return (
            <div className="container form-group">
                <button className="btn btn-success" onClick={ this._handleClick.bind(this, number) }>click</button>
                <span className="alert label">{ number }</span>
            </div>
        );
    }

    _handleClick (number) {
        appActions.addClick(number);
    }
}

