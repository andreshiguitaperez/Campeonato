package com.udea.Campeonato.dto;

import com.udea.Campeonato.validaciones.Validador;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UsuarioDto {

    private Long id;
	
    private String correo;

    private String contrasena;

    private String nombre;

    private String apellido;

    private int edad;

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public String getCorreo() {return correo;}

    public void setCorreo(String correo) {this.correo = correo;}

    public String getContrasena() {return contrasena;}

    public void setContrasena(String contrasena) {this.contrasena = contrasena;}

    public String getNombre() {return nombre;}

    public void setNombre(String nombre) {this.nombre = nombre;}

    public String getApellido() {return apellido;}

    public void setApellido(String apellido) {this.apellido = apellido;}

    public int getEdad() {return edad;}

    public void setEdad(int edad) {this.edad = edad;}
}
