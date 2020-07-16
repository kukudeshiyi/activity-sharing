import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground, TextInput, Image } from 'react-native';
import { unitWidth, unitHeight } from '../../AdapterUtil';
import ListItem from './listItem';
export default function Home() {
  return (
    <View>
      <View style={styles.top}></View>
      <ListItem />
    </View>
  )
}
const styles = StyleSheet.create({
  top: {
    height: unitHeight * 40,
    backgroundColor: '#8560A9'
  }
})