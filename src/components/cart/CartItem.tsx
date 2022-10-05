import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Product} from './Cart';
import CartCustomizer from './CartCustomizer';

const CartItem: React.FC<Product> = ({name, price}) => {
  const [amount, setAmount] = React.useState(1);
  console.log('rendering', name);
  return (
    <View style={styles.product}>
      <View>
        <Text>{name}</Text>
        <Text>${price}</Text>
      </View>
      <View style={styles.detail}>
        <Text>{price * amount}</Text>
        <CartCustomizer
          amount={amount}
          onChange={result => setAmount(result)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    alignItems: 'flex-end',
  },
});

export default CartItem;
