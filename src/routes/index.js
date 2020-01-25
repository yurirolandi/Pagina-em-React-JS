import React from 'react';
import {  Switch } from 'react-router-dom'

import MyRoute from './myRoute';

import Login from '../pages/login/index';
import Page404 from '../pages/Pages404/index'


export default function Routes(){
    return(
     
            <Switch>
                <MyRoute exact path='/' component={Login} />
                <MyRoute  path='/' component={Page404} />
            </Switch>
       
    );
};