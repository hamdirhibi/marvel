/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



import OnboardingScreen from './src/screens/OnboardingScreen';
import { createStackNavigator} from '@react-navigation/stack' ; 
import {NavigationContainer } from '@react-navigation/native' ;
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs' ; 
import { Comics } from './src/screens/Comics';
import { Map } from './src/screens/Map';


const Stack = createStackNavigator() ; 
const materialBottomTabs = createMaterialBottomTabNavigator() ; 



export default class App extends React.Component{


  createBottomTabs = (props)=>{
    return <materialBottomTabs.Navigator 
              activeColor="red"
              inactiveColor="#3e2465"
              barStyle={{ backgroundColor: '#a6e4d0' }}
            
                >
              <materialBottomTabs.Screen name="Comics"  component={Comics} 
               options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                      <Icon name="user" size={size} color={'black'} />                ),
              }}
              
              />
              <materialBottomTabs.Screen name="Map"  component={Map}
                options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({ color, size }) => (
                      <Icon name="map-pin" size={size} color={'black'} />                ),
              }}
              />
           </materialBottomTabs.Navigator>
  }


  render(){
    
  

    return (
      <NavigationContainer>
          <Stack.Navigator
            headerMode = "none"
          >
              <Stack.Screen  
                  name="OnboardingScreen" 
                  component={OnboardingScreen} 
                  />
              <Stack.Screen  
                  name="Bottom Tabs" 
                  children={this.createBottomTabs} 
                />
          </Stack.Navigator>
      </NavigationContainer>
    
    )

  }


} 