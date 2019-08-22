import React,{Component} from 'react';
import Index from './IndexComponents/index';
import Login from './LoginPage/Login';
export default class App extends Component{
    constructor(props){
        super(props);
    }


    render(){
        if(this.props.isLogin===true){
            return(
                <Index></Index>
            )
        }else{
            return(
                <Login></Login>
            )
        }

    }
}
