import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
const USER_API_BASE_URL = 'http://localhost:8080/v1/usuario';

class EditarUsuarioComponente extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            correo: '',
            contrasena: '',
            nombre:'',
            apellido:'',
            edad:'',
        }
        this.guardarUsuario = this.guardarUsuario.bind(this);
        this.cargarUsuario = this.cargarUsuario.bind(this);
    }

    async componentDidMount() {
        await this.cargarUsuario();
    }

    cargarUsuario = async () => {
        let res = await fetch(USER_API_BASE_URL+'/'+window.localStorage.getItem("Id"))
        let usuario = await res.json()

        this.setState({

            id: usuario.id,
            correo: usuario.correo,
            contrasena: usuario.contrasena,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,


        })
    }

    onChange = (e) =>

        this.setState({[e.target.name]: e.target.value});

    guardarUsuario = (e) => {
        e.preventDefault();
        let usuario = {id: this.state.id, correo: this.state.correo, contrasena: this.state.contrasena, nombre: this.state.nombre, apellido: this.state.apellido, edad: this.state.edad}
        ApiService.editarUsuario(usuario)
            .then(res=>{
                this.setState({message: 'Usuario editado'});
                this.props.history.push('');
            })
    }

    render() {
        return(

            <div>
                <h2 className="text-center">Editar Usuario</h2>
                <form>

                    <div className="form-group">
                        <label htmlFor="correo">Correo electrónico</label>
                        <input
                            value={this.state.correo}
                            onChange={this.onChange.bind(this)}
                            name="correo" id="correo" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input
                            value={this.state.contrasena}
                            onChange={this.onChange.bind(this)}
                            name="contrasena" id="contrasena" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre </label>
                        <input
                            value={this.state.nombre}
                            onChange={this.onChange.bind(this)}
                            name="nombre" id="nombre" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido </label>
                        <input
                            value={this.state.apellido}
                            onChange={this.onChange.bind(this)}
                            name="apellido" id="apellido" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="edad">Edad</label>
                        <input
                            value={this.state.edad}
                            onChange={this.onChange.bind(this)}
                            name="edad" id="edad" type="number"/>
                    </div>


                    <button className="btn btn-hecho" onClick={this.guardarUsuario}>Guardar</button>
                </form>
            </div>

        );
    }

}

export default EditarUsuarioComponente;