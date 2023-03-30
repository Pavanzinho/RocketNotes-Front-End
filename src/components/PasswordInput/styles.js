import styled from "styled-components";

export const Container = styled.div`


    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};;
    border-radius: 10px;

    &&::placeholder{ // acessar propriedade passada na pagina, caso esteja dentro do mesmo container.
        color: ${({ theme }) => theme.COLORS.GRAY_300}
    }

    >input{
       
       height: 56px;
       width: 100%;
       border-radius: 10px;
       padding: 12px;
       
       color:${({ theme }) => theme.COLORS.WHITE};;
       background: transparent;
       border: 0;
   }

   >p{

   }

   >button{
    background-color: transparent;
    border: none;
    outline: none;

    svg{
        color: white;
    }
    }
    
    svg{
        margin: 0 16px;
        
        
        
    }
   


`