import React from 'react';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';

import SearchIcon from '../images/search.png';
import SortIcon from '../images/sort.png';
const Header = ({ search, onChange, sortById, sortBy }) => {
  return (
    <>
      <View style={styles.headerView}>
        <TextInput
          value={search}
          onChangeText={onChange}
          style={styles.searchBar}
          placeholder="Search Album..."
        />
        <Image style={styles.searchIcon} source={SearchIcon} />
        <Menu>
          <MenuTrigger>
            <Image style={styles.sortIcon} source={SortIcon} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => { sortById === 1 ? sortBy(0) : sortBy(1) }}>
              <Text style={{ color: sortById == 1 ? 'red' : 'black' }}>Sort By Artist Ascending</Text>
            </MenuOption>
            <MenuOption onSelect={() => { sortById === 2 ? sortBy(0) : sortBy(2) }}>
              <Text style={{ color: sortById == 2 ? 'red' : 'black' }}>Sort By Artist Descending</Text>
            </MenuOption>
            <MenuOption onSelect={() => { sortById === 3 ? sortBy(0) : sortBy(3) }} >
              <Text style={{ color: sortById == 3 ? 'red' : 'black' }}>Sort By Price Ascending</Text>
            </MenuOption>
            <MenuOption onSelect={() => { sortById === 4 ? sortBy(0) : sortBy(4) }} >
              <Text style={{ color: sortById == 4 ? 'red' : 'black' }}>Sort By Price Descending</Text>
            </MenuOption>
            <MenuOption onSelect={() => { sortById === 5 ? sortBy(0) : sortBy(5) }}>
              <Text style={{ color: sortById == 5 ? 'red' : 'black' }}>Sort By Release Date Ascending</Text>
            </MenuOption>
            <MenuOption onSelect={() => { sortById === 6 ? sortBy(0) : sortBy(6) }}>
              <Text style={{ color: sortById == 6 ? 'red' : 'black' }}>Sort By Release Date Descending</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  searchBar: {
    width: '100%',
    fontSize: 14,
    flex: 1,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#000',
  },
  searchIcon: {
    padding: 10,
    width: 20,
    height: 20
  },
  sortIcon: {
    padding: 10,
    width: 20,
    height: 20,
    marginHorizontal: 10
  },
})
export default Header;