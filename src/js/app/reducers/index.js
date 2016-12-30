import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

//import reducers
import user from './user'

//export combined reducers
export default combineReducers({
  user,
  form: formReducer
})
