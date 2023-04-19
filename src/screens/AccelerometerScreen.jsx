import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";
import GoBackButton from "../components/GoBackButton";
import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

export default function UsingPerifericsScreen() {
  const navigation = useNavigation();
  const [accelerometerData, setAccelerometerData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setAccelerometerData));
  };

  const _unsubscribe = () => {
    if (subscription) subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe(); // o return do useEffect serve para "limpeza"
  }, []); // um array de dependências vazio para que ele só seja executado uma vez

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <PageTitle title={"Usando Periféricos"} />

      <NavButton
        text={"Acelerometro"}
        onPress={() => {
          navigateTo("#");
        }}
        color="tomato"
      />

      <View  style={accelerometerData.y < 1 ? styles.container : styles.altContainer}>
        <Text style={styles.text}>Acelerômetro</Text>
        <Text>(em g's sendo 1g = 9.81 m/s²)</Text>
        <Text style={styles.text}>x: {accelerometerData.x}</Text>
        <Text style={styles.text}>y: {accelerometerData.y}</Text>
        <Text style={styles.text}>z: {accelerometerData.z}</Text>

        <NavButton
          text={subscription ? 'Ativado' : 'Desativado'}
          onPress={subscription ? _unsubscribe : _subscribe}
          color="tomato"
        />
      </View>
      

      <GoBackButton text={"Voltar"} onPress={navigateBack} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:50
  },
  text: {
    fontSize: 25,
  },
  altContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f64348'
  },
});
