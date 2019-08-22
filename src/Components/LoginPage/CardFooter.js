
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class CardFooter extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="card-footer">
                <div className="">
                    <p className="float-sm-left text-xs-center m-0">
                        
                        <Link to="/Recover" className="card-link">Recover Password</Link>
                    </p>
                    <p className="float-sm-right text-xs-center m-0">New to Robust? 
                        <Link to="/SignUP" className="card-link">Sign Up</Link>
                    </p>
                </div>
            </div>
        )
    }
}


