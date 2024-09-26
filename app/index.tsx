import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { TabItem, Tabs } from "@/components/Tabs";

const tabs: TabItem[] = [
  { icon: "House", label: "Home" },
  { icon: "ChartSpline", label: "Reports" },
  { icon: "Clapperboard", label: "Action" },
  { icon: "MessageCircle", label: "Social" },
  { icon: "Cog", label: "Settings" },
];

export default function Index() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Tabs
        data={tabs}
        onChange={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#151718",
    padding: 16,
    gap: 16,
  },
});
