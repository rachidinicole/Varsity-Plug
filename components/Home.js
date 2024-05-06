import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core'; 

// Import images
import image0 from './images/image0.jpg';
import image66 from './images/image66.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6 1.jpg';
import image7 from './images/image7 1.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image00 from './images/image00.jpg';
import image55 from './images/image55.jpg';
//import image66 from './images/image66.jpg';
import image77 from './images/image77.jpg';
import image88 from './images/image88.jpg';
import image99 from './images/image99.jpg';

const categories = [
  { image: image0, name: "Electronics" },
  { image: image9, name: "Food" },
  { image: image8, name: "Salon" },
  { image: image7, name: "Books" },
  { image: image6, name: "Shoes" },
  { image: image5, name: "Nails & Make-up" },
  { image: image00, name: "Laundry Services" },
  { image: image55, name: "Accessories & Jewellery" },
  { image: image66, name: "Graduation Gowns" },
  { image: image77, name: "Clothing" },
  { image: image88, name: "Photography" },
  { image: image99, name: "Tattoo parlour" },
];

const HomeScreen = ({ navigation }) => {
  const handleCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo */}
        <Image source={require('./images/logo.jpg')} style={styles.logo} />
        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
        {/* Search Bar */}
        <Text
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#888"
        />
        {/* Shopping Cart Icon */}
        <TouchableOpacity style={styles.cartIcon} onPress={handleCart}>
          <Image source={require('./images/cart.jpg')} style={styles.cartImage} />
          {/* Display the number of items in the cart */}
          <Text style={styles.cartItemCount}>3</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <View style={styles.categoryContent}>
              <Image source={category.image} style={styles.image} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Customer Reviews/Testimonials */}
      <View style={styles.testimonialsContainer}>
        <Text style={styles.testimonialsTitle}>Chatbot</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.testimonials}>
          <View style={styles.testimonial}>
            <Text style={styles.testimonialText}>"Hi,What would you like my help with"</Text>
            <Text style={styles.testimonialAuthor}>- AI Abby</Text>
          </View>
          <View style={styles.testimonial}>
            <Text style={styles.testimonialText}>"Get recommendations from AI"</Text>
            <Text style={styles.testimonialAuthor}>- NickBot</Text>
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.footerLinks}>
          <TouchableOpacity style={styles.footerLink}>
            <Text style={styles.footerText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerLink}>
            <Text style={styles.footerText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerLink}>
            <Text style={styles.footerText}>Privacy Policy</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <Image source={require('./images/facebook.jpg')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./images/twitter.jpg')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./images/instagram.jpg')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -50,
    marginBottom: -20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 45,
    height: 35,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 10,

  },
  navigation: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 50,
  },
  navItem: {
    padding: 12,
  },
  navText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchBar: {
    flex: 1,
    height: 35,
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 18,
    marginHorizontal: 8,
    marginTop: 50,
  },
  cartIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  cartImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  cartItemCount: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginLeft: 5,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  categoryItem: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  categoryContent: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  categoryText: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  testimonialsContainer: {
    marginTop: 1,
    marginBottom: 30,
  },
  testimonialsTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  testimonials: {
    flexDirection: 'row',
  },
  testimonial: {
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  testimonialText: {
    marginBottom: 0,
  },
  testimonialAuthor: {
    textAlign: 'right',
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginBottom: 30,
  },
  footerLinks: {
    marginRight: 10,
  },
  footerLink: {
    padding: 5,
  },
  footerText: {
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
});

export default HomeScreen;