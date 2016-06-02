const initialState = {
  open: true,
  alive: true
};
module.exports = function(state, action){
  state = state || initialState;
  console.log('reduce');
  switch(action.type){
    case 'CLOSE_APP':
      return Object.assign({}, state, {open: false, alive: false});
    case 'CLOSE_WINDOW':
      return Object.assign({}, state, {open: false});
    default:
      return state;
  }
};
