import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {
  amount: number;
  onChange: (amount: number) => void;
};
const CartCustomizer: React.FC<Props> = ({amount, onChange}) => {
  const handleReduce = (increment: number) => {
    if (amount === 0 && increment === -1) {
      return false;
    }
    onChange(amount + increment);
  };

  return (
    <View style={styles.buttons}>
      <Button title="-" onPress={() => handleReduce(-1)} />
      <Text>{amount}</Text>
      <Button title="+" onPress={() => handleReduce(+1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CartCustomizer;
