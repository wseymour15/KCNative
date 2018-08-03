import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem';
import CustomModal from './CustomModal';

export default class CustomList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      modalData: {},
    }
  }

  itemPress = (item) => {
    this.setState({
      modalData: item,
      visible: true,
    });
  };

  modalClose = () => {
    console.log('this is being called');
    this.setState({
      modalData : {},
      visible: false,
    });
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 25, marginBottom: 77}}>
      <CustomModal modalVisible={this.state.visible} modalClose={this.modalClose} item={this.state.modalData}/>
        <FlatList
          ItemSeparatorComponent={ () => <View style={styles.seperator} /> }
          data={this.props.data}
          renderItem={({item}) => <ListItem key={item.id} item={item} onPress={this.itemPress}/>}
          keyExtractor={(item) => `key-${item.id}}`}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  seperator: {
    height: 2,
    width: 300,
    backgroundColor: '#4b5059',
    margin: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});