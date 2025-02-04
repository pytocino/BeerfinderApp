import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Open up app/(tabs)/profile.jsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
