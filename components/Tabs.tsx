import { icons } from "lucide-react-native";
import { MotiView } from "moti";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  FadeInRight,
  FadeOutRight,
  LayoutAnimationConfig,
  LinearTransition,
} from "react-native-reanimated";

import { Icon } from "@/components/Icon";

type IconNames = keyof typeof icons;

export type TabItem = {
  icon: IconNames;
  label: string;
  color?: string;
};

type TabsProps = {
  data: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
  activeColor?: string;
  inactiveColor?: string;
};

const SPACING = 4;

export function Tabs({
  data,
  selectedIndex,
  onChange,
  activeBackgroundColor = "#ecedee",
  inactiveBackgroundColor = "#151718",
  activeColor = "#151718",
  inactiveColor = "#787f85",
}: TabsProps) {
  return (
    <View style={styles.tabsContainer}>
      {data?.map((item, index) => {
        const isSelected = index === selectedIndex;

        return (
          <MotiView
            animate={{
              ...styles.tabContainer,
              backgroundColor: isSelected
                ? activeBackgroundColor
                : inactiveBackgroundColor,
            }}
            key={item.label}
            layout={LinearTransition.springify().damping(80).stiffness(200)}
          >
            <Pressable
              onPress={() => onChange(index)}
              style={styles.tabPressable}
            >
              <Icon
                name={item.icon}
                animate={{
                  color: isSelected ? activeColor : inactiveColor,
                }}
              />
              <LayoutAnimationConfig skipEntering>
                {isSelected && (
                  <Animated.Text
                    entering={FadeInRight.springify()
                      .damping(80)
                      .stiffness(200)}
                    exiting={FadeOutRight.springify()
                      .damping(80)
                      .stiffness(200)}
                    style={[styles.tabText, { color: activeColor }]}
                  >
                    {item.label}
                  </Animated.Text>
                )}
              </LayoutAnimationConfig>
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    gap: SPACING * 2,
    margin: SPACING * 4,
  },
  tabContainer: {
    borderRadius: SPACING * 2,
    overflow: "hidden",
  },
  tabPressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING,
    padding: SPACING * 3,
  },
  tabText: {
    fontSize: 16,
  },
});
