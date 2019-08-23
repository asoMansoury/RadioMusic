import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
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
                <Switch>
                    <Route path={IndexPath} exact={true} component={Index}></Route>
                    <Route path={LoginPath} exact={true}  component={Login}></Route>
                </Switch>
            </div>
        )
    }
}
