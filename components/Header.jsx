import React from 'react';

import { useTheme, Appbar, TouchableRipple, Switch,  } from 'react-native-paper';
import { PreferencesContext } from '../utils/PreferencesContext';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {StyleSheet} from 'react-native'
const Header = ({ scene }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
 const style =  StyleSheet.create({
  conaitner:{
    marginRight:25,

  }

 })
  return (
    <>


    { isThemeDark? <MaterialCommunityIcons  name='theme-light-dark'
    onPress={toggleTheme} size={30} style={style.conaitner}/>:<MaterialCommunityIcons size={30} name='theme-light-dark' style={style.conaitner} onPress={toggleTheme}
    />


}

    </>
         
        // <Switch
        //   color={'red'}
        //   value={isThemeDark}
        //   onValueChange={toggleTheme}
        // />
  );
};

export default Header