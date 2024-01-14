import React ,{useState} from "react";
import {View,Image,Text, SafeAreaView,ImageBackground, Button, TouchableOpacity, ScrollView } from "react-native";
// import { Dropdown } from "react-native-element-dropdown";
const Data=[{ label: 'Item 1', value: '1' },
{ label: 'Item 2', value: '2' },
{ label: 'Item 3', value: '3' },
{ label: 'Item 4', value: '4' },
{ label: 'Item 5', value: '5' },
{ label: 'Item 6', value: '6' },
{ label: 'Item 7', value: '7' },
{ label: 'Item 8', value: '8' },];
const Phuckhao=()=>{
    
    return (
        <SafeAreaView style={{flex:1}}>
 <ImageBackground source={require('../../../../../../image/29375-hintergrundbilder-fuer-samsung-1080x1920-ios.jpg')}
        style={{
          flex: 1,
        }}
        resizeMode="cover">
 <View style={{height:'13%', flexDirection:'row',alignItems:'center'}}> 
        <Image source={require('../../../../../../image/back.png')} style={{width:35,height:35,marginLeft:20}} tintColor={'white'}/>
       <Text style={{fontSize: 28, fontWeight:'bold', color:'white', marginLeft:90}}>Phúc khảo</Text>
         </View>
        <View style={{height:'60%', backgroundColor:'white'}}>
            <Text style={{fontSize:18,color:'black',fontWeight:'bold', marginLeft:10}}>I. Lưu ý</Text>
            <Text style={{color:'black',fontSize:16, marginLeft:10}}>- Người học thực hiện phúc khảo kết quả bài thi theo kế hoạc tổ chức thi (Ngày nộp đơn phúc khảo) trong từng học kỳ.</Text>
            <Text style={{color:'black',fontSize:16, marginLeft:10}}>- Lệ phí phúc khảo kết quả học tập: Có mức thu theo quy định, được chuyển trực tiếp vào công nợ, người học nộp cùng học phí kỳ kế tiếp.</Text>
            <Text style={{fontSize:18,color:'black',fontWeight:'bold', marginLeft:10}}>II. Nội dung đề nghị</Text>
            <View style={{flexDirection:'row', marginTop:20, alignItems:'center'}}>
                <Text style={{fontSize:18,color:'black',marginLeft:10}}>Tên đợt:(*)</Text>
                {/* <Dropdown style={{height: 35,width:300,marginLeft:10,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,}} placeholder="Chọn tên đợt" /> */}
            </View>
            <View style={{flexDirection:'row', marginTop:10, alignItems:'center'}}>
                <Text style={{fontSize:18,color:'black',marginLeft:10}}>Loại thi:(*)</Text>
                {/* <Dropdown style={{height: 35,width:300,marginLeft:10,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,}} placeholder="Chọn tên đợt"  /> */}
            </View>
            <View style={{flexDirection:'row',marginHorizontal:10, marginTop:20}}>
                <ScrollView horizontal={true}>
                <TouchableOpacity style={{backgroundColor:'blue', width:80, height:35, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:17}}>Chọn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'blue',marginLeft:10, width:170, height:35, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:17}}>Mã lớp học phần</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'blue',marginLeft:10, width:170, height:35, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:17}}>Tên học phần</Text>
                </TouchableOpacity>
                </ScrollView>
               
            </View>
        </View>
        <View style={{
            height:'13%',
            backgroundColor:'yellow',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <TouchableOpacity style={{width:150,backgroundColor:'white',height:40,borderRadius:30,justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:15,color:'black'}}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:150,marginLeft:30,backgroundColor:'white',height:40,borderRadius:30,justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:15,color:'black'}}>Lưu</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
        </SafeAreaView>
    );
}
export default Phuckhao