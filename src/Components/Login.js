import React,{Component} from 'react';
import './IndexComponents/linkFiles';

class Login extends Component{

    componentDidMount () {
        // const script = document.createElement("script");
        // script.src = "./../app.js";
        // script.async = true;
        // document.body.appendChild(script);
    }

    render(){
        return(
            <div>
                <footer className="footer footer-static footer-light navbar-border">
                    <p className="clearfix text-muted text-sm-center mb-0 px-2"><span className="float-md-left d-xs-block d-md-inline-block">Copyright  &copy; 2017 <a href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent" target="_blank" className="text-bold-800 grey darken-2">PIXINVENT </a>, All rights reserved. </span><span className="float-md-right d-xs-block d-md-inline-block">Hand-crafted & Made with <i className="icon-heart5 pink"></i></span></p>
                </footer>
            </div>
        )
    }
}

export default Login;
