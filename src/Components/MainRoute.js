import React,{Component} from 'react';
import {Route,Switch,Router} from 'react-router-dom';
import Login from './LoginPage/Login/Login';
import Index from './IndexComponents/index';
import ContentIndexPage from './IndexComponents/ContentIndexPage';
import {LoginPath,IndexPath,SignUpFormInputPath,ContentPagePath,IndexFullPath} from './constFile/pathRouteNames';

export default class MainRoute extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                {/* <Route path={IndexPath} exact={true} render={(props)=>true
                    ?<Component {...props}></Component>
                    :<Redirect to={{pathname:{LoginPath}}}></Redirect>}  ></Route> */}
                    <Switch>
                        <Route path={IndexPath} exact={true}   component={Index}>

                        </Route>
                        <Route path={IndexFullPath}   component={Index}>

                        </Route>
                        <Login></Login>
                    </Switch>
                    
            </div>
        )
    }
}
