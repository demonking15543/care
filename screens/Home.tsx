import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import React, {useState} from 'react'
import {
  Card,
  Title,
  Paragraph,
  List,
  PaperProvider,
} from 'react-native-paper';
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: {navigation: any}) => (
  <TouchableOpacity
    onPress={() =>
      navigation?.push('Details', {
        title:"hello",
        content:"world",
      })
    }
  >
    <Card>

      <Card.Content>
        <Title>Hello</Title>
        <Paragraph>World</Paragraph>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);



export default HomeScreen