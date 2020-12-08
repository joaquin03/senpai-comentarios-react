import React from "react"
import Curso from "../Components/Curso"


///Esto no hace nada

export default class Cursos extends React.Component{

    render(){
        return (    
            <div className="container bootstrap snippets bootdey">
                {this.state.cursos.map((cursoInfo) => {
                    return <Curso item={cursoInfo} />;
                })}
            </div>
        )
    }
}