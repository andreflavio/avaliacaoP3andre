import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import MoreInfoButton from '../components/MoreInfoButton';

interface WeatherData {
  temperature: string;
  humidity: string;
  windSpeed: string;
  condition: string;
}

const HomeScreen: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: '',
    humidity: '',
    windSpeed: '',
    condition: '',
  });

  useEffect(() => {
    const simulatedData: WeatherData = {
      temperature: '25°C',
      humidity: '60%',
      windSpeed: '15 km/h',
      condition: 'Ensolarado',
    };
    setWeatherData(simulatedData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Bem-vindo ao Tempo Agora</Text>
        <View style={styles.cardsContainer}>
          <WeatherCard
            title="Temperatura Atual"
            value={weatherData.temperature}
            iconName="thermometer"
          />
          <WeatherCard
            title="Umidade Relativa"
            value={weatherData.humidity}
            iconName="droplet"
          />
          <WeatherCard
            title="Velocidade do Vento"
            value={weatherData.windSpeed}
            iconName="wind"
          />
          <WeatherCard
            title="Condição Geral"
            value={weatherData.condition}
            iconName="sun"
          />
        </View>
        <MoreInfoButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default HomeScreen;