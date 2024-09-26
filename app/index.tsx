import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "#fff" }}>App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#151718",
    padding: 16,
    gap: 16,
  },
});
