import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { hrLoginReducer, registerReducer, verificationReducer } from './reducers/HrReducers';
import { EmployeeLoginReducer } from './reducers/EmployeeReducers';

const reducer = combineReducers({
 hrLogin: hrLoginReducer,
 employeeLogin:EmployeeLoginReducer,
 register :registerReducer,
 verification : verificationReducer,
})

const hrInfoFromStorage = localStorage.getItem('hrInfo') ? JSON.parse(localStorage.getItem('hrInfo')) : null
const employeeInfoFromStorage = localStorage.getItem('employeeInfo') ? JSON.parse(localStorage.getItem('employeeInfo')) : null

const initialState = {
hrLogin : {hrInfo:hrInfoFromStorage},
employeeLogin:{employeeLogin:employeeInfoFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;