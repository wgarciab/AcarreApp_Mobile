import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Importa aquí las dependencias adicionales que necesites

const CarryHistoryScreen = () => {
  const [carryHistory, setCarryHistory] = useState([]);

  useEffect(() => {
    // Aquí debes realizar una llamada a tu API o fuente de datos para obtener el historial de acarreos del cliente
    // y luego asignarlos a la variable carryHistory utilizando setCarryHistory.
    // Puedes usar fetch, axios u otras bibliotecas para realizar la llamada a la API.

    // Ejemplo de cómo podrías obtener el historial de acarreos:
    /*
    const fetchCarryHistory = async () => {
      try {
        const response = await fetch('API_URL/client/history', {
          // Aquí puedes configurar encabezados, autenticación u otros detalles según tu API
        });
        const data = await response.json();
        setCarryHistory(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarryHistory();
    */
    const dummyCarryHistory = [
      {
        id: '1',
        status: 'created',
        price: 200000,
        direction_to: 'CR 65 # 15 - 20, Medellin',
        created_at: '12/05/2023',
        carrier: {
          id: 1,
          first_name: 'Albeiro Rojas',
          photo: "https://d39l2hkdp2esp1.cloudfront.net/img/photo/150404/150404_00_2x.jpg?20180817112144",
        }
        // Agrega más campos ficticios según la estructura del modelo Carry
      },
      {
        id: '2',
        status: 'accepted',
        price: 300000,
        direction_to: 'CR 65 # 15 - 20, Medellin',
        created_at: '1/05/2023',
        carrier: {
          id: 1,
          first_name: 'Albeiro Rojas',
          photo: "https://d39l2hkdp2esp1.cloudfront.net/img/photo/150404/150404_00_2x.jpg?20180817112144",
        }
        // Agrega más campos ficticios según la estructura del modelo Carry
      },
      // Agrega más elementos ficticios según sea necesario
    ];

    setCarryHistory(dummyCarryHistory);
  }, []);

  const renderCarryItem = ({ item }) => {
    return (
      /*
      <View style={styles.carryCard}>
        <Text style={styles.carryId}>ID: {item.id}</Text>
        <Text style={styles.carryStatus}>Status: {item.status}</Text>
        {/* Agrega más campos que desees mostrar *}
      </View>
      */
      
      <View style={styles.carryCard}>
        <View style={styles.infoContainer}>
          <Text style={styles.carryDetails}>{"Mudanza"}</Text>
          {/* Resto de detalles del acarreo */}
          <Text style={styles.carryStatus}>{item.direction_to}</Text>
          <Text style={styles.carryStatus}>$ {item.price}</Text>
          <Text style={styles.carryStatus}>{item.created_at}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={{ uri: item.carrier.photo }} style={styles.profileImage} />
          <Text style={styles.profileName}>{ item.carrier.first_name }</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Acarreos</Text>
      <FlatList
        data={carryHistory}
        renderItem={renderCarryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  carryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
  },
  carryId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carryStatus: {
    fontSize: 14,
    color: '#888888',
  },
  // Agrega estilos adicionales según tus necesidades
  carryDetails: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
  },
});

export default CarryHistoryScreen;
