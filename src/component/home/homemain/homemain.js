import React, {Component} from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
import {
  SafeAreaView,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const Homemain = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        source={require('../../../image/29375-hintergrundbilder-fuer-samsung-1080x1920-ios.jpg')}
        style={{
          flex: 1,
        }}
        resizeMode="cover">
        <View
          style={{
            flexDirection: 'row',
            height: 50,

            marginTop: 60,
          }}>
          <View style={{width: 40, height: 40, marginLeft: 20}}>
            <Image
              source={require('../../../image/menu.png')}
              style={{width: 40, height: 40}}
              tintColor="white"
              resizeMode="stretch"
            />
          </View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 50,
            }}>
            UNETI ONLINE
          </Text>
          <View style={{width: 40, height: 40, marginLeft: 45}}>
            <Image
              source={require('../../../image/z5035800852461_99b7e26dce0dbade9458ff4ef1809cc9.jpg')}
              style={{width: 40, height: 40}}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: '90%',
            borderRadius: 40,
            marginTop: 30,
            alignItems: 'center',
          }}>
            <TouchableOpacity onPress={()=>{
               props.navigation.navigate('thutuchanhchinh');
            }}>
            <View
            style={{
             
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row',
              borderRadius:8,
              backgroundColor:'red',
             
            }}>
              <View style={{width:120,height:100,backgroundColor:'#006699',borderTopRightRadius:100,justifyContent:'center'}}>
                <Image source={require('../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                THỦ TỤC HÀNH CHÍNH
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Tiếp nhận các đề nghị:Lịch học;Lịch thi; Kết quả học tập; Đăng ký học tập;Đăng ký cấp/xác nhận giấy tờ...)</Text>
              </View>
            </View>
            </TouchableOpacity>
          
          <View
            style={{
           
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row'
            }}>
                <View style={{width:120,height:100,backgroundColor:'#000055',borderTopRightRadius:100,justifyContent:'center'}}>
 <Image source={require('../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                TRA CỨU
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Tra cứu thông tin; Lịch học; Điểm danh; Rèn luyện;Lịch thi; Công nợ)</Text>
              </View>
            </View>
          <View
            style={{
              
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row'
            }}>
                <View style={{width:120,height:100,backgroundColor:'#EECBAD',borderTopRightRadius:100,justifyContent:'center'}}>
 <Image source={require('../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                HỌC TẬP
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Kết quả học tập(KQHT); Chương trình đào tạo; Ôn luyện; Dự kiến KQHT)</Text>
              </View>
            </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
// function MyTabsHome() {
//   return (
//     <Tab.Navigator
//       screenOptions={{headerShown: false}}
//       tabBarOptions={{
//         showLabel: false,
//       }}>
//       <Tab.Screen
//         name=""
//         component={Home1}
//         options={{
//           tabBarIcon: () => (
//             <Image
//               style={{width: 30, height: 30}}
//               source={require('../image/bell.png')}
//               resizeMode={'stretch'}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: () => (
//             <Image
//               style={{height: 30, width: 30}}
//               source={require('../image/home.png')}
//               resizeMode="stretch"
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Home2"
//         component={Home2}
//         options={{
//           tabBarIcon: () => (
//             <Image
//               style={{height: 30, width: 30}}
//               source={require('../image/user.png')}
//               resizeMode="stretch"
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
export default Homemain;
