import React,{Component} from 'react';

const baseUrl = window.location.origin;
export default class SelectedComponent extends Component{
	constructor(props){
		super(props);
	}

    render(){
        return(
                <div className="form-group">
                    <label htmlFor="projectinput5">{this.props.titleLabel}</label>
                    <select id="projectinput5" name="interested" className="form-control">
                    <option value="none" defaultValue="" disabled="">{this.props.titleSelected}</option>
                        {
                            this.props.data.map(function(item,i){
                                return <option value={item.Id}>{item.Name}</option>
                            })
                        }
                    </select>
                </div>
        )
    }
}

