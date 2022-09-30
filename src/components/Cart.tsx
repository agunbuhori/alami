import React, {memo} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {Product} from '../screens/CartScreen';

type Props = {
  items: Product[];
  onRemove: (index: number) => void;
};

const Cart: React.FC<Props> = ({items, onRemove}) => {
  console.log('rendering');

  const countTotal = (products: Product[]) => {
    let total = 0;
    for (const item of products) {
      total += item.price;
    }
    return total;
  };

  const getTotal = React.useMemo(() => countTotal(items), [items]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart ({items.length})</Text>
      <FlatList
        data={items}
        renderItem={({item, index}) => (
          <View style={styles.item}>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
            <Pressable onPress={() => onRemove(index)}>
              <Text>Remove</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <Text style={styles.title}>Total: {getTotal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
});

export default memo(
  Cart,
  (prev, next) => prev.items.length === next.items.length,
);
