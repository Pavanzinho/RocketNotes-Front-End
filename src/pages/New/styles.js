import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;

    grid-template-rows: 105px auto;
    grid-template-areas:
    "header" // mesmo nome que a função que setá sendo passada no jsx
    "content";

    >main{
        grid-area:content; // isso significa que o main vai ocupar toda a área definida em no grid-template-areas "content"
        padding : 30px 0;
        overflow-y: auto;
    }

    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        div{
            margin-bottom: 8px;
        }
        
    }
  

`
export const Form = styled.form`
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    >div:nth-of-type(1){
       margin-bottom: 15px;
    }
    
    >section:nth-of-type(1){
        div:nth-of-type(1){
              margin-bottom: 24px;
            }   
    }
    >button{
        margin-top: -16px
    }

    >header{ //ter um header é bem mais semantico
        margin-bottom: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        

        h1{
            font-size: 36px;
            font-weight: 500;
        }

        button{
            font-size: 20px;
            color:${({ theme }) => theme.COLORS.GRAY_100}
        }
  
    }


`