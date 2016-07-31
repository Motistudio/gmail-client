const initialState = {
  open: true,
  alive: true,
  minimized: false
};
module.exports = function(state, action){
  state = state || initialState;
  console.log('reduce');
  switch(action.type){
    case 'CLOSE_APP':
      return Object.assign({}, state, {open: false, alive: false});
    case 'CLOSE_WINDOW':
      return Object.assign({}, state, {open: false});
    case 'MINIMIZE_APP':
      return Object.assign({}, state, {minimized: true});
    default:
      return state;
  }
};
