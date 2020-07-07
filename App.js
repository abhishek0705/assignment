import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Albums from "./src/Albums";
import { MenuProvider } from 'react-native-popup-menu';
const App = () => {
  return(
    <MenuProvider>
      <SafeAreaView style={styles.container}>
        <Albums />
      </SafeAreaView>
    </MenuProvider>
  )
}
const styles = StyleSheet.create({
  container :{
    flex:1
  }
});
export default App;