import request from '@/util/request'
import { ADD_USERNAME } from './actionTypes'


export function fetchLogin (options) {
    return {
        type: ADD_USERNAME,
        payload: request('/api/user/login', options),
    }
}

//actionTypes.js
//export const ADD_USERNAME = 'add_username'

//import { ADD_USERNAME} from '../actionTypes'

//const defaultState = {
//    username: '',
//    password: ''
//}

//export default (state = defaultState, action) => {
//    switch(action.type) {
//        case ADD_USERNAME :
//            return {...state, ...{username: action.username, password: action.password}}

//        default :
//            return state
//    }
//}
