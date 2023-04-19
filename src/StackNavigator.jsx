import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import NavigationScreen from "./screens/NavigationScreen";
import ScrollViewScreen from "./screens/ScrollViewScree";
import FlatlistScreen from "./screens/FlatListScreen";
import StyledComponentScreen from "./screens/StyledComponentScreen";
import UsingAPIScreen from "./screens/UsingAPIScreen";
import UsingAPIExercicio from "./screens/UsingAPIExercicio";
import UsingPerifericsScreen from "./screens/AccelerometerScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Navigation" component={NavigationScreen} />
      <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} />
      <Stack.Screen name="FlatlistScreen" component={FlatlistScreen} />
      <Stack.Screen name="StyledComponents" component={StyledComponentScreen} />
      <Stack.Screen name="UsingAPIs" component={UsingAPIScreen} />
      <Stack.Screen name="UsingAPIExercicio" component={UsingAPIExercicio} />
      <Stack.Screen name="UsingPeriferics" component={UsingPerifericsScreen} />
    </Stack.Navigator>
  );
}
