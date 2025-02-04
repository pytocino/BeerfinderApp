import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddButton from "../../../components/AddButon";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />
        <Text>Home screen</Text>
        <Link href="/modal" style={{ color: "blue", paddingTop: 100 }}>
          Open modal
        </Link>
      </View>
      <AddButton />
    </SafeAreaView>
  );
}
