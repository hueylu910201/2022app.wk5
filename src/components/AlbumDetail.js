import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable ,ScrollView} from "native-base";
//import { StyleSheet, Text, View, Image, Pressable, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
  return(
    <Box marginX={1} marginBottom={5} borderRadius={3}>
      <Box w={180}>
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w="170"  h="250" >
            <Image
              w={170}
              h={250}
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
      </Box>
      <Box>
        <Image
          h={5}
          w={100}
          source={{uri:album.stars}}
          alt="stars"
        />
        <Text fontSize={16} fontWeight='bold'>{album.title}</Text>
        <Text fontSize={12} opacity={0.5}>{album.author}</Text>
      </Box>   
    </Box>
) };


export default AlbumDetail;
