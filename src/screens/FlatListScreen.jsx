import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import GoBackButton from "../components/GoBackButton";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

const dados = [
    `1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `7 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `8 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `9 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
    `10 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
    saepe eaque suscipit ut sequi eius sapiente excepturi beatae. Dolorem
    repellat blanditiis omnis facere qui soluta quisquam fuga quibusdam
    commodi quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Atque accusantium dolore alias repellat provident. Neque sint,
    voluptatem cupiditate porro, enim blanditiis dolorum quaerat quisquam
    velit expedita earum, accusamus vel nisi. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quaerat consequuntur saepe fugiat optio
    laboriosam quas quia id accusamus hic magni explicabo unde aspernatur
    nemo et quam, atque perspiciatis soluta. Consequuntur?`,
]

const movies = [
    { id: 1, year: "1994", title: "Um Sonho de Liberdade" },
    { id: 2, year: "1972", title: "O Poderoso Chefão" },
    { id: 3, year: "2008", title: "Batman: O Cavaleiro das Trevas" },
    { id: 4, year: "1974", title: "O Poderoso Chefão II" },
    { id: 5, year: "1957", title: "12 Homens e uma Sentença" },
    { id: 6, year: "1993", title: "A Lista de Schindler" },
    { id: 7, year: "2003", title: "O Senhor dos Anéis: O Retorno do Rei" },
    { id: 8, year: "1994", title: "Pulp Fiction" },
    { id: 9, year: "2001", title: "O Senhor dos Anéis: A Sociedade do Anel" },
    { id: 10, year: "1966", title: "Três Homens em Conflito" },
]

export default function FlatlistScreen() {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };

  const renderMovie = ({ item }) => (
    <View style={styles.list}>
      <Text style={styles.text}>ID: {item.id}</Text>
      <Text style={styles.text}>Filme: {item.title}</Text>
      <Text style={styles.text}>Ano: {item.year}</Text>
    </View>
  );

  return (
    <Container>
      <PageTitle title={"Flatlist"} />

      <GoBackButton text={"Voltar"} onPress={navigateBack} />

      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 16,
    fontWeight:"bold"
  },
  list: {
    marginTop: 40,
    marginHorizontal: 10,
    backgroundColor:"#a1787c",
    borderRadius:30,
    padding:20
  }
});
