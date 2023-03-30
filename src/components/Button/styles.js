import styled from 'styled-components';


export const Container=styled.button`
    width: 100%;
    background-color: ${({theme})=>theme.COLORS.ORANGE}; // pq consigo acessar esse theme dessa forma ?
    color: ${({theme})=>theme.COLORS.BACKGROUND_800};
    height: 5rem;
    padding: 0 1.6rem;
    border: 0;
    border-radius:1rem;
    margin-top:1.6rem;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
        
    }
    

`