import { View, Text } from "react-native";
import React from "react";

export default function Userdata({ route }) {
  const { data } = route.params;
  return (
    <View key={data.id} style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor:'black' }}>
      <Text>User Data:</Text>
      <Text style={{color:'white' , fontWeight:'bold' , fontSize:15}}>UserId: {data.id}</Text>
      <Text style={{color:'white'}}>Title: {data.title}</Text>
      <Text style={{color:'white'}}>Body: {data.body}</Text>
    </View>
  );
}
