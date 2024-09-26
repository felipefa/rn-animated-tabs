import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  LayoutAnimationConfig,
} from "react-native-reanimated";

import { TabItem, Tabs } from "@/components/Tabs";

const tabs: TabItem[] = [
  { color: "#075985", icon: "House", label: "Home" },
  { color: "#3f6212", icon: "ChartSpline", label: "Reports" },
  { color: "#b45309", icon: "Clapperboard", label: "Action" },
  { color: "#6b21a8", icon: "MessageCircle", label: "Social" },
  { color: "#991b1b", icon: "Cog", label: "Settings" },
];

export default function Index() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <LayoutAnimationConfig skipEntering>
        <Animated.View
          entering={FadeInRight.springify().damping(80).stiffness(200)}
          exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
          key={`tab-item-${selectedIndex}`}
          style={[
            styles.tabItemContainer,
            { backgroundColor: tabs[selectedIndex].color },
          ]}
        />
      </LayoutAnimationConfig>
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
    gap: 8,
  },
  tabItemContainer: {
    flex: 1,
    borderRadius: 16,
    marginHorizontal: 16,
    overflow: "hidden",
  },
});
