import React,{Component} from 'react';

import NavBar from './Navbar';
import SideBar from './SideBar';
import ContentIndexPage from './ContentIndexPage';
import {connect} from 'react-redux';
import ManageRoles from './Roles/ManageRoles';
import {Route,Link} from 'react-router-dom';
import ManageUsers from './Users/ManageUsers';
import {LoginPath,ManageUsersPath,ManageRolesPath, IndexPath} from './../constFile/pathRouteNames';

class Index extends Component{
    constructor(props){
        super(props);
        this.loadScripts = this.loadScripts.bind(this);
        let baseUrl = window.location.origin;
        // this.loadScripts(baseUrl+"/assets/app-assets/js/core/libraries/jquery.min.js");
        this.loadScripts("http://code.jquery.com/jquery-1.11.1.min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/vendors/js/ui/perfect-scrollbar.jquery.min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/vendors/js/ui/unison.min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/vendors/js/ui/screenfull.min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/vendors/js/extensions/pace.min.js");



    }

    componentWillMount(){
        let baseUrl = window.location.origin;
        this.loadCss(baseUrl+"/assets/app-assets/images/ico/apple-icon-60.png");
        this.loadCss(baseUrl+"/assets/app-assets/images/ico/apple-icon-76.png");
        this.loadCss(baseUrl+"/assets/app-assets/images/ico/apple-icon-120.png");
        this.loadCss(baseUrl+"/assets/app-assets/images/ico/apple-icon-152.png");
        this.loadCss(baseUrl+"/assets/app-assets/images/ico/favicon.ico");
        this.loadCss(baseUrl+"/assets/app-assets/images/ico/favicon-32.png");

        this.loadCss(baseUrl+"/assets/app-assets/css/bootstrap.css");
        this.loadCss(baseUrl+"/assets/app-assets/fonts/icomoon.css");
        this.loadCss(baseUrl+"/assets/app-assets/fonts/flag-icon-css/css/flag-icon.min.css");
        this.loadCss(baseUrl+"/assets/app-assets/vendors/css/extensions/pace.css");
        this.loadCss(baseUrl+"/assets/app-assets/css/bootstrap-extended.css");
        this.loadCss(baseUrl+"/assets/app-assets/css/app.css");
        this.loadCss(baseUrl+"/assets/app-assets/css/colors.css");
        this.loadCss(baseUrl+"/assets/app-assets/css/core/menu/menu-types/vertical-menu.css");
        this.loadCss(baseUrl+"/assets/app-assets/css/core/menu/menu-types/vertical-overlay-menu.css");
        this.loadCss(baseUrl+"/assets/app-assets/css/core/colors/palette-gradient.css");
        this.loadCss(baseUrl+"/assets/assets/css/style.css");
    }

    componentDidMount () {
        let baseUrl = window.location.origin;
        if(this.props.userStatus.isLogin===false){
            this.props.history.push(LoginPath);
        }
        this.loadScripts(baseUrl+"/assets/app-assets/vendors/js/ui/tether.min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/js/core/libraries/bootstrap.min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/vendors/js/ui/blockUI.min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/vendors/js/ui/jquery.matchHeight-min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/vendors/js/charts/chart.min.js");
        this.loadScripts(baseUrl+"/assets/app-assets/js/core/app-menu.js");
        this.loadScripts(baseUrl+"/assets/app-assets/js/core/app.js");
        this.loadScripts(baseUrl+"/assets/app-assets/js/scripts/pages/dashboard-lite.js");

        document.body.removeAttribute("data-open");
        document.body.removeAttribute("data-menu");
        document.body.removeAttribute("data-col");
        document.body.setAttribute("class","pace-done fixed-navbar vertical-menu 2-columns vertical-layout pace-done menu-expanded pace-done");
    }

    loadScripts(url){
        const script = document.createElement("script");
        script.src=url;
        script.async = true;

        document.body.appendChild(script);

    }

    loadCss(url){
        const sheet = document.createElement("link");
        sheet.href = url;
        sheet.async = true;
        sheet.rel = 'stylesheet';
        sheet.type = 'text/css';
        document.head.appendChild(sheet);
    }


    render(){
        return(
            <div>
                <NavBar ></NavBar>
                <div className="routeContainer">
                        <Route path={`${this.props.match.path}`} exact={true}   component={ContentIndexPage} ></Route>
                        <Route path={`${this.props.match.path}${IndexPath}`} exact={true}  component={ContentIndexPage} ></Route>
                        <Route path={`${this.props.match.path}${ManageRolesPath}`} exact={true}   component={ManageRoles} ></Route>                    
                        <Route path={`${this.props.match.path}${ManageUsersPath}`} exact={true}   component={ManageUsers} ></Route>                    
                </div>  
                
                <SideBar></SideBar>
                
                <footer className="footer footer-static footer-light navbar-border">
                    <p className="clearfix text-muted text-sm-center mb-0 px-2"><span className="float-md-left d-xs-block d-md-inline-block">Copyright  &copy; 2017 <a href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent" target="_blank" className="text-bold-800 grey darken-2">PIXINVENT </a>, All rights reserved. </span><span className="float-md-right d-xs-block d-md-inline-block">Hand-crafted & Made with <i className="icon-heart5 pink"></i></span></p>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        userStatus:state.UserIsLogin
    }
}

export default connect(mapStateToProps,null)(Index);
