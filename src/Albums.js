import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';

import Header from "./components/AlbumHeader";
import AlbumInfo from "./components/AlbumInfo";
import AlbumItem from "./components/AlbumItem";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [initialAlbums, setInitialAlbums] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [sortById, setSortById] = useState(0);
  useEffect(() => {
    var url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json()).then(data => {
      setAlbums(data.feed.entry);
      setInitialAlbums(data.feed.entry);
    }).catch((error) => {
      console.log("Post Error :", JSON.stringify(error));
    }).done();
  }, []);

  const showModal = (data) => {
    setShow(true);
    setModalData(data);
  }
  const sortBy = (id) => {
    setSortById(id);
    switch (id){
      case 0: {
        setInitialAlbums(albums);
        // break;
      }
      case 1: {
        let data = albums.sort((a, b)=>{
          var artistA=a["im:artist"].label.toLowerCase(), artistB=b["im:artist"].label.toLowerCase()
          if (artistA > artistB){
            return 1 
          }
              
          if (artistA < artistB){
            return -1
          }
          return 0
           
      })
        setInitialAlbums(data);
        break;
      }
      case 2: {
        let data = albums.sort((a, b)=>{
          var artistA=a["im:artist"].label.toLowerCase(), artistB=b["im:artist"].label.toLowerCase()
          if (artistA < artistB){
            return 1 
          }
              
          if (artistA > artistB){
            return -1
          }
          return 0 
      })
        setInitialAlbums(data);
        break;
      }
      case 3:{
        let data = albums.sort((a, b) => {
          return parseFloat(a["im:price"].attributes.amount) - parseFloat(b["im:price"].attributes.amount)
        })
        setInitialAlbums(data);
        break;
      }
      case 4:{
        let data = albums.sort((a, b) => {
          return parseFloat(b["im:price"].attributes.amount) - parseFloat(a["im:price"].attributes.amount)
        })
        setInitialAlbums(data);
        break;
      }
      case 5:{
        let data = albums.sort((a, b) => {
          return new Date(b["im:releaseDate"].label) - new Date(a["im:releaseDate"].label);
        })
        setInitialAlbums(data);
        break;
      }
      case 6:{
        let data = albums.sort((a, b) => {
          return new Date(a["im:releaseDate"].label) - new Date(b["im:releaseDate"].label);
        })
        setInitialAlbums(data);
        break;
      }
      default: {
        setInitialAlbums(albums);
      }
    }
  }
  const searchAlbums = (e) => {
    setSearch(e);
    if (e.length > 0) {
      let text = e.toLowerCase();
      const data = albums.filter(item => {
        const albumName = item["im:name"].label.toLowerCase();
        return albumName.indexOf(text) > -1;
      });
      setInitialAlbums(data)
    } else {
      setInitialAlbums(albums)
    }
  }

  return (
    <View style={styles.viewStyle}>
      <Header search={search} onChange={searchAlbums} sortBy={sortBy} sortById={sortById} />
      <View style={styles.albumView}>
        <FlatList
          data={initialAlbums}
          keyExtractor={item => item.id.label}
          renderItem={(item) => (
            <AlbumItem albumsData={item} showModal={() => showModal(item.item)} />
          )}
        />
      </View>
      <AlbumInfo data={modalData} show={show} onHide={() => setShow(false)} />
    </View>
  );

};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10
  },
  albumView: {
    flex: 1
  }
});

export default Albums;
