EXPLICAR SPA NO REACT.
-simple page aplication
*Um unico arquivo html que terá uma div dentro do body, com  id="root", e ela é o destino da renderização do contéudo, ou seja, 
quando vc abre uma nova página, vc está substituindo o conteúdo que será exibido.
-mais leve
-mais performática: carregar apenas o necessário.
-facilidade de construção







1-Renderização de main no script do html 
2-Renderização do main na div "root" a partir da bib ReactDOM
3-Renderização do <Routes/>:

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Routes/>
  </React.StrictMode>
)

é igual a :

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
        <BrowserRouter>
        <Routes> //react-router-dom
            <Route path ="/" element={<Home/>}/>
            <Route path ="new" element={<New/>}/>
            <Route path ="details/:id" element={<Details/>}/>
            <Route path ="/profile" element={<Profile/>}/>
            //path : url que vai exibir a função jsx que está em element//
            //element: função jsx que está construindo a pagina html//

            // Na pratica, esse <Routes> está dentro de uma outra função jsx. (<AppRoutes/> e <AuthRoutes/> no meu projeto)
        </Routes>
        <BrowserRouter/>
  </React.StrictMode>
)
