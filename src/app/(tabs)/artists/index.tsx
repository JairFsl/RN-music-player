import { colors } from "@/constants";
import { defaultStyle } from "@/styles";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ArtistsScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text>Artists Screen</Text>
    </SafeAreaView>
  );
}
