import React, {useState, useEffect} from "react";
import { Text,View,StyleSheet } from "react-native";

export default function App(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  return(
    <View>
      <Text>Consumindo REST API com React Native</Text>
    </View>
  )
}
