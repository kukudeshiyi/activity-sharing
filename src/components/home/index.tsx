import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import { unitWidth, unitHeight, statusBarHeight } from '../../AdapterUtil';
import ListItem from './listItem';
import SvgUri from 'expo-svg-uri';
interface Props {

}
// @TODO:合并navigation类型
type PropsType = any;
export default function Home(props: PropsType) {
  const { navigation } = props;
  return (
    <View>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <SvgUri source={require('../../../assets/search.svg')} width={unitWidth * 18} height={unitHeight * 18} />
        </TouchableOpacity>
        <SvgUri style={styles.logoCat} width={unitWidth * 20} height={unitHeight * 24} source={require("../../../assets/logo_cat.svg")} />
        <View style={styles.avatarWrapper}>
          <Image source={require('../../../assets/avatar.png')} style={styles.avatar} />
        </View>
      </View>
      <ListItem />
    </View>
  )
}
const styles = StyleSheet.create({
  top: {
    height: unitHeight * 40 + statusBarHeight,
    backgroundColor: '#8560A9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: unitWidth * 14,
    paddingTop: statusBarHeight,
    alignItems: 'center'
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
    overflow: 'hidden'
  },
  avatar: {
    width: '100%',
    height: '100%'
  }
})