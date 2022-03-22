import React from "react";
import { Box , Text , ScrollView} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <ScrollView flex={1} bg="white">
      <Box marginLeft={3} bg="white">
        <Text fontSize={24} marginTop={5} marginBottom={5} fontWeight='bold'>Popular Books</Text>
        <AlbumList 
          list={albumData.albumList}
          navigation={navigation}
        />
      </Box>

      <Box marginLeft={3} bg="white">
        <Text fontSize={24} fontWeight='bold'  marginTop={5} marginBottom={5} >Newest</Text>
        <AlbumList 
          list={albumData.albumList2}
          navigation={navigation}
        />
      </Box>
      
    </ScrollView>
    
  );
};

export default AlbumScreen;
