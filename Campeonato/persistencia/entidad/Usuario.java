package com.udea.Campeonato.persistencia.entidad;

import javax.persistence.*;

@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String correo;

    @Column
    private String contrasena;

    @Column
    private String nombre;

    @Column
    private String apellido;

    @Column
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

    public void setEdad(int edad) {
        this.edad = edad;
    }
}
