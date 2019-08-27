import React,{Component} from 'react';


export default class ManageUsers extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

    render(){
        return(
            <div className="row">
            <div className="col-xs-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Reflow</h4>
                        <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3"></i></a>
                        <div className="heading-elements">
                            <ul className="list-inline mb-0">
                                <li><a data-action="collapse"><i className="icon-minus4"></i></a></li>
                                <li><a data-action="reload"><i className="icon-reload"></i></a></li>
                                <li><a data-action="expand"><i className="icon-expand2"></i></a></li>
                                <li><a data-action="close"><i className="icon-cross2"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body collapse in">
                        <div className="card-block card-dashboard">
                            {/* <p className="card-text">Turn traditional tables on their side by using <code className="highlighter-rouge">table-reflow</code>. When using reflow, the table header becomes the first column of the table, the first row within the table body becomes the second column, the second row becomes the third column, etc.</p>
                            <div className="alert alert-warning alert-dismissible fade in mb-2">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <h4 id="content-order-and-complex-tables" className="alert-heading mb-2">Content order and complex tables</h4>
                                <p>Beware that the <code className="highlighter-rouge">table-reflow</code> style changes the visual order of content. Make sure that you only apply this style to well-formed and simple data tables (and in particular, don’t use this for layout tables) with appropriate <code className="highlighter-rouge">&lt;th&gt;</code> table header cells for each row and column.</p>
                                <p>In addition, this className will not work correctly for tables with cells that span multiple rows or columns (using <code className="highlighter-rouge">rowspan</code> or <code className="highlighter-rouge">colspan</code> attributes).</p>
                            </div> */}
                            <div className="table-responsive">
                                        <table className="table table-reflow">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Table heading</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Table cell</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Table cell</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Table cell</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Table cell</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Table cell</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
