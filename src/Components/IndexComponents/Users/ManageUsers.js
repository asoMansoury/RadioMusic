import React,{Component} from 'react';
import {ServerAddress} from './../../constFile/ApiConstFile';
import axios from 'axios';
import ContentBody from './ContentBody';
import SearchBox from './SearchBox';


export default class ManageUsers extends Component{
	constructor(props){
		super(props);
		this.state = {
			Roles:[],
			Services:[],
			isEnableMerhodsDropDown:false
		}
		this.loadRoles.bind(this);
		this.handleChangeService.bind(this);
		this.loadRoles(ServerAddress+'/api/RolesApi/GetRoles');
		this.loadServices(ServerAddress+"/api/ControllersApi/GetControllers");
	}

	componentDidMount(){
		
	}

	handleChangeService(e){
		if(e.target.value!=0)
		{
			this.setState({
				isEnableMerhodsDropDown:true
			})
		}else{
			this.setState({
				isEnableMerhodsDropDown:false
			})
		}
	}

	async	loadRoles(url){
		let response = await  axios.get(url);
		this.setState({
			Roles:response.data
		})
		
		return response.data;
	}

 	async	loadServices(url){
		let response = await  axios.get(url);
		this.setState({
			Services:response.data
		})
		
		return response.data;
	}

	renderDropDownItems(data){
		return `<a className="dropdown-item" href="#">${data.Name}</a>`
	}

    render(){
        return(
        <div className="app-content content container-fluid">
			<div className="content-wrapper">
				<div className="content-header row">
					<div className="content-header-left col-md-6 col-xs-12 mb-1">
						<h2 className="content-header-title">Basic Forms</h2>
					</div>
					<div className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
						<div className="breadcrumb-wrapper col-xs-12">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="index.html">Home</a>
							</li>
							<li className="breadcrumb-item"><a href="#">Form Layouts</a>
							</li>
							<li className="breadcrumb-item active"><a href="#">Basic Forms</a>
							</li>
						</ol>
						</div>
					</div>
				</div>
				<div className="content-body">
                    <SearchBox></SearchBox>
                    <ContentBody></ContentBody>
				</div>
        
			</div>
		</div>
        )
    }
}
