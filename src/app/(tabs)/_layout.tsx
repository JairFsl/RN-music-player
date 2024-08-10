import { colors, fontSize } from "@/constants";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsNavigation() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 5,
        },
        tabBarBackground() {
          return (
            <BlurView
              experimentalBlurMethod="dimezisBlurView"
              intensity={100}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          );
        },
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon({ color }) {
            return <FontAwesome name="heart" size={20} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: "Playlists",
          tabBarIcon({ color }) {
            return (
              <MaterialCommunityIcons
                name="playlist-play"
                size={28}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: "Songs",
          tabBarIcon({ color }) {
            return (
              <Ionicons name="musical-notes-sharp" size={22} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: "Artists",
          tabBarIcon({ color }) {
            return <FontAwesome6 name="users-line" size={20} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
