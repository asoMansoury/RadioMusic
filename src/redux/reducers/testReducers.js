export const test = (state=[],action)=>{
    console.log(action);
    switch (action.type) {
        case 'TEST':
            return true;
    
        default:
            return false;
    }
}