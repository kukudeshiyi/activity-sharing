import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { unitWidth, unitHeight, statusBarHeight } from "./../AdapterUtil";
interface PropsType {
  text: string;
  value: number;
  isActive: boolean;
  handlePress: (value: number) => void;
  wrapperHasBorder?: boolean;
}
export default function Tag(props: PropsType) {
  const { text, value, isActive, handlePress, wrapperHasBorder } = props;
  return (
    <TouchableWithoutFeedback onPress={() => handlePress(value)}>
      <View
        style={[
          styles.tag,
          isActive ? styles.tagActiveBgColor : undefined,
          wrapperHasBorder && !isActive ? styles.tagWithBorder : undefined,
        ]}
      >
        <Text
          style={[styles.tagText, isActive ? styles.tagActiveText : undefined]}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: unitWidth * 8,
    paddingVertical: unitHeight * 3,
    borderRadius: 18,
    marginHorizontal: unitWidth * 5,
    marginVertical: unitHeight * 4,
  },
  tagText: {
    color: "white",
  },
  tagWithBorder: {
    borderWidth: unitWidth * 1,
    borderColor: "#D3C1E5",
  },
  tagActiveBgColor: {
    backgroundColor: "#E5F7A9",
  },
  tagActiveText: {
    color: "black",
  },
});
