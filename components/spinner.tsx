import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';

const Spinner = () => {
  return (
    <Modal animationType="fade" transparent={true} visible>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#e91e63" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Spinner;
