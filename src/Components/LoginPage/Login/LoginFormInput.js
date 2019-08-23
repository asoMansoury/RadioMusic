import React ,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {validationAction,userLogin} from './../../../redux/actions/actionTypes';
import {RecoverFormInputPath} from './../../constFile/pathRouteNames';
import {IndexPath} from './../../constFile/pathRouteNames';

class LoginFormInput extends Component{
    constructor(props){
        super(props);
        this.state ={
            errorMsg:''
        }
    }

    componentDidMount(){
        console.log(this.props);
        if(this.props.userStatus.isLogin===true){
            this.props.history.push("/")
        }
    }

    handleChange = (e)=>{
        this.props.handleValidationFunc(e.target);
        
    }

     async Login(){
         if(this.props.data.nationalCode===""|| this.props.data.password===""){
            this.setState({
                errorMsg:'Username & Password is required'
            });
        }else{
            try {
                let response = await  axios.post('http://localhost:53094/api/userapi/Login',{
                    nationalCode: this.props.data.nationalCode,
                    password: this.props.data.password
                });
                
                if(response.status==200){
                    var data = response.data;
                    
                    if(data.isError === true)
                    {
                        this.setState({
                            errorMsg:data.Errors.Message
                        })
                    }else{
                        this.props.setUserLoginFunc(true,data);
                        this.props.history.push("/")
                        // return <Redirect push={true} to="/"></Redirect>
                    }
                }else{
                    
                }
            } catch (error) {
                console.log(error);
                this.setState({
                            errorMsg:"Server Is Down!"
                })
            }
        }
    }



    render(){
        return(
            <div className="card-body collapse in">
                <div className="card-block">
                    <form className="form-horizontal form-simple" action="index.html" novalidate>
                        <fieldset className="form-group position-relative has-icon-left mb-0">
                            <input type="text" value={this.props.nationalCode} onChange={e=>this.handleChange(e)} className="form-control form-control-lg input-lg" id="nationalCode" placeholder="Your Username" ></input>
                            <div className="form-control-position">
                                <i className="icon-head"></i>
                            </div>
                            <span style={{color: "red"}}>{this.props.data.errors["nationalCode"]}</span>
                        </fieldset>
                        <fieldset className="form-group position-relative has-icon-left">
                            <input type="password" value={this.props.password} onChange={e=>this.handleChange(e)} className="form-control form-control-lg input-lg" id="password" placeholder="Enter Password"></input>
                                <div className="form-control-position">
                                    <i className="icon-key3"></i>
                                </div>
                                <span style={{color: "red"}}>{this.props.data.errors["password"]}</span>
                        </fieldset>
                        <fieldset className="form-group row">
                            <div className="col-md-6 col-xs-12 text-xs-center text-md-left">
                                <fieldset>
                                    <input type="checkbox" id="remember-me" className="chk-remember"></input>
                                    <label for="remember-me"> Remember Me</label>
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-xs-12 text-xs-center text-md-right">
                                <Link to={RecoverFormInputPath} className="card-link">Forgot Password?</Link>
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

const mapStateToProps = (state) =>{
    return {
        data:state.validationReducer,
        userStatus:state.UserIsLogin
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        handleValidationFunc:(Target)=>{
            dispatch(validationAction(Target))
        },
        setUserLoginFunc:(isLogin,userInformation)=>{
            dispatch(userLogin(isLogin,userInformation))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginFormInput);

