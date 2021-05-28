import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Modal, Button } from 'react-native';

import Scanner from './src/componentes/Scanner';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const [type, setType] = React.useState("");
  const [data, setData] = React.useState("");
  const [name, setName] = React.useState("");

  const onCodeScanned = (type, data) => {
    setType(type);
    setData(data);
    setName(name);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <StatusBar style="auto" />
      <Text style={{ fontWeight: 'bold', color: '#fff'}}>Type: { type }</Text>
      <Text style={{ fontWeight: 'bold', color: '#fff'}}>Data: { data }</Text>
      <Text style={{ fontWeight: 'bold', color: '#fff'}}>Nome: { name }</Text>
      <Button title="Escannear" onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0155',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightgrey',
  }
});
