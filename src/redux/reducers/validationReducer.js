import {Validation} from './../constActions';


let initValue ={
    nationalCode:'',
    password:'',
    errors:{
        nationalCode:'',
        password:''
    },
    errorMsg:'',
    isValidForm:false
}
export const vlaidationReducer =(state=initValue, action)=>{

    switch (action.type) {
        case Validation:
            let targetID = action.target.id.toString();
            let targetValue = action.target.value.toString();
            let errors = {};
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