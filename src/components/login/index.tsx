import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground, TextInput, Image } from 'react-native';
import { unitWidth, unitHeight } from '../../AdapterUtil';
import SvgUri from 'expo-svg-uri';
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
    const { account, password, accountFoucs, passwordFoucs } = this.state;
    // 验证
    // 提交
    alert(`account:${account},password:${password}--------${accountFoucs}------${passwordFoucs}`);
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
            {/* <Image source={} style={styles.logoCat} /> */}
            <View style={styles.logoCatWrapper}>
              <SvgUri source={require('../../../assets/logo_cat.svg')} width={unitWidth * 40} height={unitWidth * 40} style={styles.logoCat} />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput style={[styles.logInInput, accountFoucs ? styles.logInInputFocus : {}]} value={account} placeholderTextColor={'#AC8EC9'} placeholder="Account" onChangeText={this.handleAccountChange} onFocus={() => this.handleAccountFocus(true)} onBlur={() => this.handleAccountFocus(false)}>
              </TextInput>
              <SvgUri source={require('../../../assets/logo_cat.svg')} width={unitWidth * 13} height={unitWidth * 13} style={styles.accountIcon} />
              <TextInput style={[styles.logInInput, styles.inputSpace, passwordFoucs ? styles.logInInputFocus : {}]} value={password} placeholderTextColor={'#AC8EC9'} placeholder="Password" onChangeText={this.handlePasswordChange} onFocus={() => this.handlePasswordFocus(true)} onBlur={() => this.handlePasswordFocus(false)}></TextInput>
              <SvgUri source={require('../../../assets/logo_cat.svg')} width={unitWidth * 13} height={unitWidth * 13} style={styles.passwordIcon} />
            </View>
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
    fontSize: unitWidth * 16,
    color: '#D5EF7F',
    textAlign: 'center',
    marginTop: unitHeight * 69
  },
  logInTitle: {
    fontSize: unitWidth * 24,
    color: '#D5EF7F',
    textAlign: 'center',
    fontWeight: "700",
    marginTop: unitHeight * 16
  },
  logoCatWrapper: {
    marginTop: unitHeight * 37,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: unitWidth * 64,
    height: unitWidth * 64,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#D5EF7F',
    position: 'relative',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoCat: {
    // textAlign: 'center'
    // marginLeft: 'auto',
    // marginRight: 'auto'
    marginTop: -unitWidth * 10
  },
  inputWrapper: {
    marginTop: unitHeight * 118
  },
  logInInput: {
    width: unitWidth * 240,
    height: unitHeight * 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: unitHeight * 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: unitHeight * 16,
    paddingLeft: unitWidth * 34,
  },
  logInInputFocus: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFFFFF'
  },
  inputSpace: {
    marginTop: unitHeight * 16
  },
  accountIcon: {
    position: 'absolute',
    left: unitWidth * 50,
    top: unitHeight * 13
  },
  passwordIcon: {
    position: 'absolute',
    left: unitWidth * 50,
    top: unitHeight * 68
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