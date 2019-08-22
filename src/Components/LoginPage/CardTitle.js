import React,{Component} from 'react';

export default class CardTitle extends Component{
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
                <div className="card-header no-border">
                    <div className="card-title text-xs-center">
                        <div className="p-1">
                            <img src="./../../assets/app-assets/images/logo/robust-logo-dark.png" alt="branding logo"></img>
                            </div>
                        </div>
                        <h6 className="card-subtitle line-on-side text-muted text-xs-center font-small-3 pt-2">
                            <span>Login with Robust</span>
                        </h6>
                </div>
            </div>
        )
    }
}
