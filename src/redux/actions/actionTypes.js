let ID = 1;
export const testAction = () =>{
    return {
        type:"TEST",
        payload:ID++
    }
}