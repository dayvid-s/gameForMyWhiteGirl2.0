// man, the documentation it's ur bestfriend, was just you go at the
// documentation of react navigation, that you would solved this problem of params
import React, {useState} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import desafios from './desafios';

const shuffle=()=>{
  var currentIndex = desafios.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = desafios[currentIndex];
      desafios[currentIndex] = desafios[randomIndex];
      desafios[randomIndex] = temporaryValue;
  }}

shuffle(desafios)
export default function PlayChallenges()  {
  
  const navigation = useNavigation();
  const route = useRoute()
  React.useEffect(() => {
    if(route.params?.storageDataList){
    console.log("🚀 ~ file: Truth.js ~ line 28 ~ React.useEffect ~ route.params?.storageDataList",
     route.params?.storageDataList)
    //eu consegui caralho, eu posso fazer o mesmo agora, 
    //simplesmente route.params?.storageDataList na posição [numerodesafio]
    //
  }
  }, )

  const [numerodesafio, setNumeroDesafio] = useState(0) // the length just worked with this array,
                                                         // he don't work with usestate(0)
  const addDesafio=()=>{   if (desafios.length-1 > numerodesafio ) {                       
    setNumeroDesafio(numerodesafio+1)} else{
      setNumeroDesafio(0)
    }
  }
  // aqui precisa de uma condição, pq senao vai chegar num nivel que não tem mais desafio

  return(
        <View style={styles.container} >
            <View style={{height: ('5%')}} > 
              <Text style={styles.lettersOne}  >Dayvid </Text>
              <TouchableOpacity onPress={() => {navigation.goBack()}}  >
                 <Icon name='left' size={30} color='#ff09de'/>
              </TouchableOpacity>
              <Text style={styles.lettersTwo} >HARD</Text>
          </View>
             <View style={{justifyContent:'space-evenly'}}  >
             <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
             <View>
               <Text style={{fontSize:28,textAlign:'center'}} >{desafios[numerodesafio]} </Text>
            </View>

              <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
             </View>
           
           <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between'  } } >
              <View style={{right:20}}  >
                <TouchableOpacity onPress={addDesafio}  >
                <Icon name='reload1' size={70} color='#ff09de' />
                </TouchableOpacity>
              </View>
              
              <View >
                <TouchableOpacity onPress={() => {navigation.goBack()}} >
                  <Icon name='caretright' size={70} color='#ff09de'/>
                </TouchableOpacity>
              </View>
              
              <View style={{left:20}}>
                <TouchableOpacity onPress={()=> navigation.push('AddDare')}>
                <Icon name='pluscircle' size={70} color='#ff09de' />
                 </TouchableOpacity>
              </View>
           </View>
      
        </View>
           
      )}
  
      const styles = StyleSheet.create({
        container:{
          backgroundColor: (`#000000`),
          height:'100%',
          padding:20,
          justifyContent:'space-between'
          
        },
        lettersOne:{  
            fontSize:30,
            color:('#ff09de'),
            alignSelf:'center',
            
        },
        lettersTwo:{
          fontSize:20,
          color:('#ff66eb'),
          color:('#be2596'),
          fontStyle:('normal'),
          fontWeight:('100'),
          alignSelf:'center'
        },
        lettersThree:{
          fontSize:40,
          color:('#ff09de'),
          alignSelf:'center',
          
      
      }
      });