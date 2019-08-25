import {Validation} from './../constActions';


let initValue ={
    userName:'',
    password:'',
    userEmail:'',
    errors:{
        userName:'',
        password:'',
        userEmail:''
    },
    errorMsg:'',
    isValidForm:false
}
export const validationReducer =(state=initValue, action)=>{

    switch (action.type) {
        case Validation:
            let targetID = action.target.id.toString();
            let targetValue = action.target.value.toString();
            if(targetValue==="")
                state.errors[targetID] = "Cannot be empty"
            else
                state.errors[targetID] = "";
            return {
                ...state,
                [targetID]:targetValue,
                errors:{
                    ...state.errors
                }
            };
    
        default:
            return state;
    }
}