//HOOK DE AUTENTICAÇÃO;FORNECE DADOS DO USER PARA AS ROTAS.

import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api";

const AuthContext = createContext({}); //possibilita fornecimento de contexto.

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {

            //response possuirá o retorno de SessionsControllers, pois back-end identificada requisição na rota de sessions
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token)

            // Toda requisição feita com variável "api"(configurada com axios), terá o token no cabeçalho de autenticação
            //substitui o "Bearer" do insomnia.

            // api.defaults.headers.authorization = `Bearer${token}`;

            //guardando objeto que possui:propriedades do usuário;token, dentro de uma variável.
            //assim, consigo inserir data.user no provider do contexto
            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível logar")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")

        setData({});
    }

    async function userUpdate({ user, avatarFile }) {
        try {
            if (avatarFile) {
                //criar formulário que será enviado pela req para o back-end,
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile) // back-end espera um arquivo chamado "avatar".

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar
            }

            const response = await api.put("/users", user);
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("atualizado com sucesso.")

        } catch (error) {

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro ao atualizar usuário.");
            }
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token")
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, [data]) ;
    
     /*  Isso acima é necessário, pois, se eu adicionar a autorização no useEffect da linha 145,
        pois quando faz o login, o useEffect com dependencia vazia "[]" não é executado,pois a pagina NÃO É RECARREGADA,
        por isso, só para de bugar quando dá f5, agora, colocando data como dependencia, assim que logar, o setData lá do signIn,
        altera o valor do estado data, então a app já vai inserir o token no headers, e assim, não bugará. 

        bug: ao criar um usuário e tentar criar uma nota com ele, fala que o token não existe, porém ao relogar, dá certo,
        pois a página ja vai ter sido carregada, e assim dispararia o useEffect da linha 145, que antes estava com 

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    */
    
    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, []);


    //Provendo dados do usuário para todas as rotas; {children}--> será substituido por routes
    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut, userUpdate }}>
            {children}
        </AuthContext.Provider>

    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context

}

export { AuthProvider, useAuth };
