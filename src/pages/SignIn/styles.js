import styled from "styled-components";
import backgroundImage from "../../assets/backgroundImage.png"

export const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: stretch;

   

`

export const Form=styled.form`
    width: 637px;
   
    padding: 0 134px;
    
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items:center ;
   
    text-align: center;
    

    >h1{
        font-size: 48px;
        font-weight: 700px;
        line-height: 63px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }

    >span{
        font-size: 14px;
        line-height:18.5px;
        font-weight: 400;
        margin-bottom: 48px;
        color: ${({theme})=>theme.COLORS.GRAY_100};
        
    }

    >h2{
        margin-bottom: 48px;
        
        color: ${({theme})=>theme.COLORS.WHITE};
        
        font-weight: 500;
        line-height: 32px;
        font-size: 24px;
    }
    
    >div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 124px;
        
    }

    
    >a{
        position: relative;
        right: 0;
        border:none;
        font-size: 20px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }
    

   


`

export const Background=styled.div`
   height: 100vh;
   flex:1;
   background:url(${backgroundImage}) no-repeat center center;
   background-size: cover;
   
   `