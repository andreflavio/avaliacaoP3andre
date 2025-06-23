import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const MoreInfoButton: React.FC = () => {
  const handlePress = async () => {
    const url: string = 'https://www.climatempo.com.br/';
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o link:', error);
    }
  };

  return (
    <Shadow distance={8} startColor={'#00000020'} offset={[0, 4]}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Mais Informações</Text>
      </TouchableOpacity>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MoreInfoButton;