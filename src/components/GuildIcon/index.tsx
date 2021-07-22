import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {  
        iconId ?    
        <Image 
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"    
        />
        :
        <DiscordSvg 
          width={40} 
          height={40}
        />
      }
    </View>
  )

}
//'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';