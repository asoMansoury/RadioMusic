
const initState = {
    test:10
}
export const test = (state=initState,action)=>{
    switch (action.type) {
        case 'TEST':
            return {
                test:action.payload
            }
    
        default:
            return state;
    }
}