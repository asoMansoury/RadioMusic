
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {SignUpFormInputPath,RecoverFormInputPath} from './../constFile/pathRouteNames';
export default class CardFooter extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="card-footer">
                <div className="">
                    <p className="float-sm-left text-xs-center m-0">
                        
                        <Link to={RecoverFormInputPath} className="card-link">Recover Password</Link>
                    </p>
                    <p className="float-sm-right text-xs-center m-0">New to Robust? 
                        <Link to={SignUpFormInputPath} className="card-link">Sign Up</Link>
                    </p>
                </div>
            </div>
        )
    }
}


