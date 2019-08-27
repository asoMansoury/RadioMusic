import React,{Component} from 'react';

export default class SearchBox extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

    render(){
        return(
            <div className="row">												
					<section id="basic-form-layouts">
						<div className="row match-height">
							<div className="card" >
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
                                                <h4 className="form-section"><i className="icon-eye6"></i> About User</h4>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="userinput1">Fist Name</label>
                                                            <input type="text" id="userinput1" className="form-control border-primary" placeholder="Name" name="name"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="userinput2">Last Name</label>
                                                            <input type="text" id="userinput2" className="form-control border-primary" placeholder="Company" name="company"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="userinput3">Username</label>
                                                            <input type="text" id="userinput3" className="form-control border-primary" placeholder="Username" name="username"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="userinput4">Nick Name</label>
                                                            <input type="text" id="userinput4" className="form-control border-primary" placeholder="Nick Name" name="nickname"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-actions right">
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
        )
    }
}
