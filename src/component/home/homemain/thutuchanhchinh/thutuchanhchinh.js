import React, {Component} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';

const Thutuchanhchinh = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        source={require('../../../../image/29375-hintergrundbilder-fuer-samsung-1080x1920-ios.jpg')}
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
              source={require('../../../../image/menu.png')}
              style={{width: 30, height: 30}}
              tintColor="white"
              resizeMode="stretch"
            />
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 50,
            }}>
            THỦ TỤC HÀNH CHÍNH
          </Text>
          <View style={{width: 40, height: 40, marginLeft: 45}}>
            <Image
              source={require('../../../../image/z5035800852461_99b7e26dce0dbade9458ff4ef1809cc9.jpg')}
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
            <ScrollView>
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
                <Image source={require('../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                HƯỚNG DẪN
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Biểu mẫu tham khảo; Quy trình, thủ tục)</Text>
              </View>
            </View>
          <View
            style={{
           
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row'
            }}>
                <View style={{width:120,height:100,backgroundColor:'#000055',borderTopRightRadius:100,justifyContent:'center'}}>
 <Image source={require('../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                MỘT CỬA - KHẢO THÍ
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Tiếp nhận: Miễn học thi Tiếng Anh; Phúc khảo; Lịch thi; Đăng ký thi lại; Hoãn thi; Hủy đăng ký thi lại; Kết quả học tập)</Text>
              </View>
            </View>
          <View style={{height: 100,width: 370,marginTop: 15,flexDirection:'row'}}>
                <View style={{width:120,height:100,backgroundColor:'#EECBAD',borderTopRightRadius:100,justifyContent:'center'}}>
 <Image source={require('../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                MỘT CỬA - ĐÀO TẠO
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Tiếp nhận; Bảng điểm; Xác nhận; Đăng ký tốt nghiệp (xét, thi, hoãn); Cấp bản sao; Sửa thông tin (văn bằng, chứng chỉ); Miễn chứng chỉ; Chuyển điểm)</Text>
              </View>
            </View>
            <View style={{height: 100,width: 370,marginTop: 15,flexDirection:'row'}}>
                <View style={{width:120,height:100,backgroundColor:'#EECBAD',borderTopRightRadius:100,justifyContent:'center'}}>
 <Image source={require('../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                MỘT CỬA - CT&CTSV
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Tiếp nhận; Xác nhận; Quá trình học tập; Nghỉ học tạm thời; Xin chuyển)</Text>
              </View>
            </View>
            <View style={{height: 100,width: 370,marginTop: 15,flexDirection:'row'}}>
                <View style={{width:120,height:100,backgroundColor:'#EECBAD',borderTopRightRadius:100,justifyContent:'center'}}>
 <Image source={require('../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                MỘT CỬA - HÀNH CHÍNH
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Tiếp nhận: Giấy giới thiệu)</Text>
              </View>
            </View>
            </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Thutuchanhchinh;
