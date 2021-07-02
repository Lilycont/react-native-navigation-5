import React from 'react';
import {View, Text, Button} from 'react-native';

export default function List({navigation}) {
  return(
    <View>
      <Text>List</Text>
      <Button title='Ir a Home' onPress={()=> navigation.navigate('home')}/>
      <Button title='Ir a Contact' onPress={()=> navigation.navigate('contact')}/>
      <Button title='Ir a About' onPress={()=> navigation.navigate('about')}/>
      <Button title='Ir a Info' onPress={()=> navigation.navigate('info')}/>
    </View>
  );
}