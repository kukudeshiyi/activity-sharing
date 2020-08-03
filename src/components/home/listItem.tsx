import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground, TextInput, Image } from 'react-native';
import { unitWidth, unitHeight } from '../../AdapterUtil';
import SvgUri from 'expo-svg-uri';
export default function ListItem() {
  return (
    <View style={styles.listItemWrapper}>
      <View style={styles.bottomLine}>
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
                <View style={styles.goingWrapper}>
                  <SvgUri source={require('../../../assets/check.svg')} width={unitWidth * 12} height={unitHeight * 10} style={styles.goingIcon} />
                  <Text style={styles.add}>I am going!</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={styles.likeWrapper}>
                  <SvgUri source={require('../../../assets/like.svg')} width={unitWidth * 12} height={unitHeight * 10} style={styles.likeIcon} />
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
    </View>
  )
}
const styles = StyleSheet.create({
  listItemWrapper: {
    paddingTop: unitHeight * 16,
    paddingLeft: unitWidth * 16,
  },
  bottomLine: {
    borderBottomWidth: unitHeight * 1,
    borderBottomColor: '#E8E8E8',
    paddingBottom: unitHeight * 18,
    paddingRight: unitWidth * 16
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
    alignItems: 'center'
  },
  userName: {
    fontSize: unitWidth * 12,
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
    borderRadius: unitHeight * 10,
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
    fontSize: unitWidth * 18,
    color: '#453257'
  },
  dateInfo: {
    marginTop: unitHeight * 8,
    fontSize: unitWidth * 12,
    color: '#8560A9'
  },
  content: {
    marginTop: unitHeight * 12,
    fontSize: unitWidth * 14,
    color: '#67616D'
  },
  oprationsWrapper: {
    flexDirection: 'row',
    marginTop: unitHeight * 12
  },
  add: {
    fontSize: unitWidth * 12,
    color: '#454357'
  },
  like: {
    fontSize: unitWidth * 12,
    color: '#454357'
  },
  activityImage: {
    width: unitWidth * 64,
    height: unitWidth * 64
  },
  goingWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: unitWidth * 31
  },
  goingIcon: {
    marginRight: unitWidth * 6
  },
  likeIcon: {
    marginRight: unitWidth * 6
  }
})