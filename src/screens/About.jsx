import React from 'react';
import {View, Text, Button} from 'react-native';

export default function About({navigation}) {
  return(
    <View>
      <Text>About</Text>
      <Button title='Ir a Home' onPress={()=> navigation.navigate('home')}/>
      <Button title='Ir a Contact' onPress={()=> navigation.navigate('contact')}/>
      <Button title='Ir a Info' onPress={()=> navigation.navigate('info')}/>
      <Button title='Ir a List' onPress={()=> navigation.navigate('list')}/>
    </View>
  );
}