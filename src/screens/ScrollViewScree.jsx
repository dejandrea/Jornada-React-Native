import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import GoBackButton from "../components/GoBackButton";
import AppTitle from "../components/AppTitle";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

export default function ScrollViewScreen() {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <PageTitle title={"Scroll View"} />
      <ScrollView style={{marginTop:15}}>
        <Text style={styles.text}>
          1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
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

        <Text style={styles.text}>
          2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
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

        <Text style={styles.text}>
          3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
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

        <Text style={styles.text}>
          4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
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

        <Text style={styles.text}>
          5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
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

        <Text style={styles.text}>
          6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
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
      </ScrollView>

      <GoBackButton text={"Voltar"} onPress={navigateBack} />

    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 16,
  },
 });
