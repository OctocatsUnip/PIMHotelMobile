import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { FontAwesome5 } from '@expo/vector-icons'

import SolicitarServicos from '../screens/SolicitarServicos';
import ListaDeQuartos from '../screens/ListaDeQuartos';
import MenuHospede from '../screens/MenuHospede';
import Pacotes from '../screens/Pacotes';
import Filtro from '../screens/Filtro';
import Reserva from '../screens/Reserva';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Quartos(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="ListaDeQuartos"
        >
            <Stack.Screen name="ListaDeQuartos" component={ListaDeQuartos}/>
            <Stack.Screen name="Filtro" component={Filtro}/>
            <Stack.Screen name="Reserva" component={Reserva}/>

        </Stack.Navigator>
    )
}

function Pacote(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Pacotes"
        >
            <Stack.Screen name="Pacotes" component={Pacotes}/>
        </Stack.Navigator>
    )
}

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
                name="Hotel" 
                component={Quartos}
                options={{
                    tabBarIcon: (({color}) => (
                        <FontAwesome5 name="hotel" size={24} color={color} style={{marginTop: 5}}/>
                    )),
                    tabBarLabelStyle: {
                        fontSize: 15
                    }
                }}
                
            />
            <Tab.Screen 
                name="Quartos" 
                component={MenuHospede}
                options={{
                    tabBarIcon: (({color}) => (
                        <FontAwesome5 name="bed" size={24} color={color} style={{marginTop: 5}}/>
                    )),
                    tabBarLabelStyle: {
                        fontSize: 15
                    }
                }}
            />
            {/* <Tab.Screen 
                name="Pacote" 
                component={Pacote}
                options={{
                    tabBarIcon: (({color}) => (
                        <FontAwesome5 name="smile-wink" size={24} color={color} style={{marginTop: 5}}/>
                    )),
                    tabBarLabelStyle: {
                        fontSize: 15
                    }
                }}
            /> */}
            <Tab.Screen 
                name="Servicos" 
                component={SolicitarServicos}
                options={{
                    tabBarIcon: (({color}) => (
                        <FontAwesome5 name="concierge-bell" size={24} color={color} style={{marginTop: 5}}/>
                    )),
                    tabBarLabelStyle: {
                        fontSize: 15
                    },

                }}
            />
        </Tab.Navigator>
    )
}