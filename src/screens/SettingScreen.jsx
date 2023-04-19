import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";

export default function SettingScreen() {
  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    navigation.navigate("Home");
  };

  return (
      <Container>
        <PageTitle title={"Aula de navegação"} />

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
          repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
          commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Atque accusantium dolore alias repellat provident. Neque sint,
          voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
          velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
          laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
          nemo et quam, atque perspiciatis soluta. Consequuntur?
        </Text>

        <NavButton text={'Fundamentos de React Native'} onPress={()=>{navigateToHomeScreen()}} color="tomato"/>
      </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 16,
  },
 });

