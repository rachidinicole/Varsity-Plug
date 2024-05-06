import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, image: require('./images/coke.jpg'), quantity: 1 },
    { id: 2, image: require('./images/pizza.jpg'), quantity: 2 },
    { id: 3, image: require('./images/choc.jpg'), quantity: 1 }
  ]);

  const addToCart = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );
    setCartItems(updatedCart.filter(item => item.quantity > 0));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      <TouchableOpacity onPress={() => addToCart(item.id)}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text style={styles.button}>-</Text>
      </TouchableOpacity>
    </View>
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>VARSITY PLUG-UL</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.footer}>
        <Text>Total Items: {totalItems}</Text>
        <TouchableOpacity onPress={() => alert('Purchase confirmed!')}>
          <Text style={styles.purchaseButton}>Confirm Purchase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60, 
    backgroundColor: '#fff',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    borderRadius: 10, 
    overflow: 'hidden', 
  },
  itemImage: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
  },
  itemQuantity: {
    fontSize: 16,
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  purchaseButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 10,
  },
});

export default CartPage;
