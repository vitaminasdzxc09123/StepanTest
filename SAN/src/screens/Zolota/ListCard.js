import React from 'react';
import {View,Text,StyleSheet, Button, Alert} from 'react-native';
import { ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ListCard extends React.Component{
    render(){
  
    function showAlert(){
         Alert.alert(
             "Розташування закладiв:", "1. вул. Ольги Кобилянської, 6                                     2.вул. Головна, 265 А",
              [{text:"ok",onPress: () => console.log("ok presed")}, 
                 ])}
     return( 
 <View
     style={{
     paddingHorizontal: 32,
     alignSelf: "center",
     marginTop: 270,
     backgroundColor: "#FFF",
     height: 182,
     elevation: 1,
     width: 340,
     borderRadius: 15,
             }}>
                 
 <View 
     style ={{
     flexDirection: "row",
     paddingTop:20,
     alignSelf:"center",
             }}>
 <Text
     style={{
     fontFamily:"RobotoBold",
     color:"black",
     fontSize:20,
     marginTop:-19
             }}> Золота Країна </Text>

 </View>
 <View style={{
        
        borderRadius: 50 ,
        backgroundColor: "#A7BFE8",
         height:37,
         marginLeft:-5,
         width:292,
         marginTop:5,
             }}>
  <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         style={{marginHorizontal: -40, marginTop: 0,marginLeft:0}} >
 <TouchableOpacity 
             onPress={showAlert}
             style={{
             marginTop:2,
             backgroundColor: "#fff",
             borderRadius: 50 ,
             marginLeft:3,
             width:285,
             height:32
             }}>
             
 <Text
     style={{
     marginTop:5,
     marginLeft:10,
     color:"black",
     fontSize:16,
             }}> вул. Ольги Кобилянської, 6 </Text>
 <FontAwesome 
     name="map-marker" 
     style={styles.iconStyle}
     size={27} 
    />
</TouchableOpacity>
</ScrollView>
</View>

 <Text
     style={{
     marginTop:10,
     marginLeft:10,
     color:"black",
     fontSize:16,
             }}> 1000  --  100 000  грн </Text> 

  
 <Entypo 
     name="credit" 
     style={styles.iconStyless}
     size={27} />


 <Text
     style={{
     marginTop:7,
     marginLeft:10,
     color:"black",
     fontSize:16,
             }}>"Золота каблучка з фіанітами"</Text>

 <MaterialCommunityIcons 
     name="fire" 
     style={styles.iconStyles}
     size={27} />


 </View>

         )}}

const styles = StyleSheet.create({
    submit:{
        marginRight:70,
        marginLeft:70,
        marginTop:25,
        paddingTop:7,
        paddingBottom:7,
        backgroundColor:'#86A8E7',
        borderRadius:29,
        borderWidth: 1,
        borderColor: '#86A8E7'
      },
      submitText:{
          color:'#fff',
          textAlign:'center',
      },
 iconStyle:{
     color: "#2980B9",
     marginLeft:254,
     marginTop:-26
     },
 iconStyles:{
     color: "red",
     marginLeft:246,
     marginTop:-25
     },
 iconStyless:{
     color: "#2ebf91",
     marginLeft:248,
     marginTop:-26
     }
})