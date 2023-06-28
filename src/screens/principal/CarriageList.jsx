import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';

const CarriageList = () => {
  const [carriages, setCarriages] = useState([
    { id: 1, title: 'Acarreo 1', details: 'Detalles del acarreo 1' },
    { id: 2, title: 'Acarreo 2', details: 'Detalles del acarreo 2' },
    // ...otros acarreos
  ]);

  const [selectedCarriage, setSelectedCarriage] = useState(null);
  const heightAnim = useRef(new Animated.Value(100)).current;

  const handleCardPress = (carriage) => {
    if (selectedCarriage && selectedCarriage.id === carriage.id) {
      setSelectedCarriage(null);
      Animated.timing(heightAnim, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      setSelectedCarriage(carriage);
      Animated.timing(heightAnim, {
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const renderDetails = () => {
    if (selectedCarriage) {
      return (
        <Animated.View style={[styles.detailsContainer, { height: heightAnim }]}>
          <Text style={styles.detailsTitle}>{selectedCarriage.title}</Text>
          <Text style={styles.detailsText}>{selectedCarriage.details}</Text>
        </Animated.View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carriages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCardPress(item)}
          >
            <Text style={styles.title}>{item.title}</Text>
            {item.id === selectedCarriage?.id && renderDetails()}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 16,
  },
  detailsTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
  },
};

export default CarriageList;
