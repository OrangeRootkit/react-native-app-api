import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FullPost from "../screens/FullPost";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Гарри Поттер" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPost}
          options={{ title: "Персонаж" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
