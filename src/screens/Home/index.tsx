import React from 'react';
import { View, Image } from 'react-native';
 
import { styles } from './styles';

import { GAMES } from '../../utils/games'; 

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
 
 export function Home() {
   return (
     <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}/>

      <Heading 
        title='Encontre seu duo!' 
        subtitle='selecione o game que deseja jogar..'
      />

      <GameCard
        data={GAMES[0]}
      />
 
     </View>
   );
 }