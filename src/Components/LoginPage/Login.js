import React,{Component} from 'react';
import './linkCssStyles';
import LoginFormInput from './LoginFormInput';
import CardTitle from './CardTitle';
import CardFooter from './CardFooter';

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
                                    <CardTitle></CardTitle>
                                    <LoginFormInput></LoginFormInput>
                                    <CardFooter></CardFooter>
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
