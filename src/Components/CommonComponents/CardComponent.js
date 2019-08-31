import React,{Component, Children} from 'react';

class CardComponent extends Component{

    renderFooter(){
       return this.props.renderFooter;
    }
    render(){
        return(
        <div className={this.props.classNameprop}>
            <div className="card">
                <div className="card-body">
                    <div className="card-block">
                        {this.props.children}
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        {this.renderFooter()}
                    </div>
                </div>
            </div>
        </div>		
        )
    }
}

export default CardComponent