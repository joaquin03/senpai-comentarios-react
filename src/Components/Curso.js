import './Curso.css';
import React from "react";


export default class Curso extends React.Component{

    render(){
        return (    
            <div className="panel panel-curso">
                <div className="panel-body">
                    <div className="fb-user-thumb">
                        <img src={this.props.item.imagen} alt="" />
                    </div>
                    <div className="fb-user-details">
                        <h3><a href="#" className="#">{this.props.item.titulo}</a></h3>
                        {this.props.item.nivel}
                    </div>
                    <div className="clearfix"></div>
                    <p className="fb-user-status">{this.props.item.descripcion}</p>

                </div>
            </div>            
        )
    }
}