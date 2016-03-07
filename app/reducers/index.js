import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import {UPDATE_MESSAGE, ADD_MESSAGE} from 'actions'
import countReducer from '../redux/modules/counter'

const initialState = {
    messages: [],
    currentMessage: ""
}

export const messageReducer = function(state=initialState, action) {
    switch(action.type) {
    case UPDATE_MESSAGE:
        return Object.assign({}, state, { currentMessage: action.message });
    case ADD_MESSAGE:
        const text = state.currentMessage.trim();

        if (text) {
            let messages = state.messages.map(message => Object.assign({}, message));
            messages.push({id: messages.length + 1, text});

            return {
                messages,
                currentMessage: ''
            };
        }
    default:
        return state;
    }
}

export default (combineReducers({countReducer,
                                 form: formReducer,
                                 messageReducer,
                                 routing: routerReducer}));
