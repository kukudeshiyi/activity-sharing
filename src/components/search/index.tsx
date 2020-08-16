import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { unitWidth, unitHeight, statusBarHeight } from "../../AdapterUtil";
import SvgUri from "expo-svg-uri";
import Tag from "../tag";
import { request } from "../../util";
const DATE_TAGS = [
  {
    text: "ANYTIME",
    value: 1,
  },
  {
    text: "TODAY",
    value: 2,
  },
  {
    text: "TOMORROW",
    value: 3,
  },
  {
    text: "THIS WEEK",
    value: 4,
  },
  {
    text: "THIS MONTH",
    value: 5,
  },
  {
    text: "LATER",
    value: 6,
  },
];
export default function Search() {
  const [date, setDate] = useState(0);
  const [channel, setChannel] = useState(0);
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.titleWapper}>
          <View>
            <Text style={styles.title}>DATE</Text>
            <View style={styles.line}></View>
          </View>
        </View>
        <View style={styles.timeTagWrapper}>
          {/* <TouchableWithoutFeedback>
            <View style={styles.tag}>
              <Text>ANYTIME</Text>
            </View>
          </TouchableWithoutFeedback> */}
          {DATE_TAGS.map((item) => {
            return (
              <Tag
                text={item.text}
                value={item.value}
                handlePress={(value) => setDate(value)}
                isActive={date === item.value}
              />
            );
          })}
        </View>
        <View style={styles.channelWapper}>
          <View>
            <Text style={styles.title}>CHANNEL</Text>
            <View style={styles.channelLine}></View>
          </View>
        </View>
        <View style={styles.timeTagWrapper}>
          {DATE_TAGS.map((item) => {
            return (
              <Tag
                text={item.text}
                value={item.value}
                handlePress={(value) => setChannel(value)}
                isActive={channel === item.value}
                wrapperHasBorder={true}
              />
            );
          })}
        </View>
      </View>
      <TouchableHighlight onPress={() => alert(123)}>
        <View style={[styles.bottom, styles.btnActive]}>
          <View style={styles.searchTextWrapper}>
            <SvgUri
              source={require("../../../assets/search_drawer.svg")}
              width={unitWidth * 18}
              height={unitHeight * 18}
            />
            <Text style={styles.searchText}>SEARCH</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#453257",
  },
  top: {
    height: unitHeight * 506,
    paddingTop: statusBarHeight + unitHeight * 10,
    paddingHorizontal: unitWidth * 16,
  },
  titleWapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottom: {
    height: unitHeight * 64,
    backgroundColor: "#BABABA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchTextWrapper: {
    flexDirection: "row",
  },
  searchText: {
    fontSize: unitWidth * 16,
  },
  btnActive: {
    backgroundColor: "#D5EF7F",
  },
  title: {
    color: "#AC8EC9",
    fontSize: unitWidth * 12,
  },
  line: {
    height: unitHeight * 2,
    width: unitWidth * 30,
    backgroundColor: "#8560A9",
  },
  timeTagWrapper: {
    marginTop: unitHeight * 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#E5F7A9",
    paddingHorizontal: unitWidth * 8,
    paddingVertical: unitHeight * 3,
    borderRadius: 18,
  },
  channelLine: {
    height: unitHeight * 2,
    width: unitWidth * 57,
    backgroundColor: "#8560A9",
  },
  channelWapper: {
    marginTop: unitHeight * 24,
    flexDirection: "row",
    justifyContent: "center",
  },
});
