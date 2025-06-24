import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type WeatherCardProps = {
  title: string;
  value: string;
};

export default function WeatherCard({ title, value }: WeatherCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
});
