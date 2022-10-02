import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Progress from '../components/Progress';

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <Progress duration={5000} value={6270} maxValue={1000} />
      <Text style={styles.description}>Hold on the progress to pause.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  progressBackground: {
    height: 20,
    width: Dimensions.get('window').width,
    backgroundColor: 'gray',
  },
  description: {
    fontWeight: 'bold',
  },
});

export default ProgressScreen;
