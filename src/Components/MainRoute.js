import React,{Component} from 'react';
import {Route,Switch,Router} from 'react-router-dom';
import Login from './LoginPage/Login/Login';
import Index from './IndexComponents/index';
import {LoginPath,IndexPath} from './constFile/pathRouteNames';
export default class MainRoute extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                    <Route path={IndexPath} exact={true}  component={Index}></Route>
                    <Route path={LoginPath}   component={Login}></Route>
            </div>
        )
    }
}
