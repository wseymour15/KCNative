import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Eat from './components/Eat';
import Learn from './components/Learn';
import CustomNav from './components/CustomNav';
import Drink from './components/Drink'

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'eat',
    }
  };

  pageChange = (page) => {
    this.setState({
      page: page,
    });
  };

  render() {
    let pageComponent;
    switch(this.state.page) {
      case 'learn':
          pageComponent = <Learn />
          break;
      case 'drink':
        pageComponent = <Drink />
        break;
      case 'eat':
      default:
          pageComponent = <Eat />
    };

    return (
      <View style={styles.container}>
        <CustomNav setPage={this.pageChange} selected={this.state.page}/>
        {pageComponent}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#517fa4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});