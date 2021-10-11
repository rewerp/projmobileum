import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { style } from './styles';
import IllustrationImg from '../../assets/illustration.png'

export function SignIn() {
   const [text, setText] = useState('');


   return(
      <View style={style.container}>
         <Image 
            source={IllustrationImg} 
            style={style.image}
         />
         <View style={style.content}>
            <Text style={style.title}>
               Organize {`\n`}
               suas jogatinas {`\n`}
               facilmente {`\n`}
            </Text>
            <Text style={style.subtitle}>
               Crie grupos para jogar seus games {`\n`}
               favoritos com seus amigos
            </Text>
         </View>
      </View>
   )
}