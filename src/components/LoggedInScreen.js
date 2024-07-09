import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoggedInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RestArt</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('./images/camera.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('./images/camera.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>lealfet</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>·Î±×</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  footer: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default LoggedInScreen;