import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomList from './CustomList';
import { learnData } from '../data/learnData';

export default class Learn extends React.Component {
  render() {
    return (
      <View>
        <CustomList data={learnData} />
      </View>
    );
  }
}