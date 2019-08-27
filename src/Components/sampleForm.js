import React,{Component} from 'react';
import {ServerAddress} from './../../constFile/ApiConstFile';
import axios from 'axios';
import PropTypes  from 'prop-types';
const baseUrl = window.location.origin;
export default class sampleForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			Roles:[]
		}
		this.loadRoles.bind(this);
		this.loadRoles();
	}

	componentDidMount(){
		
	}

 	async	loadRoles(){
		let response = await  axios.get(ServerAddress+'/api/RolesApi/GetRoles');
		this.setState({
			Roles:response.data
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
													<i className="icon-head"></i> Personal Info
										
												</h4>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="projectinput1">First Name</label>
															<input type="text" id="projectinput1" className="form-control" placeholder="First Name" name="fname"></input>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="projectinput2">Last Name</label>
															<input type="text" id="projectinput2" className="form-control" placeholder="Last Name" name="lname"></input>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="projectinput3">E-mail</label>
															<input type="text" id="projectinput3" className="form-control" placeholder="E-mail" name="email"></input>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="projectinput4">Contact Number</label>
															<input type="text" id="projectinput4" className="form-control" placeholder="Phone" name="phone"></input>
														</div>
													</div>
												</div>
												<h4 className="form-section">
													<i className="icon-clipboard4"></i> Requirements
														
												</h4>
												<div className="form-group">
													<label htmlFor="companyName">Company</label>
													<input type="text" id="companyName" className="form-control" placeholder="Company Name" name="company"></input>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="projectinput5">Interested in</label>
															<select id="projectinput5" name="interested" className="form-control">
																<option value="none" defaultValue="" disabled="">Interested in</option>
																<option value="design">design</option>
																<option value="development">development</option>
																<option value="illustration">illustration</option>
																<option value="branding">branding</option>
																<option value="video">video</option>
															</select>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="projectinput6">Budget</label>
															<select id="projectinput6" name="budget" className="form-control">
																<option value="0" defaultValue="" disabled="">Budget</option>
																<option value="less than 5000$">less than 5000$</option>
																<option value="5000$ - 10000$">5000$ - 10000$</option>
																<option value="10000$ - 20000$">10000$ - 20000$</option>
																<option value="more than 20000$">more than 20000$</option>
															</select>
														</div>
													</div>
												</div>
												<div className="form-group">
													<label>Select File</label>
													<label id="projectinput7" className="file center-block">
														<input type="file" id="file"></input>
														<span className="file-custom"></span>
													</label>
												</div>
												<div className="form-group">
													<label htmlFor="projectinput8">About Project</label>
													<textarea id="projectinput8" rows="5" className="form-control" name="comment" placeholder="About Project"></textarea>
												</div>
											</div>
											<div className="form-actions">
												<button type="button" className="btn btn-warning mr-1">
													<i className="icon-cross2"></i> Cancel
													
																
												</button>
												<button type="submit" className="btn btn-primary">
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

