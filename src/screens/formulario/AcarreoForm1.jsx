import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import ImagePicker from 'react-native-image-picker';
//import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';


const AcarreoFormScreen = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [tipoEnseres, setTipoEnseres] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [requiereEmpacar, setRequiereEmpacar] = useState(false);
  const [requiereCargarDescargar, setRequiereCargarDescargar] = useState(false);

  const [fecha, setFecha] = useState('');
  const [peso, setPeso] = useState('');
  const [volumen, setVolumen] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const [parteUnoCompletada, setParteUnoCompletada] = useState(false);

  const handleSiguienteParteUno = () => {
    setParteUnoCompletada(true);
  };

  const handleAtras = () => {
    setParteUnoCompletada(false);
  };

  const handleImageSelection = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (status !== 'granted') {
      console.log('Permiso de acceso a la galería de imágenes denegado');
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });
  
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  
  

  const handleEnviar = () => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log('Datos del formulario:', {
      origen,
      destino,
      tipoEnseres,
      cantidad,
      requiereEmpacar,
      requiereCargarDescargar,
      fecha,
      peso,
      volumen,
    });
  };

  if (!parteUnoCompletada) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Solicitud de Acarreo - Parte 1 de 2</Text>

        <Text style={styles.label}>Origen:</Text>
        <TextInput
          style={styles.input}
          value={origen}
          onChangeText={setOrigen}
          placeholder="Ingrese el origen"
        />

        <Text style={styles.label}>Destino:</Text>
        <TextInput
          style={styles.input}
          value={destino}
          onChangeText={setDestino}
          placeholder="Ingrese el destino"
        />

        <Text style={styles.label}>Tipo de Enseres:</Text>
        <TextInput
          style={styles.input}
          value={tipoEnseres}
          onChangeText={setTipoEnseres}
          placeholder="Ingrese el tipo de enseres"
        />

        <Text style={styles.label}>Cantidad:</Text>
        <TextInput
          style={styles.input}
          value={cantidad}
          onChangeText={setCantidad}
          keyboardType="numeric"
          placeholder="Ingrese la cantidad"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Requiere ayuda para empacar</Text>
          <Switch
            value={requiereEmpacar}
            onValueChange={setRequiereEmpacar}
            style={styles.switch}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Requiere ayuda para cargar y descargar</Text>
          <Switch
            value={requiereCargarDescargar}
            onValueChange={setRequiereCargarDescargar}
            style={styles.switch}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSiguienteParteUno}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitud de Acarreo - Parte 2 de 2</Text>

      <Text style={styles.label}>Fecha:</Text>
      <TextInput
        style={styles.input}
        value={fecha}
        onChangeText={setFecha}
        placeholder="Ingrese la fecha (opcional)"
      />

      <Text style={styles.label}>Peso (Kg):</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
        placeholder="Ingrese el peso (opcional)"
      />

      <Text style={styles.label}>Volumen (m3):</Text>
      <TextInput
        style={styles.input}
        value={volumen}
        onChangeText={setVolumen}
        keyboardType="numeric"
        placeholder="Ingrese el volumen (opcional)"
      />

      {/* Componente para subir archivos de fotos de los enseres */}
      {/* Aquí puedes agregar tu implementación personalizada para subir archivos */}
      <Text style={styles.fotoLabel}>Sube una foto de tus enseres</Text>
      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
          <TouchableOpacity style={styles.button} onPress={handleImageSelection}>
            <Text style={styles.buttonText}>Cambiar imagen</Text>
          </TouchableOpacity>
        </View>
      )}
      {!selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/126/126477.png" }} style={styles.selectedImage} />
          <TouchableOpacity style={styles.button} onPress={handleImageSelection}>
            <Text style={styles.buttonText}>Seleccionar imagen</Text>
          </TouchableOpacity>
        </View>
      )}


      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAtras}>
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fotoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  switchLabel: {
    fontSize: 14,
  },
  switch: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
    overflow: 'hidden', // Para recortar la imagen en caso de que sea más grande que el contenedor
  },
  selectedImage: {
    width: 160,
    height: 160,
    marginBottom: 8,
    borderRadius: 10,
  },
});

export default AcarreoFormScreen;
