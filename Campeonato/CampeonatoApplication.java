package com.udea.campeonato;

import com.udea.campeonato.persistencia.entidad.Usuario;
import com.udea.campeonato.persistencia.repositorio.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CampeonatoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CampeonatoApplication.class, args);
	}

}
