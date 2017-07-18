import * as appDispatcher from '../utils/app-dispathcer';
import * as actionTypes from '../utils/action-types';


export default function addClick (value) {
    appDispatcher.dispatch({
        type: actionTypes.ACTION_CLICK,
        value
    });
};
