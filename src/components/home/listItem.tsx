import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground, TextInput, Image } from 'react-native';
import { unitWidth, unitHeight } from '../../AdapterUtil';
// import Svg, {
//   Circle,
//   Ellipse,
//   G,
//   TSpan,
//   TextPath,
//   Path,
//   Polygon,
//   Polyline,
//   Line,
//   Rect,
//   Use,
//   Symbol,
//   Defs,
//   LinearGradient,
//   RadialGradient,
//   Stop,
//   ClipPath,
//   Pattern,
//   Mask,
// } from 'react-native-svg';
import LogoCat from '../../../assets/logo_cat.svg';
export default function ListItem() {
  return (
    <View style={styles.listItemWrapper}>
      <LogoCat width={50} height={50} />
      {/* <Svg id="Layer_1" data-name="Layer 1" viewBox="0 0 32 32" height="50%" width="50%" color="red"><Polygon points="26.47 14.44 23.07 19.93 23.07 27.38 25.83 29.84 19.2 29.84 21.89 27.36 21.89 19.72 15.69 10.95 19.62 10.95 21.48 9.19 18.18 4.17 14.73 3.14 15.15 -0.03 9.92 4.17 2.83 17.38 7.78 28.12 5.51 30.53 5.51 31.97 9.26 31.97 10.18 31.48 10.93 31.97 29.94 31.97 29.94 30.25 25.68 25.99 25.68 20.55 27.96 16.84 28.78 16.84 29.2 20.08 30.4 20.08 30.71 14.44 26.47 14.44" /></Svg> */}
      <View style={styles.top}>
        <View style={styles.userInfoWrapper}>
          <View style={styles.avatarMask}>
            <Image source={require('../../../assets/login_bg.jpg')} style={styles.avatar} />
          </View>
          <Text style={styles.userName}>Username</Text>
        </View>
        <Text style={styles.channelName}>channel name</Text>
      </View>

      <View style={styles.activityInfoWrapper}>

        <View style={styles.activityInfo}>
          <View>
            <Text style={styles.title}>Activity Title Name Make it Longer May Longer than One Line</Text>
            <View>
              <Text style={styles.dateInfo}>14 May 2016 12:12 - 14 May 2016 18:00</Text>
            </View>
          </View>
          <Text style={styles.content}>Content good morning up koko canon jack stephen curry mongo simida</Text>
          <View style={styles.oprationsWrapper}>
            <TouchableHighlight>
              <View>
                <Text style={styles.add}>I am going!</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View>
                <Text style={styles.like}>I like it</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View>
          <Image source={require('../../../assets/login_bg.jpg')} style={styles.activityImage} />
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  listItemWrapper: {
    paddingTop: unitHeight * 16,
    paddingBottom: unitHeight * 18,
    paddingHorizontal: unitWidth * 16
  },
  top: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center'
    justifyContent: 'space-between'
  },
  userInfoWrapper: {
    // display: 'flex',
    // justifyContent,
    flexDirection: 'row',
    // justifyContent:,
    // alignItems: 'center'
  },
  userName: {
    fontSize: unitHeight * 12,
    color: '#67616D',
    marginLeft: unitWidth * 8
  },
  avatarMask: {
    borderRadius: unitWidth * 10,
    overflow: 'hidden',
    height: unitWidth * 20,
    width: unitWidth * 20
  },
  avatar: {
    height: unitWidth * 20,
    width: unitWidth * 20
  },
  channelName: {
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    lineHeight: unitHeight * 20,
    color: '#D3C1E5',
    paddingHorizontal: unitWidth * 8
  },
  activityInfoWrapper: {
    flexDirection: 'row',
    marginTop: unitHeight * 8
  },
  activityInfo: {
    flex: 1
  },
  title: {
    fontSize: unitHeight * 18,
    color: '#453257'
  },
  dateInfo: {
    marginTop: unitHeight * 8,
    fontSize: unitHeight * 12,
    color: '#8560A9'
  },
  content: {
    marginTop: unitHeight * 12,
    fontSize: unitHeight * 14,
    color: '#67616D'
  },
  oprationsWrapper: {
    flexDirection: 'row',
    marginTop: unitHeight * 12
  },
  add: {
    fontSize: unitHeight * 12,
    color: '#454357'
  },
  like: {
    fontSize: unitHeight * 12,
    color: '#454357'
  },
  activityImage: {
    width: unitWidth * 64,
    height: unitWidth * 64
  }
})