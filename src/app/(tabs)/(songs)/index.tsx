import { colors } from "@/constants";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SongsScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text>Songs Screen</Text>
    </SafeAreaView>
  );
}
