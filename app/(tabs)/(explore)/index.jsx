import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Component: TabTwoScreen
export default function Explore() {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Open up app/(tabs)/explore.jsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
