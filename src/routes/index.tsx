import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './app.routes';
import {useFilter} from '../../hooks/filter'
import Login from '../screens/Login'



export function Routes(){
    const {user} = useFilter();

    return(
        <NavigationContainer>
            {user.login == "admin" && user.senha == "admin" ? <TabRoutes /> : <Login />}
        </NavigationContainer>
    )
}