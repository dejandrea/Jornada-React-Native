import { StyleSheet, Text, View } from "react-native";


export default function PageTitle ({title}){

    return (

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>


    )
  
}

const styles = StyleSheet.create({
 
  titleContainer: {
    marginTop:30,
    marginBottom:10,
    padding:2,

  },
  title: {
    fontSize: 32,
    color: "#f64348",
  },
  
})