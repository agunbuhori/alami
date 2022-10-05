import React from 'react';
import {FlatList} from 'react-native';
import {Product} from './Cart';
import CartItem from './CartItem';

const products = require('../../assets/data/products.json') as Product[];

const Cart = () => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => <CartItem {...item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default Cart;
