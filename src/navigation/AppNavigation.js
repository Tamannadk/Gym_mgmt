import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
// import OnboardingNavigator from './src/navigation/OnboardingNavigator';
// import AuthNavigator from './src/navigation/AuthNavigator';
// import AppNavigator from './src/navigation/AppNavigator';
import { useState } from 'react';
import OnboardingScreen from '../screens/OnBoardingScreen/OnboardingScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnboardingComplete ? (
          <>
            {/* <Stack.Screen name="Auth" component={AuthNavigator} /> */}
            {/* <Stack.Screen name="App" component={AppNavigator} /> */}
          </>
        ) : (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
