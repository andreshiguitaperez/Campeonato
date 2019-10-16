package com.udea.campeonato.controlar;


import com.sun.istack.NotNull;
import com.udea.campeonato.dominio.UsuarioServicios;
import com.udea.campeonato.dto.UsuarioDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "v1/usuario")
@Validated
public class UsuarioController {

    private UsuarioServicios usuarioServicios;

    public UsuarioController(UsuarioServicios usuarioServicios){this.usuarioServicios = usuarioServicios;}

    @PostMapping
    public ResponseEntity<UsuarioDto> crear(@RequestBody @Valid UsuarioDto usuarioDto){
        UsuarioDto usuarioCreado = usuarioServicios.crear(usuarioDto);
        return new ResponseEntity<UsuarioDto>(usuarioCreado, null, HttpStatus.CREATED);
    }
	
	@GetMapping
    public ResponseEntity<List<UsuarioDto>> buscarTodo() {
        return ResponseEntity.ok(usuarioServicios.busquedaCompleta());
    }


    @Validated
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDto> busquedaPorId(
            @PathVariable @NotNull @Valid Long id) {
        return ResponseEntity.ok(usuarioServicios.busquedaPorId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsuarioDto> editar(@RequestBody @Valid UsuarioDto usuarioDTO) {
        return ResponseEntity.ok(usuarioServicios.editar(usuarioDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        usuarioServicios.eliminar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }




}
