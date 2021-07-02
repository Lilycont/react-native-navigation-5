import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  return(
    <View>
      <Text>Home</Text>
      <Button title='Ir a Contact' onPress={()=> navigation.navigate('contact')}/>
      <Button title='Ir a About' onPress={()=> navigation.navigate('about')}/>
      <Button title='Ir a Info' onPress={()=> navigation.navigate('info')}/>
      <Button title='Ir a List' onPress={()=> navigation.navigate('list')}/>
    </View>
  );
}