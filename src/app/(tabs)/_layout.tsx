import { Tabs } from "expo-router";

export default function TabsNavigation() {
  return (
    <Tabs>
      {/* <Tabs.Screen name="favorites" />
      <Tabs.Screen name="playlists" />
      <Tabs.Screen name="artists" /> */}
      <Tabs.Screen
        name="(songs)"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
