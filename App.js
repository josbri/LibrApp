import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import MainLibrosScreen from './screens/MainLibrosScreen';
import MainStatsScreen from './screens/MainStatsScreen';

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

const navigationOptions = {
  headerStyle: {
    backgroundColor: 'rgb(83,176,108)',
    borderBottomColor: '#586F6B',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height: 56
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    color: 'white',
    fontWeight: '100',
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
    }
}

// Stack Navigator que nos permite ver los detalles de los eventos.
const LibrosNavigator = createStackNavigator(
  {        
      Libros: MainLibrosScreen,
      // Detalles: EventosDetails,
      // Apuestas: ApuestaMain,
  },
  {
    //La primera página en cargarse:
      initialRouteName: 'Libros',        
      defaultNavigationOptions: navigationOptions,
      //Each screen has a header attached 
      //to it and the header fades in and out together with the screen. 
      headerMode: 'screen'
      
  }
)

//Stack para usuarios (solo una pantalla).
const StatsNavigator = createStackNavigator(
  {        
      Main: MainStatsScreen,        
  },
  {
      initialRouteName: 'Main',        
      defaultNavigationOptions: navigationOptions,
      headerMode: 'screen'
    }
)

// const SignInNavigator = createStackNavigator(
//   {        
//       Main: SignInScreen,
//       //Registrarse: RegisterScreen        
//   },
//   {
//       initialRouteName: 'Main',        
//       defaultNavigationOptions: navigationOptions,
//       headerMode: 'screen'         
//   }
// );


//Bottom navigator para ir entre la sección de Usuarios y eventos.
const Tabs = createBottomTabNavigator(
  {
      Libros: LibrosNavigator,
      Estadisticas: StatsNavigator,
  },
  {
      tabBarOptions: {
        activeTintColor: '#73bf87',
        inactiveTintColor: '#cccccc',
          labelStyle: {
              fontWeight: 'bold',
              fontSize: 16,
              padding: 10
          },
          style: {

            backgroundColor: 'rgb(88,111,107)',
          },
      }
  }
)


//Creamos un switch navigator. No se puede volver atrás.
const SwitchNavigator = createSwitchNavigator(
  {
      //AuthLoading: AuthLoadingScreen,
      App: Tabs,
      //SignIn: SignInNavigator,
  },
  {
      initialRouteName: 'App',
      headerMode: 'screen',
      defaultNavigationOptions: navigationOptions,
  }
);


//Añadimos SwitchNavigator a AppContainer
const AppContainer = createAppContainer(SwitchNavigator)

//Cada vez que se carga la página:
export default class App extends React.Component {
  render(){
    return <AppContainer/>
  }
}