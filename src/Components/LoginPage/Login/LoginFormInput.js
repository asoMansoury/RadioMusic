import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class LoginFormInput extends Component{
    constructor(props){
        super(props);
    }

    async  Login(){
        axios.post('http://localhost:53094/api/userapi/Login',{
            nationalCode: "2860122281",
            password: "123456"
        },
        {
            headers: { 
                "Accept": "application/json " ,
                 "Content-Type":"application/json"}
        }).then(function (response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        })
    }
    render(){
        return(
            <div className="card-body collapse in">
                <div className="card-block">
                    <form className="form-horizontal form-simple" action="index.html" novalidate>
                        <fieldset className="form-group position-relative has-icon-left mb-0">
                            <input type="text" className="form-control form-control-lg input-lg" id="user-name" placeholder="Your Username" required></input>
                            <div className="form-control-position">
                                <i className="icon-head"></i>
                            </div>
                        </fieldset>
                        <fieldset className="form-group position-relative has-icon-left">
                            <input type="password" className="form-control form-control-lg input-lg" id="user-password" placeholder="Enter Password" required></input>
                                <div className="form-control-position">
                                    <i className="icon-key3"></i>
                                </div>
                        </fieldset>
                        <fieldset className="form-group row">
                            <div className="col-md-6 col-xs-12 text-xs-center text-md-left">
                                <fieldset>
                                    <input type="checkbox" id="remember-me" className="chk-remember"></input>
                                    <label for="remember-me"> Remember Me</label>
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-xs-12 text-xs-center text-md-right">
                                <Link to="/Recover" className="card-link">Forgot Password?</Link>
                            </div>
                        </fieldset>
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.Login}>
                            <i className="icon-unlock2"></i> Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

