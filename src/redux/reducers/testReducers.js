export const test = (state=[],action)=>{
    switch (action.type) {
        case 'TEST':
            console.log("hello");
            return true;
    
        default:
            return false;
    }
}