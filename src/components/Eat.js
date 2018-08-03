import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomList from './CustomList';
import { eatData } from '../data/eatData';

export default class Feed extends React.Component {
  render() {
    return (
      <View>
        <CustomList data={eatData} />
      </View>
    );
  }
}