import React, {useEffect, useState} from 'react';
import { Text, Button, SafeAreaView, FlatList} from "react-native";

export default function HomeScreen({navigation}) {
  
  const [datos, setDatos] = useState([]);
  const getPosts = async() => {

    try{
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);
      const json = await response.json(); 
      setDatos(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getPosts();
  }, [])
  
  return (
    <SafeAreaView>

<FlatList

data={datos}

keyExtractor = { ({ id }, index) => id }

renderItem = {

  ({item}) => (

    <Text onPress={
      ()=>{
        navigation.navigate('Detail',{itemId:item.id})
      }
    }>{item.title}</Text>

  )

}

/>

      <Button onPress={()=>{

         navigation.navigate('Detail', {
            itemId: 8,
          });
        
      }} title="Mostrar el detalle de post 8" />
    </SafeAreaView>
  );
}