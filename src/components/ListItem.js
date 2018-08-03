import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import {default as joes} from '../images/joes.jpg'

export default class ListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const item = this.props.item;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.info} onPress={() => this.props.onPress(item)}>
          <Image source={item.image} style={{width: 45, height: 45, borderRadius: 10}}/>
          <Text style={styles.imageText}>{item.name}</Text>
        </TouchableOpacity>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 2,
  },
  description: {
    flex: 4,
    fontSize: 12,
    marginRight: 15
  },
  imageText: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});