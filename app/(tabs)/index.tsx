import React from 'react'
import { View, Text } from 'react-native'
import Apicall from '../../components/Apicall'
import { createStackNavigator } from '@react-navigation/stack'
import Userscreen from '../../components/Userdata'

export default function index() {
  const stack = createStackNavigator()
  return (
    <stack.Navigator>
      <stack.Screen options={{headerShown:false}} name='Home' component={Apicall}></stack.Screen>
      <stack.Screen options={{headerShown:false}} name='User' component={Userscreen}></stack.Screen>
    </stack.Navigator>
  )
}