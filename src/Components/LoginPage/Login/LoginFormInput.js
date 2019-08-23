import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class LoginFormInput extends Component{
    constructor(props){
        super(props);
        this.state ={
            nationalCode:'',
            password:'',
            errors:{},
            errorMsg:'',
            isValidForm:false
        }
    }

    handleChange = (e)=>{
        let targetID = e.target.id.toString();
        let targetValue = e.target.value.toString();
        this.handleValidation(targetID,targetValue);
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    handleValidation(nameInput,valueInput){
        let errors = {};
        if(valueInput==="")
            errors[nameInput] = "Cannot be empty"
        else
            errors[nameInput] = "";

        this.setState({
            errors:errors,
            errorMsg:''
        });
    }

      Login(){
        if(this.state.nationalCode===""|| this.state.password===""){
            this.setState({
                errorMsg:'Username & Password is required'
            });
        }else{
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
    }



    render(){
        return(
            <div className="card-body collapse in">
                <div className="card-block">
                    <form className="form-horizontal form-simple" action="index.html" novalidate>
                        <fieldset className="form-group position-relative has-icon-left mb-0">
                            <input type="text" value={this.state.nationalCode} onChange={e=>this.handleChange(e)} className="form-control form-control-lg input-lg" id="nationalCode" placeholder="Your Username" ></input>
                            <div className="form-control-position">
                                <i className="icon-head"></i>
                            </div>
                            <span style={{color: "red"}}>{this.state.errors["nationalCode"]}</span>
                        </fieldset>
                        <fieldset className="form-group position-relative has-icon-left">
                            <input type="password" value={this.state.password} onChange={e=>this.handleChange(e)} className="form-control form-control-lg input-lg" id="password" placeholder="Enter Password"></input>
                                <div className="form-control-position">
                                    <i className="icon-key3"></i>
                                </div>
                                <span style={{color: "red"}}>{this.state.errors["password"]}</span>
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
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.Login.bind(this)}>
                            <i className="icon-unlock2"></i> Login
                        </button>
                        <span style={{color: "red"}}>{this.state.errorMsg}</span>
                    </form>
                </div>
            </div>
        )
    }
}

