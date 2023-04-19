import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GoBackButton from "../components/GoBackButton";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

export default function NavigationScreen() {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <PageTitle title={'Navegação'} />

      <View style = {styles.subTitleContainer}>
        <Text style={styles.subTitle}>Navegação Stack</Text>
        <Text style={styles.subTitle}>Navegação Bottom Tab</Text>
        <Text style={styles.subTitle}>Navegação Drawer</Text>
      </View>

      <GoBackButton text={"Voltar"} onPress={navigateBack} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#898989",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: "#101010",
  },
  subTitleContainer: {
    margin:20,
    padding:10,
  },
  subTitle: {
    fontSize: 30,
    color: "#252525",
    backgroundColor:"#a1787c",
    margin:5,
    padding:10,
    borderRadius:10,
  },
});
