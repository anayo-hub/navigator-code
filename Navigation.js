import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TweetDetailScreen from "./screens/homeStack/TweetDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import Feed from "./screens/tabScreens/Feed";
import Settings from "./screens/tabScreens/Settings";
import Payments from "./screens/drawerScreens/Payments";
import Notifications from "./screens/tabScreens/Notifications";
import { Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

console.log("naviagtion");
// Create Material Top Tab Navigator
const TopTabs = createMaterialTopTabNavigator();

// Define a function for rendering the top tabs
function TopTabsGroup({ navigation }) {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#1DA1F2",
        },
      }}
    >
      {/* Define screens for the top tabs */}
      <TopTabs.Screen
        name="main"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
        }}
      />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name="likes" component={Payments} />
    </TopTabs.Navigator>
  );
}

// Create Native Stack Navigator
const HomeStack = createNativeStackNavigator();

// Define a function for rendering the home stack
function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      {/* Define screens for the home stack */}
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{ presentation: "modal" }}
      />
    </HomeStack.Navigator>
  );
}

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Define a function for rendering the bottom tabs
function TabGroup({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // Define icons for each tab based on the route name
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {/* Define screens for the bottom tabs */}
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{
          tabBarLabel: "MussiaAPP",
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/beto.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

// Define a function for rendering the drawer
function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      {/* Define screens for the drawer */}
      <Drawer.Screen name="Feed" component={HomeStackGroup} />
      <Drawer.Screen name="Payments" component={Payments} />
    </Drawer.Navigator>
  );
}

// Default exported component for the navigation
export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* Render the DrawerGroup */}
      <DrawerGroup />
    </NavigationContainer>
  );
}
