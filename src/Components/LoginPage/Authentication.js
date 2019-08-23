import React,{Component} from 'react';
import Login from './Login/Login';
import {Redirect} from 'react-router-dom';
import {LoginPath} from './../constFile/pathRouteNames';

export default class App extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Redirect to={LoginPath}></Redirect>
        )

    }
}
