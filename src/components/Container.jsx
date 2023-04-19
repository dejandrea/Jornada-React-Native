import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import AppTitle from "./AppTitle";
import StyledTitle from '../components/StyledTitle';

export default function Container({ children }) {
  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.droidSafeArea}> */}
        <View style={styles.titleContainer}>
          {/* <Text style={styles.titleText}>Minha Jornada no React Native</Text> */}
          <StyledTitle>Jornada No React Native</StyledTitle>
        </View>
        <View style={styles.lowerContainer}>
            {children}
        </View>
      {/* </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginHorizontal: 3,
    paddingVertical:16,
    marginBottom:10,
    backgroundColor: "#e6d3d5",
  },
  droidSafeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
  },
  titleContainer: {
    marginTop:50,
    borderBottomWidth: 1,
    // backgroundColor:"#635052"
  },
  titleText: {
    fontSize: 40,
    color: "tomato",
  },
  lowerContainer: {
    marginBottom:300
  },

});
