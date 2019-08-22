
import React,{Component} from 'react';

export default class CardFooter extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="card-footer">
                <div className="">
                    <p className="float-sm-left text-xs-center m-0">
                        <a href="recover-password.html" className="card-link">Recover password</a>
                    </p>
                    <p className="float-sm-right text-xs-center m-0">New to Robust? 
                        <a href="register-simple.html" className="card-link">Sign Up</a>
                    </p>
                </div>
            </div>
        )
    }
}


