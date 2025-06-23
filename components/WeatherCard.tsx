import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Icon from 'react-native-vector-icons/Feather';

interface WeatherCardProps {
  title: string;
  value: string;
  iconName: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ title, value, iconName }) => {
  return (
    <Shadow distance={8} startColor={'#00000020'} offset={[0, 4]}>
      <View style={styles.card}>
        <Icon name={iconName} size={30} color="#4A90E2" style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value || 'Carregando...'}</Text>
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginTop: 5,
  },
});

export default WeatherCard;