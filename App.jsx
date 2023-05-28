import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useMemo, useCallback } from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
const Stack = createStackNavigator()
import { PaperProvider , adaptNavigationTheme} from 'react-native-paper';
import { PreferencesContext } from './utils/PreferencesContext';
import Header from './components/Header';

export default function App() {
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });
  
  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
    },
  };

  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );



  return (
    <PreferencesContext.Provider value={preferences}>
    <PaperProvider theme={theme}>
      <NavigationContainer theme={preferences? LightTheme : LightTheme}>


      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }

        }}
  > 
        
  
          <Stack.Screen        
           name="Home"
        component={HomeScreen}
        
        options={{
        
          headerRight: (props) => <Header scene={'dark'} {...props}  />,
         
          
        }}
      
/>
          <Stack.Screen name="Details" component={DetailsScreen} 
                  options={{
        
                    headerRight: (props) => <Header scene={'dark'} {...props}  />,
                   
                    
                  }}
                
          
          
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </PreferencesContext.Provider>


  );
}

