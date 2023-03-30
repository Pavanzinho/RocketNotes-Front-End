import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    position: relative;
    right: 0;

    border:none;
    font-size: 20px;
    
   
`
