import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Modal() {
  const isPresented = router.canGoBack();

  return (
    <View style={styles.container}>
      <Text>Modal screen</Text>
      {isPresented && (
        <Link style={{ color: "white" }} href="../">
          Dismiss modal
        </Link>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
