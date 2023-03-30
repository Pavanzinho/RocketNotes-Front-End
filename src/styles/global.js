// Aqui vão ficar confirações css globais: cores de background, colors, margins, etc. 
// Ou seja, aqui serão colocadas styles que serão sempre utilizadas nas tags descritas.


import { createGlobalStyle } from "styled-components"; // própria para adicionar estilo global

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color:${({theme})=>theme.COLORS.BACKGROUND_800} ;
        // o que está acontecendo aqui é uma desestruturação de objeto, dentro de uma arrow function que está
        //sendo concatenada com simbolo de chaves
        color: ${({theme})=>theme.COLORS.WHITE};

        -webkit-font-smoothing:antialiased; // TORNAR OS CONTORNOS MAIS SUAVES
    }

    body, input, button, textarea{
        font-size: 1.6rem;
        font-family: 'Roboto Slab', serif;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button,a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover,a:hover{
        filter:brightness(0.9)
    }



`