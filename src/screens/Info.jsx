import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Info({navigation}) {
  return(
    <View>
      <Text>Info</Text>
      <Button title='Ir a Home' onPress={()=> navigation.navigate('home')}/>
      <Button title='Ir a Contact' onPress={()=> navigation.navigate('contact')}/>
      <Button title='Ir a About' onPress={()=> navigation.navigate('about')}/>
      <Button title='Ir a List' onPress={()=> navigation.navigate('list')}/>
    </View>
  );
}