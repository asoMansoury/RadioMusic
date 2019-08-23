import React,{Component} from 'react';
import './../linkCssStyles';
import LoginFormInput from './LoginFormInput';
import RecoverPassword from './../RecoverPasswordPage/RecoverPassword';
import CardTitle from '../CardTitle';
import CardFooter from '../CardFooter';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import SignUpPage from './../SignUpPage/SignUp';
import {LoginFormInputPath,RecoverFormInputPath,SignUpFormInputPath, LoginPath} from './../../constFile/pathRouteNames';

class Login extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount () {
        this.loadScripts();
    }

    loadScripts(){
        document.body.setAttribute("class","vertical-layout vertical-menu 1-column  blank-page blank-page");
        document.body.setAttribute("data-open","click");
        document.body.setAttribute("data-menu","vertical-menu");
        document.body.setAttribute("data-col","1-column")
    }

    render(){
        return(
            <div>        
                <div className="app-content content container-fluid">
                    <div className="content-wrapper">
                        <div className="content-header row"></div>
                        <div className="content-body">
                        <section className="flexbox-container">
                            <div className="col-md-4 offset-md-4 col-xs-10 offset-xs-1  box-shadow-2 p-0">
                            <div className="card border-grey border-lighten-3 m-0">
                            <BrowserRouter>
                                    <CardTitle></CardTitle>
                                    <div className="routeContainer">
                                        
                                            <Route path={LoginPath}  component={LoginFormInput}></Route>
                                            <Route path={RecoverFormInputPath}  component={RecoverPassword}></Route>
                                            <Route path={SignUpFormInputPath}  component={SignUpPage}></Route>
                                    </div>
                                    
                                    <CardFooter></CardFooter>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
