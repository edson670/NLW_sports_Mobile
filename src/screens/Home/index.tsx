 import React from 'react';
 import { View, Image } from 'react-native';
 
 import { styles } from './styles';

 import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
 
 export function Home() {
   return (
     <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}/>

      <Heading 
        title='Encontre seu duo!' 
        subtitle='selecione o game que deseja jogar..'
      />
 
     </View>
   );
 }