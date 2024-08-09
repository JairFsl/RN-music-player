import { colors, fontSize } from "@/constants";
import { StyleSheet } from "react-native";

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  text: {
    fontSize: fontSize.md,
    color: colors.text,
  },
});
