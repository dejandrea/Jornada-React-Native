import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import AppTitle from "../components/AppTitle";
import NavButton from "../components/NavButton";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

export default function HomeScreen() {
  const navigation = useNavigation();
  const navigateToNavigationScreen = () => {
    navigation.navigate("Navigation");
  };

  const navigateToScrollViewScreen = () => {
    navigation.navigate("ScrollViewScreen");
  };

  const navigateToFlatlistScreen = () => {
    navigation.navigate("FlatlistScreen");
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <Container>
      <View style={styles.buttonContainer}>
        <ScrollView>
          <NavButton
            text={"Fundamentos de React Native"}
            onPress={() => {
              navigateTo("#");
            }}
            color="tomato"
          />
          <NavButton
            text={"Expo e Expo CLI"}
            onPress={() => {
              navigateTo("#");
            }}
            color="tomato"
          />
          <NavButton
            text={"Estilização com StyleSheet"}
            onPress={() => {
              navigateTo("#");
            }}
            color="tomato"
          />
          <NavButton
            text={"Navegação"}
            onPress={navigateToNavigationScreen}
            color="tomato"
          />
          <NavButton
            text={"ScrollView"}
            onPress={navigateToScrollViewScreen}
            color="tomato"
          />
          <NavButton
            text={"Flatlist"}
            onPress={navigateToFlatlistScreen}
            color="tomato"
          />
          <NavButton
            text={"Slyled Components"}
            onPress={() => {
              navigateTo("StyledComponents");
            }}
            color="tomato"
          />
          <NavButton
            text={"Temas e estilos Globais"}
            onPress={() => {
              navigateTo("#");
            }}
            color="tomato"
          />
          <NavButton
            text={"Consumo de APIs"}
            onPress={() => {
              navigateTo("UsingAPIs");
            }}
            color="tomato"
          />
          <NavButton
            text={"Periféricos"}
            onPress={() => {
              navigateTo("UsingPeriferics");
            }}
            color="tomato"
          />
        </ScrollView>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 50,
  },
});
