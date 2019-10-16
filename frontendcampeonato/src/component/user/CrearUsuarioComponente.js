import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class CrearUsuarioComponente extends Component{

    constructor(props){
        super(props);
        this.state = {
            correo:'',
            contrasena:'',
            nombre:'',
            apellido:'',
            edad:'',
        }
        this.guardarUsuario = this.guardarUsuario.bind(this);
    }

    guardarUsuario = (e) =>{
        e.preventDefault();
        let Usuario = {correo: this.state.correo, contrasena: this.state.contrasena, nombre: this.state.nombre, apellido: this.state.apellido, edad: this.state.edad}
        ApiService.crearUsuario(Usuario)
            .then(res =>{
                this.setState({message : 'Usuario Creado'});
                this.props.history.push('/');
            });
    }

    onChange = (e) =>
        this.setState({[e.target.name]:e.target.value});

    render() {
        return(
            <div>
                <h2 className="text-center">Crear Usuario</h2>
                <form>

                    <div className="form-group">
                        <label htmlFor="correo">Correo de usuario</label>
                        <input
                            value={this.state.correo}
                            onChange={this.onChange.bind(this)}
                            name="correo" id="correo" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contrasena">Contraseña de usuario</label>
                        <input
                            value={this.state.contrasena}
                            onChange={this.onChange.bind(this)}
                            name="contrasena" id="contrasena" type="password"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre de usuario</label>
                        <input
                            value={this.state.nombre}
                            onChange={this.onChange.bind(this)}
                            name="nombre" id="nombre" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido de usuario</label>
                        <input
                            value={this.state.apellido}
                            onChange={this.onChange.bind(this)}
                            name="apellido" id="apellido" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="edad">Edad de usuario</label>
                        <input
                            value={this.state.edad}
                            onChange={this.onChange.bind(this)}
                            name="edad" id="edad" type="number"/>
                    </div>


                    <button className="btn btn-success" onClick={this.guardarUsuario}>Guardar</button>
                </form>
            </div>
        )
    }

}


export default CrearUsuarioComponente;