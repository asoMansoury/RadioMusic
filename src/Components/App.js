import React,{Component} from 'react';
import './IndexComponents/linkFiles';
import NavBar from './IndexComponents/Navbar';
import SideBar from './IndexComponents/SideBar';
import ContentIndexPage from './IndexComponents/ContentIndexPage';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {testAction} from './../redux/actions/actionTypes';
import Login from './Login';
import { dispatch } from 'C:/Users/asoPC/AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range';
class App extends Component{
    constructor(props){
        super(props);
        this.loadScripts = this.loadScripts.bind(this);
    }

    componentDidMount () {
        this.props.setTrue();
        // if(this.props.isLogin===false){
        //     this.loadScripts("./assets/app-assets/js/core/libraries/jquery.min.js");
        //     this.loadScripts("./assets/app-assets/vendors/js/ui/tether.min.js");
        //     this.loadScripts("./assets/app-assets/js/core/libraries/bootstrap.min.js");
        //     this.loadScripts("./assets/app-assets/vendors/js/ui/perfect-scrollbar.jquery.min.js");
        //     this.loadScripts("./assets/app-assets/vendors/js/ui/unison.min.js");
        //     this.loadScripts("./assets/app-assets/vendors/js/ui/blockUI.min.js");
        //     this.loadScripts("./assets/app-assets/vendors/js/ui/jquery.matchHeight-min.js");
        //     this.loadScripts("./assets/app-assets/vendors/js/ui/screenfull.min.js");
        //     this.loadScripts("./assets/app-assets/vendors/js/extensions/pace.min.js");
        //     this.loadScripts("./assets/app-assets/vendors/js/charts/chart.min.js");
        //     this.loadScripts("./assets/app-assets/js/core/app-menu.js");
        //     this.loadScripts("./assets/app-assets/js/core/app.js");
        //     this.loadScripts("./assets/app-assets/js/scripts/pages/dashboard-lite.js");
        // }  else{
        //     console.log(this.props.isLogin);
        // }
    }

    loadScripts(url){
        const script = document.createElement("script");
        script.src=url;
        script.async = true;
        var bodyTag =  document.getElementById("bodyApp");
        // bodyTag.appendChild(script);
       document.body.appendChild(script);
        // document.body.appendChild(script);
    }



    render(){
        return(
            <div>
                <NavBar></NavBar>
                <div className="routeContainer">
                    <Switch>
                        <Route path="/" exact={true} component={ContentIndexPage}></Route>
                        <Route path="/login" component={Login} ></Route>
                    </Switch>
                </div>
                <SideBar></SideBar>
                {/* <ContentIndexPage></ContentIndexPage> */}
                
                <footer className="footer footer-static footer-light navbar-border">
                    <p className="clearfix text-muted text-sm-center mb-0 px-2"><span className="float-md-left d-xs-block d-md-inline-block">Copyright  &copy; 2017 <a href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent" target="_blank" className="text-bold-800 grey darken-2">PIXINVENT </a>, All rights reserved. </span><span className="float-md-right d-xs-block d-md-inline-block">Hand-crafted & Made with <i className="icon-heart5 pink"></i></span></p>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        data:state.test
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setTrue:()=>{
            dispatch(testAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

