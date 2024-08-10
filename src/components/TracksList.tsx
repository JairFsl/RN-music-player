import React from "react";
import { FlatList } from "react-native";
import library from "@/assets/data/libray.json";

export default function TracksList() {
  return <FlatList data={library} renderItem={() => null} />;
}
