Pontos chave neste stage: 

-Requisições para o servidor utilizando Axios: 

    Ela possibilita o uso dos verbos http, o que o insomnia faz, basicamente, contudo, a forma de enviar  as informações passadas nos body, bearers/tokens e uploads, são feitos de maneira diferente, MAS SÓ NO FRONT-END.
    *DICA: SE COM O INSOMNIA FUNCIONA, O BACK-END ESTÁ CERTO.

    Neste projeto=>duas funções da bib axios:
        -.create: 
            onde foi definida um endereço de servidor onde a requisição será feita(assim como o insomnia):/services/api.js
        -.post/get/put/delete/patch: utilizada na variável criada com axios.create, aqui é realmente feita a requisição, passando o endereço onde será
        feita a requisição no back-end.O back-end reconhece esse endereço e executa suas callbacks já prontas, por exemplo:
            *button criar usuário=>requisição de axios no endereço localhost3333://users =>Api feita com express utiliza (Router()) em um variável e com verbo .use reconhece requisição no endereço e dispara sua callback usersRoutes => usersRoutes dispara os midllewares e a callback de userControllers.create=>caso o objeto esperado pelo controller esteja no formato correto e passar em todas as verificações, o usuário será criado.

-cors:
    Permite que o back/front end sejam conectados em um localhost
        npm install cors
        const cors = require("cors")
        app.use(cors()); 
             OBS: ANTES DE APLICAR AS ROTAS NO EXPRESS.USE, SE NÃO ELE VAI TENTAR DAR AUTORIZAÇÃO ANTES DO ROUTER.USE SER APLICADO NAS ROTAS, NO ARQUIVO(SERVER.JS)



-Contexto:
    Permite que informações pegas no back-end fiquem de certa forma disponíveis para utilização, por exemplo, em condicionais que definem algum tipo de redirecionamento de rota, exemplo
    
        Importação:
        *{createContext, useContext} from "react
    
-Hook de autenticação:
    busca informações sobre o usuário no back-end e guarda em um estado caso passe pelas condições do hook, utilizado.Neste caso, a função do hook irá possuir estados que armazenam as informações do usuário(back end) a partir de uma requisição http, caso a função seja executada normalmente, essas informações do usuários irão ser fornecidas para o componente de rotas por meio do contexto criado. Já que, agora, a função que executa o contexto, pode ser importada dentro de rotas, e desestruturada para pegar inforamações do usuário.
-Redirecionamento de rota:
    As informações do usuário, que pegamos com o hook de autenticação, que estão sendo fornecidas pela função que executa o contexto, podem servir como condicionais para redireciar, por exemplo, as rotas de autenticação(login e signup) ou as da aplicação. Por exemplo: 
        request feita pelo hook=> user retornado=>user salvo no contexto ? se sim, renderize rota da app, se não, rota de autenticação.
-Local Storage:
    Pode ser utilizado para salvar as informações do usuário no próprio navegador, para quando a página for carregado, essas informações não sejam perdidas. Neste caso, ao recarregar o site que já foi direcionado para as rotas de app, voltará para a tela de login, pois o objeto capturado pelo hook de autenticação(user) será undefined, não passsando pela condicional de redirecionamento. Com o localStorage, podemos, após a primeira requisição de autenticação, salvar essas informações e utiliza-las na renderização do novo estado, assim, quando a pagina ser carregada, um useEffect irá executar a função que atualiza o estado que contém as informações do usuário, com as informações salvas no LocalStorage, após ocorrer sucesso na primeira requisição para acessar as rotas da app.
-useEffect:
    Executa uma arrow function baseado na alteração do estado passado dentro do vetor parametro. Caso não tenha parametro especificado, será executado quando o componente é renderizado, Por isso que foi utilizado no exemplo acima=> Ao recarregar a página, o componente é renderizado, o useEffect é executado e tenta pegar informações do localstage, caso exista, o estado que determina o redirecionamento de rotas irá ter as informações do usuário,assim, renderizando as rotas da aplicação, e não de autenticação.

-useNavigate:
    importada de react router dom; É uma função que espera, em seu parametro, a rota de redirecionamento desejada , como por exemplo: "/". Contudo, colocar a rota como parametro faz com que o histórico de navegação seja empilhado, ou seja, se existe um botão para voltar para pagina anterior, no caso acima, ele voltará para a home, por exemplo, mas por trás dos panos, ele não está voltando, está adicionando mais uma rota de navegação. Assim, podemos usar número como parametro também, por exemplo: (-1), assim, ele entenderá que é para voltar para a navegação anterior, e não adicionar mais uma rota de navegação.





 
    
    


    