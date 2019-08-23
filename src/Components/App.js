import React,{Component} from 'react';
import Index from './IndexComponents/index';
import Authentication from './LoginPage/Authentication';
import MainRoute from './MainRoute';

export default class App extends Component{
    constructor(props){
        super(props);
    }


    render(){
        if(this.props.isLogin===true){
            return(
                <div>
                    <Index></Index>
                </div>
            )
        }else{
            return(
                <div>
                    <Authentication></Authentication>
                </div>
            )
        }
    }
}
