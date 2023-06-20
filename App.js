import React, {useState, useEffect} from "react";
import { View } from "react-native";
import { Platform } from "react-native";
import { Text,SafeAreaView,StyleSheet} from "react-native";

export default function App(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  const url = "https://jsonplaceholder.typicode.com/posts"

  // realizando a requisição 'GET' para a URL
    useEffect(() => {
      //Realizando a requisição
      fetch(url)
      //Convertendo a resposta para JSON
        .then((resp) => resp.json())
        //Atribuindo o JSON da resposta à nossa constante 'data'
        .then((json) => setData(json))
        // Caso ocorra erro no proceso
        .catch((error) => console.log(error))
        // Finaliando o laço
        //Valor da const 'loading' para 'false'
        .finally(() => setLoading(false))
    },[])

  return(
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Text style={styles.text}>Carregando</Text>
      ) : (
        data.map((post) => {
          return (
            <View>
              <Text style={styles.title}>
                {post.title}
              </Text>
              <Text>
                {post.body}
              </Text>
            </View>
          )
        })
      )}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? 25 : 30,
    justifyContent:'center',
    backgroundColor:"#edf0f1",
    paddingHorizontal: 8,
    paddingBottom:8 

  },
  text: {
    textAlign:'center',
    fontSize: 25,
    fontWeight: '500'
  },
  title: {
    textAlign:'center',
    fontSize: 25,
    fontWeight: '500'
  }
})
