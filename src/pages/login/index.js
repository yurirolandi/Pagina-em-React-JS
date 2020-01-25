import React from 'react';

import { Title } from './style'

import { Container } from '../../styles/Global'
import { useDispatch } from 'react-redux'



export default function Login() {
const dispatch = useDispatch();

  function handleClick(e){
        e.preventDefault();

        dispatch({
            type: 'BOTAO_CLICADO'
        })
    }
   
    return (
        <Container>
            <Title>
                Login
            </Title>
            <p>Lorem</p>
            <button type="button" onClick={handleClick}>Enviar</button>
        </Container>
    );
}