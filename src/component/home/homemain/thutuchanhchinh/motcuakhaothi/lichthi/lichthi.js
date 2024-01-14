import React from "react";
// import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView,ImageBackground,Text,View,Image, ScrollView,TouchableOpacity} from "react-native";

const Lichthi=()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={require('../../../../../../image/29375-hintergrundbilder-fuer-samsung-1080x1920-ios.jpg')}
        style={{
          flex: 1,
        }}
        resizeMode="cover">
            <View style={{height:'13%', flexDirection:'row',alignItems:'center'}}> 
        <Image source={require('../../../../../../image/back.png')} style={{width:35,height:35,marginLeft:20}} tintColor={'white'}/>
       <Text style={{fontSize: 28, fontWeight:'bold', color:'white', marginLeft:90}}>Lịch thi</Text>
         </View>
         <View style={{height:'70%',backgroundColor:'white'}}>
            <Text style={{fontSize:16,fontWeight:'bold', color:'black', marginLeft:10, marginTop:10}}>Nội dung đề nghị</Text>
            <View style={{flexDirection:'row', marginTop:20, alignItems:'center'}}>
                <Text style={{fontSize:18,color:'black',marginLeft:10}}>Tên đợt:(*)</Text>
                {/* <Dropdown style={{height: 35,width:300,marginLeft:10,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,}} placeholder="Chọn tên đợt"/> */}
            </View> 
            <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
                <Text style={{fontSize:18,color:'black',marginLeft:10}}>Loại thi:(*)</Text>
                {/* <Dropdown style={{height: 35,width:300,marginLeft:10,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,}} placeholder="Chọn tên đợt"/> */}
            </View>
            <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
                <Text style={{fontSize:18,color:'black',marginLeft:10}}>Lý do:(*)</Text>
                {/* <Dropdown style={{height: 35,width:300,marginLeft:27,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,}} placeholder="Chọn tên đợt"/> */}
            </View>   
            <View style={{flexDirection:'row',marginHorizontal:10, marginTop:20}}>
                <ScrollView horizontal={true}>
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
            height:'8%',
            backgroundColor:'yellow',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <TouchableOpacity style={{width:150,backgroundColor:'white',height:40,borderRadius:30,justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:15,color:'black'}}>Hủy</Text>
            </TouchableOpacity>
          
        </View>
        </ImageBackground>
        </SafeAreaView>
    );
}
export default Lichthi