import React from "react"

export default class Comentario extends React.Component{

    render(){
        return (    
            <div className="panel">
                <div className="panel-body">
                    <div className="fb-user-thumb">
                        <img src={this.props.item.imagen} alt="" />
                    </div>
                    <div className="fb-user-details">
                        <h3><a href="#" className="#">{this.props.item.nombre}</a></h3>
                    </div>
                    <div className="clearfix"></div>
                    
                        <p className="fb-user-status">{this.props.item.texto}
                        </p>
                        <div className="fb-status-container fb-border">
                            <div className="fb-time-action">
                                <a href="#" title="Like this">Me Gusta</a>
                                <span>-</span>
                                <a href="#" title="Leave a comment">Comentarios</a>
                                <span>-</span>
                                <a href="#" title="Send this to friend or post it on your time line">Compartir</a>
                            </div>
                        </div>
                </div>
            </div>            
        )
    }
}