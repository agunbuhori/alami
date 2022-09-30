import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import Cart from '../components/Cart';

export type Product = {
  id: number;
  name: string;
  price: number;
};

const PRODUCT_MOCKS: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 20000000,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22',
    price: 21000000,
  },
  {
    id: 3,
    name: 'Xiaomi Blackshark',
    price: 17000000,
  },
  {
    id: 4,
    name: 'Asus ROG',
    price: 18000000,
  },
];

type Action<T, P> = {
  type: T;
  payload: P;
};

const cartReducer = (
  state: Product[],
  action: Action<'ADD_ITEM' | 'REMOVE_ITEM', any>,
): Product[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return [...state].filter((item, index) => index !== action.payload);
    default:
      return state;
  }
};

const CartScreen = () => {
  const [cart, dispatch] = React.useReducer(cartReducer, []);
  const [products] = React.useState(PRODUCT_MOCKS);
  const [timer, setTimer] = React.useState(120);

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (timer > 0) {
        setTimer(prev => prev - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleAddItem = (item: Product) => {
    dispatch({type: 'ADD_ITEM', payload: item});
  };

  const handleRemoveItem = React.useCallback((index: number) => {
    dispatch({type: 'REMOVE_ITEM', payload: index});
  }, []);

  return (
    <View>
      <Text style={styles.flashSale}>Flash Sale {timer}</Text>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({item}) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button title="Add to cart" onPress={() => handleAddItem(item)} />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />

      <Cart items={cart} onRemove={handleRemoveItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  flashSale: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  product: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default CartScreen;
