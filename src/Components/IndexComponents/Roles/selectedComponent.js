import React,{Component, Children} from 'react';

const baseUrl = window.location.origin;
export default class SelectedComponent extends Component{
	constructor(props){
		super(props);
	}

    render(){
        return(
                <div className="form-group">
                    <label htmlFor="projectinput5">{this.props.titleLabel}</label>
                      {this.props.children}
                </div>
        )
    }
}

