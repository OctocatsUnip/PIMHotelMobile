import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { FontAwesome5 } from '@expo/vector-icons'

import SolicitarServicos from '../screens/SolicitarServicos';
import ListaDeQuartos from '../screens/ListaDeQuartos';
import MenuHospede from '../screens/MenuHospede';
import Pacotes from '../screens/Pacotes';
import { Dimensions, Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                labelPosition: "below-icon",
                labelStyle: {
                    fontSize: 13,
                },
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 15 : 8,
                    paddingBottom: getBottomSpace(),
                    height: Platform.OS === 'ios' ? Dimensions.get('window').height > 750 ? 100 : 60 : 60
                }
            })}
        >
            <Tab.Screen 
                name="Menu" 
                component={MenuHospede}
                options={{
                    tabBarIcon: (({color}) => (
                        <FontAwesome5 name="hotel" size={24} color={color} />
                    ))
                }}
            />
            <Tab.Screen 
                name="Quartos" 
                component={ListaDeQuartos}
                options={{
                    tabBarIcon: (({color}) => (
                        <FontAwesome5 name="bed" size={24} color={color} />
                    ))
                }}
            />
            <Tab.Screen 
                name="Pacotes" 
                component={Pacotes}
                options={{
                    tabBarIcon: (({color}) => (
                        <FontAwesome5 name="smile-wink" size={24} color={color} />
                    ))
                }}
            />
            <Tab.Screen 
                name="Solicitar Servicos" 
                component={SolicitarServicos}
                options={{
                    tabBarIcon: (({color}) => (
                        <FontAwesome5 name="concierge-bell" size={24} color={color} />
                    ))
                }}
            />
        </Tab.Navigator>
    )
}