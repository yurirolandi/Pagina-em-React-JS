import styled, { createGlobalStyle } from 'styled-components';
import { primaryDarkColor, primaryColor } from '../config/Colors';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background-color: ${primaryDarkColor};
        color: ${primaryDarkColor}
    }

    html, body, #root{
        height: 100%;
    } 

    button {
        cursor: pointer;
        background-color: ${primaryColor};
        border: none;
        color: white;
        padding: 10px 20px;
        border-radius: 4px;
    }

    a{
        text-decoration: none;
        color: ${primaryColor};
    }
    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
    max-width: 360px;
    background-color: white;
    margin: 30px auto;
    padding: 30px;
    border-radius: 5px;
   box-shadow: 10px 10px 36px -5px rgba (0,0,0,0,1)
`;