/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

export default class App extends Component<Props> {
  constructor(){
    super()
    this.state={
      dataSource:[]
    }
  }

renderItem= ({ item }) => {
  return (
    <View>
    <Text>{item.name}</Text>

   </View>
  )
}

componentDidMount() {
  const url = "http://www.json-generator.com/api/json/get/cezCuXaCJK?indent=0"
  fetch(url)
  .then((response)=>response.json())
  .then((responseJson) =>{
      this.setState({
        dataSource: responseJson.book_array
      })
        })
      .catch((error)=>{
        console.log(error)
      })

}
  render() {
    return (
      <View style={styles.container}>
            <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item,index)=>index}
            ItemSeparatorCompnent={this.renderSeparator}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
