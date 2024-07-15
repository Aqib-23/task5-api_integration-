import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Circle } from "react-native-progress";

export default function Apicall() {

  const navigation = useNavigation()

  const [apidata, setapidata] = useState([]);
  const [loading , setloading] = useState(true)

  const funcapi = async () => {
    const get_api = "https://jsonplaceholder.typicode.com/posts";
    let call_api = await fetch(get_api);
    result = await call_api.json();
    setapidata(result);
    setloading(false)
  };

  useEffect(() => {
    funcapi();
  }, []);

  const postinform=(data)=>{
    navigation.navigate('User' , {data : data})
  }

  return (
    <View>
    <Text style={{textAlign:'center' , fontSize:23}}>Post information</Text>
    <ScrollView>
    {loading == true ?<Circle style={{justifyContent:'center' , alignItems:'center'}} size={50} indeterminate={true} /> :  apidata.map((item) => (
      <Pressable onPress={()=>postinform(item)} style={{backgroundColor:'gray' , gap:10 , margin:4 , justifyContent:'center' , alignItems:'center', padding:10}} key={item.id}>
      <Text style={{color:'white' , fontWeight:'bold' , fontSize:15}}>UserId: {item.id}</Text>
      <Text style={{color:'white'}}>Title: {item.title}</Text>
      <Text style={{color:'white'}}>Body: {item.body}</Text>
      </Pressable>
      ))}
    </ScrollView>
    </View>
  );
}
