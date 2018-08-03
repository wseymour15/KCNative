import React from 'react';
import {Modal, Text, Image, View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';

export default class ModalExample extends React.Component {
  constructor(props){
    super(props);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    const item = this.props.item;

    return (
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.wrapper}>
            <View style={styles.modal}>

            {/* work in here */}
              <View style={styles.header}>
                <Image source={item.image} style={{width: 100, height: 100, borderRadius: 10}}/>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <View style={styles.buttonWrapper}>
                <Icon
                  reverse
                  name='times'
                  type='font-awesome'
                  color='#cc0000'
                  raised
                  onPress={this.props.modalClose}
                />
              </View>

            {/* work ends here */}
            </View>
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#517fa4',
  },
  modal: {
    width: 300,
    height: 520,
    backgroundColor: '#4b5059',
    margin: 15,
    marginTop: 50,
    marginBottom: 40,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    alignSelf: 'flex-end',
  },
});