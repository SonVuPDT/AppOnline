import React, {useContext, useState} from 'react';
import axios from 'axios';
import { user_login } from '../../api/user_login';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import { jwtDecode } from 'jwt-decode';
//import { setDefaultTokenForAccount,getDefaultTokenForAccount } from '../API/AcoountTokenManager';
// var getapi = 'https://659afb12d565feee2daabc7f.mockapi.io/Account';
const Login = (props) => {
  [isselected, setselect] = useState(false);
  [tendangnhap, settendangnhap] = useState('');
  [matkhau, setmatkhau] = useState('');
  [ishide, sethide] = useState(true);
  // function getaccount(callback) {
  //   fetch(getapi)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(callback);
  // }
  const onhide = () => {
    sethide(!ishide);
  };
  const onpress = () => {
    setselect(!isselected);
  };
  const onchange = textinput => {
    settendangnhap(textinput);
    setmatkhau(textinput);
  };
  return (
    <SafeAreaView
    style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}>
      <View  style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}>
        <View
          style={{
            flex: 30,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../image/z5035800852461_99b7e26dce0dbade9458ff4ef1809cc9.jpg')}
            style={{
              width: 230,
              height: 230,
              resizeMode: 'stretch',
            }}
          />
        </View>

        <View
          style={{
            flex: 35,
          }}>
          <View style={{marginTop: 5}}>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Tên đăng nhập
            </Text>

            <View
              style={{borderWidth: 1, marginHorizontal: 20, borderRadius: 5}}>
              <TextInput
                onChangeText={text => settendangnhap(text)}
                value={tendangnhap}
                style={{color: 'grey', fontSize: 20}}></TextInput>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Mật khẩu
            </Text>
            <View
              style={{
                borderWidth: 1,
                marginHorizontal: 20,
                borderRadius: 5,
                flexDirection: 'row',
              }}>
              <TextInput
                style={{
                  width: '100%',
                  color: 'grey',
                  fontSize: 20,
                }}
                onChangeText={text => setmatkhau(text)}
                secureTextEntry={ishide}
                value={matkhau}
              />
              <View>
                <TouchableOpacity onPress={onhide}>
                  {ishide ? (
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        position: 'absolute',
                        right: 0,

                        marginVertical: 15,
                        marginRight: 10,
                      }}
                      source={require('../../image/visible.png')}
                      resizeMode="stretch"
                    />
                  ) : (
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        position: 'absolute',
                        right: 0,

                        marginVertical: 15,
                        marginRight: 10,
                      }}
                      source={require('../../image/hide.png')}
                      resizeMode="stretch"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
            }}>
            <CheckBox
              value={isselected}
              onValueChange={onpress}
              tintColor={{true: '#00688B', false: 'red'}}
            />
            <Text
              style={{
                marginTop: 5,
              }}>
              Nhớ mật khẩu
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#245d7c',
                justifyContent: 'center',
                height: 50,
                width: 150,
                borderRadius: 50,
              }}
              onPress={() => {
                if (tendangnhap === '') {
                  Alert.alert('Bạn chưa nhập tên đăng nhập');
                } else if (matkhau === '') {
                  Alert.alert('Bạn chưa nhập mật khẩu');
                } else {
                user_login({
                  TC_SV_MaSinhVien: tendangnhap.toLocaleLowerCase(),
                  TC_SV_MaSinhVien_Pass: matkhau,
                    })
                    .then(result => {
                      console.log(result);
                      if (result.status == 200) {
                        Alert.alert("Đăng nhập thành công!!!");
                        AsyncStorage.setItem('token', result.data.token);
                        props.navigation.navigate('homemain');
                      }else{
                        Alert.alert("Đăng nhập thất bại!!");
                      }
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Đăng Nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 15,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17}}>TRƯỜNG ĐẠI HỌC</Text>
          <Text style={{fontSize: 17}}>KINH TẾ-KỸ THUẬT CÔNG NGHIỆP</Text>
          <Text style={{fontSize: 17}}>Tel:(024)38621504 - (0228)3848706</Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
            }}>
            <View>
              <Image
                source={require('../../image/earth-globe.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
              }}>
              <Image
                source={require('../../image/facebook.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                }}
              />
            </View>
            <View>
              <Image
                source={require('../../image/youtube.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
