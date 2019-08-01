import types from './action-type.js'

//init state default
const defaultState = {
  name:'',
  userId:''
}



//reducer
export default (state = defaultState , action = {}) => {
  switch(action.type){
    case types.SAVEUSER:
      return {...state, ...action.userInfo};
    case types.CLEARUSER:
      return {...state, ...defaultState};
    default:
      return state;
  }
}