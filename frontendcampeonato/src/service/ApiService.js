import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/v1/usuario';

class ApiService{

    eliminarUsuario(usuarioId) {
        return axios.delete(USER_API_BASE_URL + '/' + usuarioId);
    }

    crearUsuario(usuario) {
        return axios.post(""+USER_API_BASE_URL, usuario);
    }

    editarUsuario(usuario) {
        return axios.put(USER_API_BASE_URL + '/' + usuario.id, usuario );
    }

}

export default new ApiService();