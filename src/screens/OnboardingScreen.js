import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';



const OnboardingScreen = ({navigation})=>{




        return (
            <Onboarding
            onSkip = {()=>navigation.replace("Bottom Tabs")}
            onDone = {()=>navigation.navigate("Bottom Tabs")}

            pages={
                [
                    {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/images/marven.jpeg')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/images/marven.jpeg')} />,
                    title: 'Hero List',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    }
                
            ]
        }
            />
        )

}

export default OnboardingScreen ; 