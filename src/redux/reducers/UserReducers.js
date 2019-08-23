import {UserLogin} from './../constActions';
const initState = {
    isLogin : false,
    userInformation:{}
}
export const UserIsLogin =(state=initState, action)=>{

    switch (action.type) {
        case UserLogin:
            state={
                isLogin:action.isLogin,
                userInformation : action.userInformation
            }
            return state;
    
        default:
            return false;
    }
}