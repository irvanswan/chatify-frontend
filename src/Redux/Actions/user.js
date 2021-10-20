import axios from 'axios'

const GetInfoUserRequest = () => {return {type: 'GET_INFO_USER_REQUEST'}}
const GetInfoUserSuccess = (data) => {return {type : 'GET_INFO_USER_SUCCESS', payload : data}}
const GetInfoUserError = (err) => {return{type : 'GET_INFO_USER_ERROR',payload : err}}

export const GetInfoUser = (userToken, id_chatroom, id_user)=>{
    return (dispatch)=>{
        dispatch(GetInfoUserRequest())
        return axios.get(`${process.env.REACT_APP_API_URL}users/?id_user=${id_user}&id_chatroom=${id_chatroom}`,{
            headers: {
                'user-token': userToken
            }
        }).then((res) => {
            dispatch(GetInfoUserSuccess(res.data.data))
        }).catch((err) => {
            dispatch(GetInfoUserError(err.message))
        })   
    }
}

const GetProfileSuccess = (data) =>{ return {type : 'GET_PROFILE_SUCCESS', payload : data}}
const GetProfileFailed = (error)=>{return {type : 'GET_PROFILE_FAILED', payload : error}}

export const GetProfile = (id_user)=>{
    return (dispatch)=>{
        return axios.get(`${process.env.REACT_APP_API_URL}users/${id_user}`).then((res)=>{
            dispatch(GetProfileSuccess(res))
        }).catch((err)=>{
            dispatch(GetProfileFailed(err))
        })
    }
}