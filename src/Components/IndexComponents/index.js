import React,{Component} from 'react';
import './linkFiles';
import NavBar from './Navbar';
import SideBar from './SideBar';
import ContentIndexPage from './ContentIndexPage';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {testAction} from './../../redux/actions/actionTypes';

class Index extends Component{
    constructor(props){
        super(props);
        this.loadScripts = this.loadScripts.bind(this);
    }

    componentDidMount () {
        this.loadScripts();
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

                // console.log("dispatch : ",this.props.dispatch({
        //     type:"TEST"
        // }));
    }

    loadScripts(){
    //     const script = document.createElement("script");
    //     script.src=url;
    //     script.async = true;
    //     var bodyTag =  document.getElementById("bodyApp");
    //     // bodyTag.appendChild(script);
    //    document.body.appendChild(script);
       document.body.setAttribute("class","pace-done menu-collapsed fixed-navbar vertical-menu 2-columns vertical-layout");
        // document.body.appendChild(script);
    }



    render(){
        return(
            <div>
                <button value="clickME" style={{width:"100%",height:150}} onClick={()=>{
                           this.props.setTrue();
                }}></button>
                <NavBar ></NavBar>
                <div className="routeContainer">
                    <Switch>
                        <Route path="/" exact={true} component={ContentIndexPage}></Route>
                    </Switch>
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
    let value = state.test.test;
    return {
        data:value+1
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setTrue:()=>{
            dispatch(testAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);

