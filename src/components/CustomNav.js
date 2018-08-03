import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Icon } from 'react-native-elements';


export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  };

  setPage = (page) => {
    this.props.setPage(page);
  };

  render() {
    console.log(this.props.selected);
    return (
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Icon
            reverse
            name='cutlery'
            type='font-awesome'
            color={this.props.selected === 'eat' ? '#212328' : '#517fa4'}
            raised
            onPress={() => this.setPage('eat')}
          />
          <Icon
            reverse
            name='graduation-cap'
            type='font-awesome'
            color={this.props.selected === 'learn' ? '#212328' : '#517fa4'}
            raised
            onPress={() => this.setPage('learn')}
          />
          <Icon
            reverse
            name='beer'
            type='font-awesome'
            color={this.props.selected === 'drink' ? '#212328' : '#517fa4'}
            raised
            onPress={() => this.setPage('drink')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 75,
    backgroundColor: '#4b5059',
    alignItems: 'center',
    zIndex: 1,
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
});