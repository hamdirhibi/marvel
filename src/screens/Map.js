import React from 'react' ; 

import  {View , Text } from 'react-native';
import { styles } from '../Styles/styles'; 


import MapView from 'react-native-maps';




export  class Map extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     region:  {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     }
  //   };
  // }
  // getInitialState =() => {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // }
  
  // onRegionChange  =(region ) => {
  //   this.setState({ region });
  // }
    
  render(){
        return (
            <MapView

            style={styles.mapStyle}

            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            />
                      
        
        );
      }


}

