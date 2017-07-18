import { Store } from 'flux/utils';
import appDispatcher from '../utils/app-dispathcer';

class AppStore extends Store {

    constructor (dispatcher) {
        super(dispatcher);
        this._number= 0;
    }

    get number () {
        return this._number;
    }

    __onDispatch (action) {
        console.log(action);
    }


}

export default new AppStore(appDispatcher);
