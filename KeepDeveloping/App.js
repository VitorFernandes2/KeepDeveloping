import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InformationScreen from "./screens/InformationScreen";
import { HomeScreen, DifficultiesScreen, QuizScreen } from "./screens";
import ResourcesScreen from "./screens/resources/Resources";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Information" component={InformationScreen}
          options={() => ({
            headerShown: true,
            title: "Sobre",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7eab84',
            },
            headerTintColor: '#000'
          })}
        />
        <Stack.Screen
          name="Game"
          component={DifficultiesScreen}
          options={() => ({
            headerShown: true,
            title: "Dificuldades",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7eab84',
            },
            headerTintColor: '#fff'
          })}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={(props) => ({
            headerShown: true,
            title: props.route.params.title,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7eab84',
            },
            headerTintColor: '#fff'
          })}
        />
        <Stack.Screen
          name="Resources"
          component={ResourcesScreen} options={() => ({
            headerShown: true,
            title: "Documentação",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7eab84',
            },
            headerTintColor: '#fff'
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
