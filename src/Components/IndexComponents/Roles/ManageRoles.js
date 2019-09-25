import React,{Component} from 'react';
import {ServerAddress,GetActions} from './../../constFile/ApiConstFile';
import axios from 'axios';
import SelectedComponent from './../CommonComponent/selectedComponent';
import {containsObject, containsObjectById, containsObjectById2, containsObjectByValue} from './../../CommonComponents/Helper';
import $ from "jquery";
import MultiSelectReact from 'multi-select-react';


export default class ManageRoles extends Component{
	constructor(props){
		super(props);
		this.state = {
			multiSelect: ["1"],
			Roles:[],
			Services:[],
			Methods:[],
			SelectedMethods:[],
			MethodID:0,
			ServiceID:0,
			isEnableMerhodsDropDown:false
		}

		
		this.arrayOfSelectedMethods = [];
		this.loadRoles.bind(this);
		this.handleChangeService.bind(this);
		this.loadRoles(ServerAddress+'/api/RolesApi/GetRoles');
		this.loadServices(ServerAddress+"/api/ControllersApi/GetControllers");
		
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
	

	componentDidMount(){
		$(document).ready(function() {
			// $('.js-example-basic-multiple').select2()
		})
	}

	handleChangeService(e){
		if(e.target.value!=0)
		{
			this.setState({
				isEnableMerhodsDropDown:true,
				ServiceID:e.target.value
			});
			this.loadMethods(ServerAddress+GetActions+"?ID="+e.target.value);
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

	async loadMethods(url){
		let response = await  axios.get(url);
		var data = [];

		response.data.forEach(element => {
			data.push(element);
		});



		var result = [];
		data.forEach(element=>{
			if(containsObjectById(element,this.state.SelectedMethods)==true){				
			}else{
				result.push(element);
			}
		});
		this.setState({
			Methods:result
		})
	}

	getSelectedOptionsFromMethods(element){
		var values = [];
		var options = element.options;
		for (let index = 0; index < options.length; index++) {
			if(options[index].selected){
				values.push(options[index]);
			}
		}
		return values;
	}
	//#region set Selected Methods
	removeFromStatewhenSelectedOption(){
		var arrayMethods = [];
		this.state.Methods.forEach(element=>{
			if(containsObjectById(element,this.arrayOfSelectedMethods)==true){
			}else{
				arrayMethods.push(element);
			}
		});
		this.setState({
			Methods:arrayMethods
		});

		
	}
	setSelectedMethods(){
		var values = this.getSelectedOptionsFromMethods(this.refs.ChoiseMethodsSelect);
		values.forEach(element => {
			if(containsObject(element,this.arrayOfSelectedMethods)==true){
			}else{
				this.arrayOfSelectedMethods.push({
					Id:element.value,
					name:element.text
				});
			}
		});
		this.setState({
			SelectedMethods:this.arrayOfSelectedMethods
		});
		//set dropdown 2
		this.removeFromStatewhenSelectedOption();
	}
	//#endregion


	//#region remove from selected Methods
	remFromSelectedMethods(){
		var values = 	this.getSelectedOptionsFromMethods(this.refs.SelectedMethodsSelect);
		var result = [];
		this.state.SelectedMethods.forEach(element => {
			if(containsObjectByValue(element,values)==true){
				
			}else{
				result.push(element);
			}
		});

		var serviceDrpDown = this.refs.serviceSelect;
		this.loadMethods(ServerAddress+GetActions+"?ID="+serviceDrpDown.value);
		this.setState({
			SelectedMethods:result
		})
	}
	//#endregion

	renderDropDownItems(data){
		return `<a className="dropdown-item" href="#">${data.Name}</a>`
	}

    render(){
		const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d"
        };
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
															<select id="rolesSelect" name="interested" className="form-control">
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
														<select id="serviceSelect" ref="serviceSelect" name="interested" className="form-control" onChange={(event)=>this.handleChangeService(event)}>
															<option value="0" defaultValue="" disabled="">Choise Service</option>
																{

																	this.state.Services.map(function(item,i){
																		return <option value={item.ID}>{item.ControllerName}</option>
																	})
																}
														</select>
														</SelectedComponent>
													</div>
												</div>
												<div className="row dropDowns">
													<div className="col-md-5">
													<SelectedComponent data={this.state.Methods}   titleLabel="Choise Methods">
															<select ref="ChoiseMethodsSelect" id="ChoiseSelect" name="interested" className="form-control" multiple disabled={!this.state.isEnableMerhodsDropDown} style={{minHeight:200}}>
																{
																	this.state.Methods.map(function(item,i){
																		return <option value={item.ID}>{item.ActionName}</option>
																	})
																}
															</select>
													</SelectedComponent>
													</div>
													<div className="col-md-1 buttons">
														<div>
															<button type="button"  style={{width:60,fontSize:10}} className="btn btn-sm btn-primary" onClick={this.setSelectedMethods.bind(this)}>
																<i className="icon-check2"></i> Add 																
															</button>
														</div>
														<div>
															<button type="button" style={{width:60,fontSize:10}} className="btn btn-sm btn-danger mt-1" onClick={this.remFromSelectedMethods.bind(this)}>
																<i className="icon-check2"></i> Remove																	
															</button>
														</div>
													</div>
													<div className="col-md-5">
													<SelectedComponent data={this.state.SelectedMethods}   titleLabel="Selected Methods">
															<select ref="SelectedMethodsSelect" id="SelectedMethodsSelect" name="interested" className="form-control" multiple disabled={!this.state.isEnableMerhodsDropDown} style={{minHeight:200}}>
															
																{
																	
																	this.state.SelectedMethods.map(function(item,i){
																		return <option value={item.Id}>----{item.name}</option>
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

