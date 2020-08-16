import React, { useState, useMemo, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { unitWidth, unitHeight, statusBarHeight } from "../../AdapterUtil";
import ListItem from "./listItem";
import SvgUri from "expo-svg-uri";
import AsyncStorage from "@react-native-community/async-storage";
import { useRequest } from "ahooks";
import { request } from "../../util";
interface Props {}
// @TODO:合并navigation类型
type PropsType = any;
interface User {
  avatar: string;
  email: string;
  id: string;
  username: string;
}
type userInfoType = User | undefined;
// get user info
const getUserInfo = async () => {
  try {
    const value = await AsyncStorage.getItem("@login_info");
    return value ? JSON.parse(value) : undefined;
  } catch (e) {
    console.log("get userInfo error");
  }
};
const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("@login_token");
    return value;
  } catch (e) {}
};
const getList = async (
  token: string
): Promise<{ [key: string]: any } | undefined> => {
  const res = await request({
    url: "/events",
    type: "GET",
    token,
  });
  // console.log(res);
  return res;
};
export default function Home(props: PropsType) {
  const { navigation } = props;
  const [userInfo, setUserInfo] = useState<userInfoType>(undefined);
  useEffect(() => {
    getUserInfo().then((data: userInfoType) => {
      setUserInfo(data);
    });
  }, []);
  const { data: list, run, refresh } = useRequest(async () => {
    const token = await getToken();
    if (token) {
      console.log(123);
      const res = await getList(token);
      return res;
    }
  });
  console.log(JSON.stringify(list));
  return (
    <View>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <SvgUri
            source={require("../../../assets/search.svg")}
            width={unitWidth * 18}
            height={unitHeight * 18}
          />
        </TouchableOpacity>
        <SvgUri
          style={styles.logoCat}
          width={unitWidth * 20}
          height={unitHeight * 24}
          source={require("../../../assets/logo_cat.svg")}
        />
        <View style={styles.avatarWrapper}>
          <Image
            source={
              userInfo?.avatar
                ? { uri: userInfo.avatar }
                : require("../../../assets/avatar.png")
            }
            style={styles.avatar}
          />
        </View>
      </View>
      {/* {list?.events?.map((item: { [key: string]: any }) => (
        <ListItem data={item} key={item.id} />
      ))} */}
      {list?.events ? (
        <FlatList
          data={list?.events}
          renderItem={(data) => <ListItem data={data.item} />}
          keyExtractor={(item) => item.id}
        />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  top: {
    height: unitHeight * 40 + statusBarHeight,
    backgroundColor: "#8560A9",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: unitWidth * 14,
    paddingTop: statusBarHeight,
    alignItems: "center",
  },
  logoCat: {
    // marginTop: unitHeight * 8,
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  avatarWrapper: {
    width: unitWidth * 24,
    height: unitWidth * 24,
    borderRadius: 50,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
});
