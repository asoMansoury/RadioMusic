import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class SigntUP extends Component{
    render(){
        return(
            <div className="card-body collapse in">
            <div className="card-block">
                <form className="form-horizontal form-simple" action="index.html" novalidate>
                    <fieldset className="form-group position-relative has-icon-left mb-1">
                        <input type="text" className="form-control form-control-lg input-lg" id="user-name" placeholder="User Name"></input>
                        <div className="form-control-position">
                            <i className="icon-head"></i>
                        </div>
                    </fieldset>
                    <fieldset className="form-group position-relative has-icon-left mb-1">
                    <input type="email" className="form-control form-control-lg input-lg" id="user-email" placeholder="Your Email Address" required></input>
                        <div className="form-control-position">
                            <i className="icon-mail6"></i>
                        </div>
                    </fieldset>
                    <fieldset className="form-group position-relative has-icon-left">
                    <input type="password" className="form-control form-control-lg input-lg" id="user-password" placeholder="Enter Password" required></input>
                        <div className="form-control-position">
                            <i className="icon-key3"></i>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                        <i className="icon-unlock2"></i> Register
                    </button>
                </form>
            </div>
            <p className="text-xs-center">Already have an account ? 
                <Link to="/" className="card-link">Login</Link>
            </p>
        </div>
        )
    }
}

