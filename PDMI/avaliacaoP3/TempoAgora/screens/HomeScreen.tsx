import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import WeatherCard from '../components/WeatherCard';

export default function HomeScreen() {
  const [weatherData, setWeatherData] = useState({
    temperatura: '',
    umidade: '',
    vento: '',
    condicao: '',
  });

  useEffect(() => {
    // Dados simulados
    setWeatherData({
      temperatura: '28°C',
      umidade: '70%',
      vento: '12 km/h',
      condicao: 'Ensolarado',
    });
  }, []);

  const handleOpenLink = () => {
    Linking.openURL('https://www.climatempo.com.br');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.appName}>Tempo Agora</Text>

      <WeatherCard title="Temperatura" value={weatherData.temperatura} />
      <WeatherCard title="Umidade" value={weatherData.umidade} />
      <WeatherCard title="Vento" value={weatherData.vento} />
      <WeatherCard title="Condição" value={weatherData.condicao} />

      <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
        <Text style={styles.buttonText}>Mais Informações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f0f4f7',
    minHeight: '100%',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#0077cc',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
