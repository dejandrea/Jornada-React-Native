import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import GoBackButton from "../components/GoBackButton";
import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";
import { Image, StyleSheet, Text } from "react-native";

export default function UsingAPIScreen() {
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateToAPIExec = ()=>{
    navigation.navigate("UsingAPIExercicio");
  }

  const fetchGithubUser = async () => {
    const res = await axios.get("https://api.github.com/users/dejandrea");
    setUser(res.data);
  };

  useEffect(() => {
    fetchGithubUser();
  }, []);

  return (
    <Container>
      <PageTitle title={"Consumindo API do Github"} />

      <Text style={styles.text}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />

      <NavButton text={'Exercícios de API'} onPress={()=>{navigateToAPIExec()}} color="tomato" />
      <GoBackButton text={"Voltar"} onPress={navigateBack} />
    </Container>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignSelf: "center",
    borderRadius: 999,
    height: 200,
    width: 200,
    marginVertical: 20,
  },
  text: {
    fontSize: 25,
    marginTop: 20,
    textAlign: "center",
    marginBottom:20
  },
  bio:{
    textAlign:"center"
  }
});
