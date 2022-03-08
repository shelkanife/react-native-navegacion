import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

// pantallas
import SInicio from './pantallas/inicio/inicio'
import SMInicio from './pantallas/movimientos/inicio'
import SPInicio from './pantallas/presupuestos/inicio'
import SRInicio from './pantallas/recomendaciones/inicio';
import SReInicio from './pantallas/recordatorios/inicio';

// nombre de las pantallas
const nombrePantallas={
    'i':'IInicio',
    'm':'MInicio',
    'p':'PInicio',
    'r':'RInicio',
    're':'ReInicio'
}

const Tab = createBottomTabNavigator()

const Contenedor = () => {
    return(
        <NavigationContainer screenOptions={{}}>
            <Tab.Navigator 
                initialRouteName={nombrePantallas.i}
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icono;
                    let ruta = route.name;
                    
                    switch(ruta){
                        case nombrePantallas.i:
                            icono='home'
                            break
                        case nombrePantallas.m:
                            icono='swap-vertical'
                            break
                        case nombrePantallas.p:
                            icono='logo-usd'
                            break
                        case nombrePantallas.r:
                            icono='wallet'
                            break
                        case nombrePantallas.re:
                            icono='notifications'
                            break
                    }

                    return <Ionicons name={icono} size={size} color={color} />;
                },
                headerShown:false
                })}
                tabBarOptions={{
                activeTintColor: '#1E63CB',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70}
                }}>

                <Tab.Screen name={nombrePantallas.i} component={SInicio} />
                <Tab.Screen name={nombrePantallas.m} component={SMInicio} />
                <Tab.Screen name={nombrePantallas.p} component={SPInicio} />
                <Tab.Screen name={nombrePantallas.r} component={SRInicio} />
                <Tab.Screen name={nombrePantallas.re} component={SReInicio} />
                

            </Tab.Navigator>
            </NavigationContainer>
    )
}

export default Contenedor 