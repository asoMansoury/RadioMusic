import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {LoginPath} from './../../constFile/pathRouteNames';
import {connect} from 'react-redux';
import {validationAction,userLogin} from './../../../redux/actions/actionTypes';
import axios from 'axios';

 class SigntUP extends Component{
     constructor(props){
         super(props);

         this.state ={
            errorMsg:''
        }
     }

     componentDidMount(){

     }

     handleChange = (e)=>{
        this.props.handleValidationFunc(e.target); 
    }

    async  handleSubmit(){
        if(this.props.data.userName===""|| this.props.data.password===""||this.props.data.userEmail===""){
            this.setState({
                errorMsg:'Please Required neccessary fields'
            });
        }else{
            try {
                let response = await  axios.post('http://localhost:53094/api/userapi/Login',{
                    userName: this.props.data.nationalCode,
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
                    this.setState({
                        errorMsg:"response is not 200!"
                    })
                }
            } catch (error) {
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
                    <fieldset className="form-group position-relative has-icon-left mb-1">
                        <input type="text" value={this.props.userName} onChange={e=>this.handleChange(e)} className="form-control form-control-lg input-lg" id="userName" placeholder="User Name" ></input>
                        <div className="form-control-position">
                            <i className="icon-head"></i>
                        </div>
                        <span style={{color: "red"}}>{this.props.data.errors["userName"]}</span>
                    </fieldset>
                    <fieldset className="form-group position-relative has-icon-left mb-1">
                        <input type="email" value={this.props.data.userEmail} className="form-control form-control-lg input-lg" onChange={e=>this.handleChange(e)} id="userEmail" placeholder="Your Email Address" ></input>
                        <div className="form-control-position">
                            <i className="icon-mail6"></i>
                        </div>
                        <span style={{color: "red"}}>{this.props.data.errors["userEmail"]}</span>
                    </fieldset>
                    <fieldset className="form-group position-relative has-icon-left">
                    <input type="password" value={this.props.data.password} className="form-control form-control-lg input-lg" onChange={e=>this.handleChange(e)} id="password" placeholder="Enter Password" ></input>
                        <div className="form-control-position">
                            <i className="icon-key3"></i>
                        </div>
                        <span style={{color: "red"}}>{this.props.data.errors["password"]}</span>
                    </fieldset>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>this.handleChange.bind(this)}>
                        <i className="icon-unlock2"></i> Register
                    </button>
                </form>
            </div>
            <p className="text-xs-center">Already have an account ? 
                <Link to={LoginPath} className="card-link">Login</Link>
            </p>
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

export default connect(mapStateToProps,mapDispatchToProps)(SigntUP);
