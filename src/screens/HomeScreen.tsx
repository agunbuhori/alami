import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Device')}
        style={styles.button}>
        <Text style={styles.title}>Soal No. 1 (Device UID)</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Cart')}
        style={styles.button}>
        <Text style={styles.title}>Soal No. 2 (Cart)</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Progress')}
        style={styles.button}>
        <Text style={styles.title}>Soal No. 3 (Progress)</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: '#2980b9',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
