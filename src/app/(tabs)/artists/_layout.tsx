import { StackScreenSearchBar } from "@/constants/layout";
import { defaultStyle } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function ArtistisLayout() {
  return (
    <View style={defaultStyle.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenSearchBar,
            headerTitle: "Artists",
          }}
        />
      </Stack>
    </View>
  );
}
