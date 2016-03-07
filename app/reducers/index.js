import {UPDATE_MESSAGE, ADD_MESSAGE} from 'actions'

export default function (initialState) {
  return (state=initialState, action) => {
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
}
