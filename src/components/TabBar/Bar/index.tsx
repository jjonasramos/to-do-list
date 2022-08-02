import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const tabBarHeight = 80;
const middleIconSize = 50;
const midRadius = 25;
const midBoundary = 60;

export default function MyTabBar({ state, descriptors, navigation }: any) {
  const { width } = useWindowDimensions();

  const path = [
    "M0 0",
    `H${width / 2 - midBoundary / 2}`,
    `A 10 10 0 0 0 ${width / 2 + midBoundary / 2} 0`,
    `H${width}`,
    `V${tabBarHeight}`,
    "H0",
    `z`,
  ].join(",");

  const linePath = [
    "M0 0",
    `H${width / 2 - midBoundary / 2}`,
    `A 10 10 0 0 0 ${width / 2 + midBoundary / 2} 0`,
    `H${width}`,
  ].join(",");
  return (
    <View
      style={{ alignSelf: "stretch", height: tabBarHeight, paddingBottom: 20 }}
    >
      <Svg
        viewBox={`0 0 ${width} ${tabBarHeight}`}
        height={tabBarHeight}
        width={width}
      >
        <Path d={path} fill="yellow" />
        <Path d={linePath} fill="transparent" strokeWidth={1} stroke="#ccc" />
      </Svg>
      <View
        style={{
          position: "absolute",
          width: middleIconSize,
          height: middleIconSize,
          borderRadius: midRadius,
          backgroundColor: "red",
          left: width / 2 - midRadius,
          bottom: tabBarHeight - midRadius,
        }}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          flexDirection: "row",
          bottom: 20,
        }}
      >
        {
          state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel !== undefined
                          ? options.tabBarLabel
                          : options.title !== undefined
                          ? options.title
                          : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[
                  { flex: 1, justifyContent: "center", alignItems: "center" },
                  index === 1 && { marginRight: midBoundary / 2 },
                  index === 2 && { marginLeft: midBoundary / 2 },
                ]}
              >
                <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  content: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
