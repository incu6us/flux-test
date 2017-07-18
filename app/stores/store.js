import { Store } from 'flux/utils';
import appDispatcher from '../utils/app-dispathcer';
import * as actionTypes from '../utils/action-types';

class AppStore extends Store {

    constructor (dispatcher) {
        super(dispatcher);
        this._number=0;
    }

    get number () {
        return this._number;
    }

    __onDispatch (action) {
        switch (action.type) {
            case actionTypes.ACTION_CLICK:
                this._number = action.value + 1;
                this.__emitChange();
            break;
        }
    }


}

export default new AppStore(appDispatcher);
