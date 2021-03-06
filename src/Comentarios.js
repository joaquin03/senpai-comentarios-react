import "./Comentarios.css";
import Comentario from "./Comentario";
import Curso from "./Components/Curso";
import React from "react";

export default class Comentarios extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      comentarios: [],
      comentariosAux: [],
      texto: "",
      isLoaded: false,
      q: "",
      cursos:[],
    };
  }
  componentDidMount() {
    this.obtenerComentarioAPI();
    this.obtenerCursosAPI();
  }

  buscar = (event) => {

    this.setState({ q: event.target.value });


    let q = event.target.value;
    let listaFiltrada = [];
    //Por cada uno de los comentarios
    this.state.comentarios.map(comentario =>{
      
      //Valido Que el texto tenga a "q" O que el titulo tenga a "q"
      if (comentario.texto.toLowerCase().includes(q.toLowerCase()) ||
        comentario.nombre.toLowerCase().includes(q.toLowerCase()) ) {
        //Si se cumple lo agrego a la lista auxiliar 
        listaFiltrada.push(comentario);
      }
    })

    this.setState({ comentariosAux: listaFiltrada });
  }


  async obtenerComentarioAPI()
  {
    fetch("http://165.22.191.161/api/joaquin/comentarios6")
      .then(res => res.json())
      .then(
        //Todo OK
        (result) => {
          this.setState({
            comentarios: result.data,
            comentariosAux: result.data,
            texto: "",
          });
        },
        //Error
        (error) => {
          alert("Error al obtener datos");
        }
      );
  }

  async obtenerCursosAPI()
  {
    fetch("http://165.22.191.161/api/joaquin/crusos")
      .then(res => res.json())
      .then(
        //Todo OK
        (result) => {
          this.setState({
            cursos: result.data,
          });
        },
        //Error
        (error) => {
          alert("Error al obtener datos");
        }
      );
  }

  async enviarComentarioAPI(){
    console.log(1);
    const nuevoComentario = {
      texto: this.state.texto,
      nombre: "Joaquin",
      foto: "https://bootdey.com/img/Content/avatar/avatar2.png",
    };

    //Enviar a la API
    let peticion = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({data: nuevoComentario})
    };

    fetch("http://165.22.191.161/api/joaquin/comentarios6", peticion)
      .then(res => res.json())
      .then(
        //Todo OK
        (result) => {
          this.setState({
            comentarios: [result.data, ...this.state.comentarios],
            comentariosQ: [result.data, ...this.state.comentarios],
            texto: "",
            q: "",
          });
        },
        //Error
        (error) => {
          alert("Error al crear comentario");
        }
      );
  }

  agregarComentario = (event) => {
    event.preventDefault();

    if (this.state.texto == "") {
      alert("Tiene que introducir un texto");
      return;
    }
    this.enviarComentarioAPI();
  };

  cambioValores = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  obtenerFecha() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    return day + "/" + month + "/" + year;
  }

  render() {
    return (
      <div>
        <div className="container bootstrap snippets bootdey">

          {this.state.cursos.map((cursoInfo) => {
              return <Curso item={cursoInfo}/>;
          })}

          <div className="row">
            <div className="panel">
              <div className="cover-photo">
                <div className="fb-timeline-img">
                  <img src="https://bootdey.com/img/Content/bg1.jpg" alt="" />
                </div>
                <div className="fb-name">
                  <h2>
                    Curso Front
                  </h2>
                </div>
              </div>
              <div className="panel-body">
                <div className="profile-thumb">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                </div>
                  front@senpai.com.uy
              </div>
            </div>

            <div className="panel profile-info">
              <form onSubmit={this.agregarComentario}>
                <textarea
                  className="form-control input-lg p-text-area"
                  name="texto"
                  rows="2"
                  placeholder="Que estas pensando?"
                  value={this.state.texto}
                  onChange={this.cambioValores}
                ></textarea>

                <footer className="panel-footer">
                  <button type="submit" className="btn btn-info pull-right">
                    Publicar
                  </button>
                  <ul className="nav nav-pills">
                    <li>
                        <i className="fa fa-map-marker"></i>
                    </li>
                    <li>
                        <i className="fa fa-camera"></i>
                    </li>
                    <li>
                        <i className=" fa fa-film"></i>
                    </li>
                    <li>
                        <i className="fa fa-microphone"></i>
                    </li>
                  </ul>
                </footer>
              </form>
            </div>

            <div className="panel profile-info">
            
              <input type="text" name="q" value={this.state.q} onChange={this.buscar}/>
            </div>

            {this.state.comentariosAux.map((itemInfo) => {
              return <Comentario item={itemInfo} />;
            })}

           


          </div>
        </div>
      </div>
    );
  }
}
