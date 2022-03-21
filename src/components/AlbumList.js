import React from "react";
import { FlatList , Text,StyleSheet} from "react-native";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (
      <FlatList
        horizontal={true}
        data={list}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.title}
      />     
  );  
}
const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    fontSize:24,
    fontWeight:'bold',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    textTransform: 'uppercase',
  },
})


export default AlbumList;