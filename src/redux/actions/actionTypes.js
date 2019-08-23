import {Validation,UserLogin} from './../constActions';
let ID = 0;
export const testAction = () =>{
    return {
        type:"TEST",
        payload:++ID
    }
}

export const validationAction =(target) =>{
    return {
        type:Validation,
        target:target
    }
}

export const userLogin =(isLogin=false,userInformation)=>{
    return {
        type:UserLogin,
        isLogin:isLogin,
        userInformation:userInformation
    }
}