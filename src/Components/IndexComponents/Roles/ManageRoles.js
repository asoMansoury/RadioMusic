import React,{Component} from 'react';
import { Button } from 'semantic-ui-react';


export default class ManageRoles extends Component{
    render(){
        return(
        <div>
			<div className="app-content content container-fluid">
                <div className="content-wrapper">
                <div className="content-header row"></div>
                    <div className="content-body">
                    <div className="row">
							<div className="col-xl-12 col-lg-12">
								<div className="card">
									<div className="card-body">
										{/* <ul className="list-inline text-xs-center pt-2 m-0">
											<li className="mr-1">
												<h6>
													<i className="icon-circle warning"></i>
													<span className="grey darken-1">Remaining</span>
												</h6>
											</li>
											<li className="mr-1">
												<h6>
													<i className="icon-circle success"></i>
													<span className="grey darken-1">Completed</span>
												</h6>
											</li>
                                        </ul> */}
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown button
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
										<div className="chartjs height-250">
											<canvas id="line-stacked-area" height="250"></canvas>
										</div>
									</div>
                                    <Button primary>Primary</Button>
                                    <Button secondary>Secondary</Button>
									{/* <div className="card-footer">
										<div className="row">
											<div className="col-xs-3 text-xs-center">
												<span className="text-muted">Total Projects</span>
												<h2 className="block font-weight-normal">18</h2>
												<progress className="progress progress-xs mt-2 progress-success" value="70" max="100"></progress>
											</div>
											<div className="col-xs-3 text-xs-center">
												<span className="text-muted">Total Task</span>
												<h2 className="block font-weight-normal">125</h2>
												<progress className="progress progress-xs mt-2 progress-success" value="40" max="100"></progress>
											</div>
											<div className="col-xs-3 text-xs-center">
												<span className="text-muted">Completed Task</span>
												<h2 className="block font-weight-normal">242</h2>
												<progress className="progress progress-xs mt-2 progress-success" value="60" max="100"></progress>
											</div>
											<div className="col-xs-3 text-xs-center">
												<span className="text-muted">Total Revenue</span>
												<h2 className="block font-weight-normal">$11,582</h2>
												<progress className="progress progress-xs mt-2 progress-success" value="90" max="100"></progress>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

