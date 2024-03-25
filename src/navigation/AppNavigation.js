import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { BookedScreen } from "../screens/BookedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const PostStack = createNativeStackNavigator();

const PostStackScreen = () => {
  return (
    <PostStack.Navigator 
        initialRouteName="Main" 
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        }}
      >
        <PostStack.Screen 
          name="Main" 
          component={MainScreen}
          options={{
            title: 'My blog',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item 
                  title="Take photo"
                  iconName="camera"
                  onPress={() => {console.log('Press photo')}} 
                />
              </HeaderButtons>
            ),
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item 
                  title="Take photo"
                  iconName="menu"
                  onPress={() => {console.log('Press photo')}} 
                />
              </HeaderButtons>
            ),
          }}
        />
        <PostStack.Screen 
          name="Post" 
          component={PostScreen}
          options={({ route }) => ({ 
            title: `Post from ${new Date(route.params.date).toLocaleDateString()}`,
            headerRight: () => {
              const iconName = route.params.booked ? 'star' : 'star-outline'
              return (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item 
                  title="Take photo"
                  iconName={iconName}
                  onPress={() => {console.log('Press photo')}} 
                />
              </HeaderButtons>
            )},
          })}
        />
      </PostStack.Navigator>
  )
}

const BookedStack = createNativeStackNavigator();

const BookedStackScreen = () => {
  return (
    <BookedStack.Navigator
      initialRouteName="Booked" 
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
      }}
    >
      <BookedStack.Screen           
        name="Booked" 
        component={BookedScreen}
        options={{
          title: 'Favorites',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item 
                title="Take photo"
                iconName="menu"
                onPress={() => {console.log('Press photo')}} 
              />
            </HeaderButtons>
          ),
        }}
      />
      <BookedStack.Screen 
        name="Post" 
        component={PostScreen}
        options={({ route }) => ({ 
          title: `Post from ${new Date(route.params.date).toLocaleDateString()}`,
          headerRight: () => {
            const iconName = route.params.booked ? 'star' : 'star-outline'
            return (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item 
                title="Take photo"
                iconName={iconName}
                onPress={() => {console.log('Press photo')}} 
              />
            </HeaderButtons>
          )},
        })}
      />
    </BookedStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()


export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: THEME.MAIN_COLOR
        }}
      >
        <Tab.Screen 
          name="Post" 
          component={PostStackScreen}
          options={{
            tabBarIcon: info => <Ionicons  name="albums" size={25} color={info.color}/>
          }}
        />
        <Tab.Screen 
          name="Booked" 
          component={BookedStackScreen}
          options={{
            tabBarIcon: info => <Ionicons  name="star" size={25} color={info.color}/>
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}