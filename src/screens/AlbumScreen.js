import React from "react";
import { Box , Text , ScrollView} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <Box flex={1}>
      <Box>
        <Text fontSize={24} fontWeight='bold'>Popular</Text>
        <AlbumList 
          list={albumData.albumList}
          navigation={navigation}
        />
      </Box>

      <Box marginBottom={20}>
        <Text fontSize={24} fontWeight='bold'>News</Text>
        <AlbumList 
          list={albumData.albumList2}
          navigation={navigation}
        />
      </Box>
      
    </Box>
    
  );
};

export default AlbumScreen;
