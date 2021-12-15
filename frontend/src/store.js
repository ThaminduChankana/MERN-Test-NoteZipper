import { createStore, combineReducers, applyMiddleware } from 'redux'; /*createStore - creating store,
 combineReducers - combine all reducers into one unit,applyMiddleware - helps to add middle ware to application */
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from './reducers/notesReducer';

const reducer = combineReducers({
    //this will contain our reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
  userUpdate : userUpdateReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")):null

const initialState = {
  userLogin:{userInfo :userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;