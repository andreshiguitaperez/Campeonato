import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListaUsuariosComponente extends Component{

    constructor(props){
        super(props);
        this.state = {
            usuarios: [],
            message: null
        };
        this.eliminarUsuario = this.eliminarUsuario.bind(this);
        this.editarUsuario = this.editarUsuario.bind(this);
        this.crearUsuario = this.crearUsuario.bind(this);
        this.cargarListaUsuarios = this.cargarListaUsuarios.bind(this);
    }

    async componentDidMount() {
        await this.cargarListaUsuarios();
    }

    cargarListaUsuarios = async () =>{
        let res = await fetch('http://localhost:8080/v1/usuario');
        let usuarios = await res.json();

        this.setState({usuarios})
    };


    eliminarUsuario(usuarioId){
        ApiService.eliminarUsuario(usuarioId)
            .then(res=>{
                this.setState({message:'Usuario eliminado satisfactoriamente'});
                this.setState({usuario: this.state.usuarios.filter(usuario=> usuario.id !== usuarioId)});
            });
    }

    editarUsuario(id){
        window.localStorage.setItem("Id", id);
        this.props.history.push('/edit-user');
    }

    crearUsuario(){
        window.localStorage.removeItem("usuarioId");
        this.props.history.push('/add-user');
    }

    render() {
        return(
            <div>
                <h2 className="text-center">Informacion de Usuarios</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.crearUsuario()}>Crear Usuario</button>


                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th className="hidden">Id Usuario</th>
                        <th>Correo</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.usuarios && this.state.usuarios.map(
                        usuario =>
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.edad}</td>
                                <td>
                                    <button className="btn btn-success"
                                            onClick={() => this.eliminarUsuario(usuario.id)}>Eliminar
                                    </button>

                                    <button className="btn btn-success" onClick={() => this.editarUsuario(usuario.id)}
                                            style={{marginLeft: '20px'}}> Editar
                                    </button>
                                </td>
                            </tr>
                    )
                    }
                    </tbody>
                </table>


            </div>

        );
    }
}

export default ListaUsuariosComponente;