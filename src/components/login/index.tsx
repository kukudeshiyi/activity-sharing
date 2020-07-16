import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground, TextInput, Image } from 'react-native';
import { unitWidth, unitHeight } from '../../AdapterUtil';
interface LoginProps {

}
interface LoginState {
  show: boolean;
  account: string,
  password: string,
  accountFoucs: boolean,
  passwordFoucs: boolean
}

class Login extends React.Component<LoginProps, LoginState>{
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      show: false,
      account: '',
      password: '',
      accountFoucs: false,
      passwordFoucs: false
    }
  }
  public handlePress = () => {
    const { account, password } = this.state;
    // 验证
    // 提交
    alert(`account:${account},password:${password}`);
  }
  public handleAccountChange = (value: string) => {
    this.setState(() => ({
      account: value
    }))
  }
  public handlePasswordChange = (value: string) => {
    this.setState(() => ({
      password: value
    }))
  }
  public handleAccountFocus = (value: boolean) => {
    this.setState(() => ({
      accountFoucs: value
    }))
  }
  public handlePasswordFocus = (value: boolean) => {
    this.setState(() => ({
      passwordFoucs: value
    }))
  }
  render() {
    const { show, account, password, accountFoucs, passwordFoucs } = this.state;
    return (
      <View>
        <View style={styles.topWrapper}>
          {/* <Text>{show ? '123' : '456'}</Text> */}
          <View style={styles.logInContentWrapper}>
            <Text style={styles.logInSlogan}>FIND THE MOST LOVED ACTIVITIES</Text>
            <Text style={styles.logInTitle}>BLACK CAT</Text>
            {/* <Image source={require('../../../assets/logo_cat.svg')} style={styles.logoCat} /> */}
            <TextInput style={[styles.logInInput]} value={account} placeholder="Account" onChangeText={this.handleAccountChange} onFocus={() => this.handleAccountFocus(true)} onBlur={() => this.handleAccountFocus(false)}></TextInput>
            <TextInput style={styles.logInInput} value={password} placeholder="Password" onChangeText={this.handlePasswordChange} onFocus={() => this.handleAccountFocus(true)} onBlur={() => this.handlePasswordFocus(false)}></TextInput>
          </View>
          <ImageBackground source={require('../../../assets/login_bg.jpg')} style={styles.logInBg}>
          </ImageBackground>
        </View>
        <TouchableHighlight onPress={this.handlePress}>
          <View style={styles.signBtn}>
            <Text style={styles.signText}>SIGN IN</Text>
          </View>
        </TouchableHighlight>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  topWrapper: {
    height: unitHeight * 506,
    backgroundColor: '#8560A9',
    position: 'relative'
  },
  logInBg: {
    height: unitHeight * 506,
    width: unitWidth * 320,
    resizeMode: 'cover',
    opacity: 0.3
  },
  logInContentWrapper: {
    position: 'absolute',
    width: unitWidth * 320,
    zIndex: 1
  },
  logInSlogan: {
    fontSize: unitHeight * 16,
    color: '#D5EF7F',
    textAlign: 'center',
    marginTop: unitHeight * 69
  },
  logInTitle: {
    fontSize: unitHeight * 24,
    color: '#D5EF7F',
    textAlign: 'center',
    fontWeight: "700",
    marginTop: unitHeight * 16
  },
  logoCat: {
    // backgroundColor: 'red'
  },
  logInInput: {
    width: unitWidth * 240,
    height: unitHeight * 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    // backgroundColor: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    fontSize: unitHeight * 16,
    // color: '#453257',
    color: 'red',
    paddingLeft: unitWidth * 34,
    // backgroundColor: '#D3C1E5'
  },
  logInInputFocus: {
    backgroundColor: '#FFFFFF',
    opacity: 0.2
  },
  signBtn: {
    height: unitHeight * 64,
    backgroundColor: '#D5EF7F',
  },
  signText: {
    textAlign: 'center',
    lineHeight: unitHeight * 64,
    fontSize: unitHeight * 23,
    color: '#453257'
  }
})

export default Login;