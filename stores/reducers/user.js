const initialState = {
  mails: []
};
module.exports = function(state, action){
  state = state || initialState;
  switch(action.type){
    case 'ADD_MAIL':
      return state.mails.contact(action.mails);
    default:
      return state;
  }
};
