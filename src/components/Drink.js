import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CustomList from './CustomList';
import { drinkData } from '../data/drinkData';

export default class Drink extends React.Component {
  render() {
    return (
      <View>
        <CustomList data={drinkData} />
      </View>
    );
  }
}