import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button } from "native-base";


const DetailScreen = ({ route }) => {
  const { title, 
    author,
    url,
    image,
    stars,
    scores,
    description
  } = route.params;
  return (
    <Center bg="white">
      <ScrollView>
        <Box w="200" h="300" mx="auto" mt={5} mb={3}>
          <Image
            w={200}
            h={300}
            source={{uri: image }}
            alt='albumImage'
          />
        </Box>
        <Box  padding="2" margin="2">
            <Text fontSize={24} mx="auto" fontWeight='bold'>{title}</Text>
            <Text fontSize={14} mx="auto" color='#666666'>{author}</Text>
            <Box mx='auto' flexDirection={'row'}>
              <Image
                h={5}
                w={100}
                source={{uri:stars}}
              />
              <Text fontSize={14} mx="auto" color='#666666' paddingLeft={5}>{scores}</Text>
            </Box>
            <Text mx="auto" textAlign="center">{description}</Text>
        </Box>
        <Box padding="2" margin="2">
          <Center>
          </Center>
          <Button 
            mt="4"
            fontSize={14}
            bg='#6200EE'
            onPress={() => Linking.openURL(url)}
          >
            Buy Now for $46.99
          </Button>   
        </Box>
       
      </ScrollView>      
    </Center>

  );
}

export default DetailScreen;
