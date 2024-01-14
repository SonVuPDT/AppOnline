import React from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native";

const Motcuakhaothi=()=>{
    
    return <SafeAreaView style={{ flex:1}}>
        <ImageBackground source={require('../../../../../image/29375-hintergrundbilder-fuer-samsung-1080x1920-ios.jpg')}
        style={{
          flex: 1,
        }}
        resizeMode="cover">
        
        <View style={{height:'13%', flexDirection:'row',alignItems:'center'}}> 
        <Image source={require('../../../../../image/back.png')} style={{width:35,height:35,marginLeft:20}} tintColor={'white'}/>
       <Text style={{fontSize: 28, fontWeight:'bold', color:'white', marginLeft:35}}>Một cửa - Khảo thí</Text>
         </View>
        <View style={{height:'77%', backgroundColor:'white', alignItems:'center'}}>
        <ScrollView>
        <View
            style={{
             
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row',
              borderRadius:8,
            }}>
              <View style={{width:120,height:100,backgroundColor:'#006699',borderTopRightRadius:100,justifyContent:'center'}}>
                <Image source={require('../../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center',paddingTop:10}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                MIỄN HỌC, THI TIẾNG ANH
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center', color:'red'}}>(Xin miễn học, miễn thi học phần đã đăng ký trong cùng học kỳ)</Text>
              </View>
            </View>
            <View
            style={{
             
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row',
              borderRadius:8,
              
             
            }}>
              <View style={{width:120,height:100,backgroundColor:'#006699',borderTopRightRadius:100,justifyContent:'center'}}>
                <Image source={require('../../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center', paddingTop:10}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                PHÚC KHẢO
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Phúc khảo bài thi lần 1; Phúc khảo bài thi lại)</Text>
              </View>
            </View>
            <View
            style={{
             
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row',
              borderRadius:8,
             
             
            }}>
              <View style={{width:120,height:100,backgroundColor:'#006699',borderTopRightRadius:100,justifyContent:'center'}}>
                <Image source={require('../../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center',paddingTop:10}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
               LỊCH THI
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Xem lịch thi; Trùng lịch thi; Không có lịch thi...)</Text>
              </View>
            </View>
            <View
            style={{
             
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row',
              borderRadius:8,
              
             
            }}>
              <View style={{width:120,height:100,backgroundColor:'#006699',borderTopRightRadius:100,justifyContent:'center'}}>
                <Image source={require('../../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center',paddingTop:10}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                ĐĂNG KÝ THI LẠI
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Trùng lịch thi; Lỗi website sinhvien.uneti.edu.vn; Khác hệ, loại hình đào tạo; Thi không theo kế hoạch; Lý do khác)</Text>
              </View>
            </View>
            <View
            style={{
             
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row',
              borderRadius:8,
             
             
            }}>
              <View style={{width:120,height:100,backgroundColor:'#006699',borderTopRightRadius:100,justifyContent:'center'}}>
                <Image source={require('../../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
               HOÃN THI
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Đi viện hoặc theo yêu cầu bác sĩ; Thực hiện nhiệm vụ nhà trường giao; Lý do khác)</Text>
              </View>
            </View>
            <View
            style={{
             
              height: 100,
              width: 370,
              marginTop: 15,
              flexDirection:'row',
              borderRadius:8,
             
             
            }}>
              <View style={{width:120,height:100,backgroundColor:'#006699',borderTopRightRadius:100,justifyContent:'center'}}>
                <Image source={require('../../../../../image/earth-globe.png')} style={{width:70,height:70, marginLeft:10}} resizeMode='stretch'/>
              </View>
              <View style={{width:250,height:100,flexDirection:'column',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
               HỦY ĐĂNG KÝ THI LẠI
              </Text>
              <Text style={{color:'black',fontStyle:'italic',textAlign:'center'}}>(Biểu mẫu tham khảo; Quy trình, thủ tục)</Text>
              </View>
            </View>
        </ScrollView>
        </View>
        </ImageBackground>
    </SafeAreaView>
}
export default Motcuakhaothi