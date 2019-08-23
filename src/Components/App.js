import React,{Component} from 'react';
import Index from './IndexComponents/index';
import Authentication from './LoginPage/Authentication';
import MainRoute from './MainRoute';

export default class App extends Component{
    constructor(props){
        super(props);
    }


    render(){
        if(this.props.isLogin===false){
            return(
                <div>
                    <MainRoute></MainRoute>
                    <Index></Index>
                </div>
            )
        }else{
            return(
                <div>
                    <MainRoute></MainRoute>
                    <Authentication></Authentication>
                </div>
            )
        }
    }
}
