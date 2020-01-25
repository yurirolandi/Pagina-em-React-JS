import styled, { createGlobalStyle } from 'styled-components';
import * as Colors from '../config/Colors';
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background-color: ${Colors.primaryDarkColor};
        color: ${Colors.primaryDarkColor}
    }

    html, body, #root{
        height: 100%;
    } 

    button {
        cursor: pointer;
        background-color: ${Colors.primaryColor};
        border: none;
        color: white;
        padding: 10px 20px;
        border-radius: 4px;
    }

    a{
        text-decoration: none;
        color: ${Colors.primaryColor};
    }
    ul {
        list-style: none;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success{
        background-color: ${Colors.successColor}
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