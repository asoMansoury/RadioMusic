import React,{Component} from 'react';
import {ServerAddress} from './../../constFile/ApiConstFile';
import axios from 'axios';
import SelectedComponent from './selectedComponent';
const baseUrl = window.location.origin;


export default class ManageRoles extends Component{
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
													
					<section id="basic-form-layouts">
						<div className="row match-height">
							<div className="card" style={{height: "968px"}}>
								<div className="card-header">
									<h4 className="card-title" id="basic-layout-form">Project Info</h4>
									<a className="heading-elements-toggle">
										<i className="icon-ellipsis font-medium-3"></i>
									</a>
									<div className="heading-elements">
										<ul className="list-inline mb-0">
											<li>
												<a data-action="collapse">
													<i className="icon-minus4"></i>
												</a>
											</li>
											<li>
												<a data-action="reload">
													<i className="icon-reload"></i>
												</a>
											</li>
											<li>
												<a data-action="expand">
													<i className="icon-expand2"></i>
												</a>
											</li>
											<li>
												<a data-action="close">
													<i className="icon-cross2"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="card-body collapse in">
									<div className="card-block">
										<div className="card-text">
											<p>This is the most basic and default form having form sections. To add form section use 
										
												<code>.form-section</code> className with any heading tags. This form has the buttons on the bottom left corner which is the default position.
									
											</p>
										</div>
										<form className="form">
											<div className="form-body">
												<h4 className="form-section">
													<i className="icon-clipboard4"></i> Requirements
														
												</h4>
												<div className="row">
													<div className="col-md-6">
														<SelectedComponent  data={this.state.Roles}  titleLabel="Choise Roles">
															<select id="projectinput5" name="interested" className="form-control">
																<option value="0" defaultValue="" disabled="">Choise Roles</option>
																	{
																		this.state.Roles.map(function(item,i){
																			return <option value={item.Id}>{item.Name}</option>
																		})
																	}
															</select>
														</SelectedComponent>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<SelectedComponent data={this.state.Services}   titleLabel="Choise Service">
														<select id="projectinput5" name="interested" className="form-control" onChange={(event)=>this.handleChangeService(event)}>
															<option value="0" defaultValue="" disabled="">Choise Service</option>
																{
																	this.state.Roles.map(function(item,i){
																		return <option value={item.Id}>{item.Name}</option>
																	})
																}
														</select>
														</SelectedComponent>
													</div>
													<div className="col-md-6">
														
													<SelectedComponent data={this.state.Roles}   titleLabel="Choise Methods">
															<select id="projectinput5" name="interested" className="form-control" disabled={!this.state.isEnableMerhodsDropDown}>
																<option value="0" defaultValue="" disabled="">Choise Methods</option>
																{
																	this.state.Roles.map(function(item,i){
																		return <option value={item.Id}>{item.Name}</option>
																	})
																}
															</select>
													</SelectedComponent>
													</div>
												</div>
											</div>
											<div className="form-actions">
												<button type="button" className="btn btn-warning mr-1">
													<i className="icon-cross2"></i> Cancel
													
																
												</button>
												<button type="button" className="btn btn-primary">
													<i className="icon-check2"></i> Save
													
																
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
        
			</div>
		</div>
        )
    }
}

