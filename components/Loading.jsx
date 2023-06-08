import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;
