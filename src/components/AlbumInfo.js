import React from 'react';
import { Modal, StyleSheet, Image, View, Text, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from 'react-native';
import CloseIcon from '../images/close.png'
const AlbumInfo = ({ data, onHide, show }) => {
  return (
    (show) ?
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        style={styles.modal}
      >
        <TouchableWithoutFeedback  onPress={()=>{onHide()}}>
        <View style={styles.centeredView}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.modalView}>
            <View style={{}}>
              {/* <TouchableOpacity onPress={() => onHide()} style={styles.closeView}>
                <Image source={CloseIcon} style={styles.closeIcon} />
              </TouchableOpacity> */}
              {/* <View style={{  }}> */}
                <View style={styles.imageView}>
                  <Image source={{ uri: data["im:image"][2].label }} style={styles.modalImage} />
                </View>
              {/* </View> */}
              <View style={styles.albumView}>

                <View style={styles.albumInfo}>
                  <View style={styles.albumBottom}>
                  <Text style={styles.albumName}>{data["im:name"].label}</Text>
                  <View style={styles.artist}>
                    <Text style={styles.albumArtist}>{data["im:artist"].label}</Text>
                    <Text style={styles.albumArtist}>{data["category"].attributes.label}</Text>
                  </View>
                  </View>
                  <View style={styles.albumDescription}>
                    <Text style={styles.albumPrice}>Price: {data["im:price"].label}</Text>
                    <Text style={styles.date}>Release Date {data["im:releaseDate"].attributes.label}</Text>
                    <Text style={styles.rights}>{data["rights"].label}</Text>
                  </View>
                </View>
                <View style={{flex:1}}>


                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      : null
  )
}
const styles = StyleSheet.create({
  closeView: {
    position: 'absolute',
    right: 10,
    top: 10,
    elevation: 50,
    zIndex: 1000
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,

  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 2,
  },
  albumView: {
    alignItems: 'center',
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex:1
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 5
  },
  albumInfo: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
    marginBottom: 10,
  },
  albumName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  },
  artist: {

    
    
    // backgroundColor:'red',
    
  },
  albumBottom:{
    width:Dimensions.get('window').width*.8,
    paddingBottom: 10,
    marginVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  albumArtist: {
    textAlign: "center",
    color: 'rgb(0, 122, 255)'
  },
  albumDescription: {
    paddingHorizontal:15
  },
  albumPrice: {
    textAlign: "center",
    width: '100%'
  },

  date: {
    // textAlign: "center"
  },
  rights: {
    color: '#aaa'
  }
})
export default AlbumInfo;