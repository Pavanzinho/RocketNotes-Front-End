Integração de back e front.
-Bibliotecas: 
    &axios: cliente http, baseado em promisses, ou seja, faz  req http (insomnia faz essa simulação para testes)
        *permite criar variável objeto que possui um endereço url, onde será enviada a req e res(api->back-end)
        *npm install axios
        *INSERIDO NO FRONT-END
    &cors: permite que o servidor trabalhe com localhost.
        *npm install cors
        *lembrar de executar função antes de aplicar express().use(rotas) no server.
        *INSERIDO NO BACK-END

    obs: o axios substitui o tratamento de req e res que, antes, simulava com insomnia

-Contexto:
    