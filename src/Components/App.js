import React,{Component} from 'react';
import Index from './IndexComponents/index';
import Authentication from './LoginPage/Authentication';
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
                <Authentication></Authentication>
            )
        }

    }
}
