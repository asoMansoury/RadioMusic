export default class LoginApi {
    constructor(){
        
    }
    async LoginFuncAsync(userName,Password) {
        let body =  {
            nationalCode: "2860122281",
            password: "123456"
        };
        let data = {
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }
        let response =await fetch('http://localhost:53094/api/userapi/Login');
        console.log(response);
        return true;
    }
}