import api from "./Api";

const auth = {
    login: async (usuario) => {
        const url = "/auth/login";
        console.log(usuario)
        return await api.post(url, usuario)
    }
}
export default auth;
