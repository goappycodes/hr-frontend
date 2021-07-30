import axios from 'axios'
import { EMPLOYEE_LOGIN_FAIL, EMPLOYEE_LOGIN_REQUEST, EMPLOYEE_LOGIN_SUCCESS, EMPLOYEE_LOGOUT } from '../constants/hrApp'


export const login = (email, password)=> async (dispatch)=>{
    try {
        dispatch({
            type:EMPLOYEE_LOGIN_REQUEST
        })
        const config= {
            headers:{
                'content-type': 'application/json'
            },
        }
        const {data} = await axios.post('employee/login-employee',{email,password},config)
        dispatch({
            type: EMPLOYEE_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('employeeInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: EMPLOYEE_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout =()=>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type: EMPLOYEE_LOGOUT})
}