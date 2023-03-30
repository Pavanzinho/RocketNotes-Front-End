import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container=styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;  //"largura das colunas"
    grid-template-rows: 105px 128px auto 64px;  //altura das linhas
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};;


`;

export const Brand=styled.div`
    
    grid-area:brand;
    display: flex;
    justify-content: center;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color : ${({theme})=>theme.COLORS.BACKGROUND_700};
    

    >span{
        align-self: center;
        font-size: 24px;
        font-weight: 700;
        line-height: 31.65px;
        color: ${({theme})=>theme.COLORS.ORANGE};;
        
    }
  
   

`
export const Menu=styled.ul`
    list-style: none;
    background:${({theme})=>theme.COLORS.BACKGROUND_900};;
    
    grid-area:menu;
    padding-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    
    
`
export const Search=styled.div`
    grid-area:search;
    padding:64px 64px  
`
export const Content=styled.div`
   
    grid-area:content;
    padding: 36px 64px 0;
    overflow-y: auto;
    

`
export const NewNote=styled(Link)`
    background: ${({theme})=>theme.COLORS.ORANGE};
    grid-area: newnote;
    color: ${({theme})=>theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border: none;

    >span{
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
    }
`

