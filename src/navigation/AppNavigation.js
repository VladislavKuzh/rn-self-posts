import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Main" 
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{
            title: 'My blog',
          }}
        />
        <Stack.Screen 
          name="Post" 
          component={PostScreen}
          options={({ route }) => ({ title: `Post from ${new Date(route.params.date).toLocaleDateString()}`})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}