import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  InformationScreen,
  HomeScreen,
  DifficultiesScreen,
  QuizScreen,
  ClassificationScreen,
  ResourcePage
} from "./screens";
import ResourcesScreen from "./screens/Resources";
import { baseColors } from "./styles/colors";

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
        <Stack.Screen name="Information" component={InformationScreen} options={() => ({
            headerShown: true,
            title: "About",
            headerTitleAlign: 'center',
            headerStyle:  {
              backgroundColor: baseColors.primary,
            },
            headerTintColor: baseColors.secondary
          })} />
        <Stack.Screen
          name="Game"
          component={DifficultiesScreen}
          options={() => ({
            headerShown: true,
            title: "Difficulties",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: baseColors.primary,
            },
            headerTintColor: baseColors.secondary
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
              backgroundColor: baseColors.primary,
            },
            headerTintColor: baseColors.secondary
          })}
        />
        <Stack.Screen
          name="Resources"
          component={ResourcesScreen}
          options={() => ({
            headerShown: true,
            title: "Documentation",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: baseColors.primary,
            },
            headerTintColor: baseColors.secondary
          })}
        />
        <Stack.Screen
          name="Classification"
          component={ClassificationScreen}
          options={() => ({
            headerShown: true,
            title: "Classification",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: baseColors.primary,
            },
            headerTintColor: baseColors.secondary
          })} />
        <Stack.Screen
          name="ResourcePage"
          component={ResourcePage}
          options={() => ({
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: baseColors.primary,
            },
            headerTintColor: baseColors.secondary
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
