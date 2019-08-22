import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class RecoverPassword extends Component{
    render(){
        return(
            <div className="card-body collapse in">
            <div className="card-block">
                <form className="form-horizontal" action="login-simple.html" novalidate>
                    <fieldset className="form-group position-relative has-icon-left">
                        <input type="email" className="form-control form-control-lg input-lg" id="user-email" placeholder="Your Email Address" required></input>
                        <div className="form-control-position">
                            <i className="icon-mail6"></i>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary btn-lg btn-block"><i className="icon-lock4"></i> Recover Password</button>
                </form>
            </div>
            <p className="text-xs-center">Back To Login : 
                <Link to="/" className="card-link">Login</Link>
            </p>
        </div>
        )
    }
}



