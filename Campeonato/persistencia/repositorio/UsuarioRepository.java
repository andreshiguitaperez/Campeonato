package com.udea.Campeonato.persistencia.repositorio;

import com.udea.Campeonato.persistencia.entidad.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioUsuario extends CrudRepository<Usuario, Long> {
}
