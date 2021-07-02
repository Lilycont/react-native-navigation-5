import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Contact({navigation}) {
  return(
    <View>
      <Text>Contact</Text>
      <Button title='Ir a Home' onPress={()=> navigation.navigate('home')}/>
      <Button title='Ir a About' onPress={()=> navigation.navigate('about')}/>
      <Button title='Ir a Info' onPress={()=> navigation.navigate('info')}/>
      <Button title='Ir a List' onPress={()=> navigation.navigate('list')}/>
    </View>
  );
}