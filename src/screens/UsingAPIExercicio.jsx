import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import GoBackButton from "../components/GoBackButton";
import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function UsingAPIExercicio() {
  const [posts, setPosts] = useState({});

  const fetchPostsJson = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };

  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetchPostsJson();
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.textId}>ID: {item.id}</Text>
      <Text style={styles.textTitle}>Título: {item.title}</Text>
      <Text style={styles.textContent}>Conteúdo: {item.body}</Text>
    </View>
  );

  return (
    <Container>
      <PageTitle title={"Consumindo API de Posts"} />

      <View style={{ marginTop: 25,marginBottom:130 }}>
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
        />

        <GoBackButton text={"Voltar"} onPress={navigateBack} />
      </View>

      
    </Container>
  );
}

const styles = StyleSheet.create({
    postContainer: {
      borderWidth: 1,
      borderColor: "tomato",
      borderRadius: 15,
      margin: 10,
      padding: 16,
    },
    textTitle: {
      marginVertical: 8,
      fontWeight: "bold",
      fontSize: 20,
    },
    textContent: {
      fontWeight: "300",
      fontSize: 14,
    },
    textId:{
        color:"tomato",
        fontWeight:"bold",
        fontSize:18
    }
  });
