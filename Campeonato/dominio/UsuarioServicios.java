package com.udea.Campeonato.dominio;

import com.udea.Campeonato.dto.UsuarioDto;
import com.udea.Campeonato.persistencia.entidad.Usuario;
import com.udea.Campeonato.persistencia.repositorio.RepositorioUsuario;
import org.modelmapper.ModelMapper;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;



@Service
public class ServiciosUsuario {

    private static final Logger LOGGER = LoggerFactory.getLogger(ServiciosUsuario.class);

    private RepositorioUsuario repositorioUsuario;

    private ModelMapper modelMapper;

    public  ServiciosUsuario(RepositorioUsuario repositorioUsuario, ModelMapper modelMapper){

        this.repositorioUsuario = repositorioUsuario;
        this.modelMapper = modelMapper;

    }

    public UsuarioDto crear(UsuarioDto usuarioACrearDto){
        LOGGER.debug("Comenzar a Crear: usuarioACrearDto={}", usuarioACrearDto);

        Usuario usuarioACrear = modelMapper.map(usuarioACrearDto, Usuario.class);
        Usuario resultado = repositorioUsuario.save(usuarioACrear);
        UsuarioDto dtoResultado = modelMapper.map(resultado, UsuarioDto.class);

        return dtoResultado;
    }
	
	public List<UsuarioDto> busquedaCompleta() {
        List<Usuario> listPeople = (List<Usuario>) usuarioRepository.findAll();
        return listPeople.stream()
                .map(usuario -> modelMapper.map(usuario, UsuarioDto.class))
                .collect(Collectors.toList());
    }

    public UsuarioDto busquedaPorId(Long id) {
        Optional<Usuario> findPersonOptional = usuarioRepository.findById(id);
        Usuario findPerson = findPersonOptional.orElseThrow(EntityNotFoundException::new);
        return modelMapper.map(findPerson, UsuarioDto.class);
    }

    public void eliminar(Long id) {
        UsuarioDto personInDb = busquedaPorId(id);
        Usuario personToDelete = modelMapper.map(personInDb, Usuario.class);
        usuarioRepository.delete(personToDelete);
    }

    public UsuarioDto editar(UsuarioDto usuarioDto) {
        busquedaPorId(usuarioDto.getId());
        return crear(usuarioDto);
    }

}