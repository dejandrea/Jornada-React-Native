import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function AppTitle (){

    return (

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Minha Jornada no React Native
          </Text>
        </View>

       
    )
  
}

const styles = StyleSheet.create({
 
  titleContainer: {
    // flex: 0.30,
    borderBottomWidth:1,
    marginTop:50,
    marginBottom:10,
    padding:2,
    position:"absolute",
    top:20
  },
  titleText: {
    fontSize: 40,
    color: "tomato",
  },
  
})