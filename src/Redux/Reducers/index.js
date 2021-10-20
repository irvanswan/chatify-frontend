import { combineReducers } from 'redux'
import { UserLogin,GetInfoUser,UserRegister, UserLogout, GetProfile } from './users'
import { ChatList } from './chatlist'
import { GetMessage, SendMessage } from './message'

const reducers = combineReducers({
    UserLogin, ChatList, GetMessage, SendMessage,GetInfoUser,UserRegister, GetProfile
})

export default reducers