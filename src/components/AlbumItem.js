import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Dimensions } from 'react-native';
const AlbumItem = (props) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <View>
            <TouchableOpacity style={styles.albums} onPress={props.showModal}>
              <View style={{justifyContent:'center'}}>
                <Image source={{ uri: props.albumsData.item["im:image"][2].label }} style={styles.image} />
              </View>
              <View>
                <Text style={styles.albumName}>{props.albumsData.item["im:name"].label}</Text>
                <Text style={styles.albumArtist}>{props.albumsData.item["im:artist"].label}</Text>
                <Text>{props.albumsData.item["im:releaseDate"].attributes.label}</Text>
                <Text>{props.albumsData.item["im:price"].label}</Text>
              </View>

            </TouchableOpacity>
          </View>
        </View>
      </View>


    </>
  )
}
const styles = StyleSheet.create({

  card: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    // shadowOffset: { width: 40, height: 40, },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
    // shadowRadius: 2,
    // elevation: 5,
    marginVertical: 2,
    borderRadius: 5

  },
  cardItem: {
    paddingVertical: 10,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',

  },
  albums: {
    flexDirection: 'row',
    width: Dimensions.get("window").width * .7
  },
  albumName: {
    fontWeight: '700',
    fontSize: 16
  },
  image: {
    width: 60, 
    height: 60, 
    borderRadius: 5,
    marginRight: 15,
  },
})
export default AlbumItem;