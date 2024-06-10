import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { FlatList } from "react-native-web";

export default class App extends React.Component {
  user:[
  {
    id:1,
    name:"Anuj"
  },
  {
    id:2,
    name:"Hello"
  },
  {
    id:3,
    name:"Anju"
  }
];
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Hello CodeSandbox</Text>
        <Text style={styles.h2}>
          Start editing to see some magic happen, even on your mobile device!
        </Text>
        <br />
        <br />
        <FlatList 
         data={user}
         renderItem={({item})=>{<Text>{item.name}</Text>}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: "center",
  },
  h1: {
    margin: 28,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    margin: 16,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});
