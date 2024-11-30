import {StyleSheet, Button, View, SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
//Imports external
import Local from '@react-native-community/geolocation';
import haversine from 'haversine-distance';
//Imports local
import Header from '../Header';

const LBStudioLocation = {
  latitude: -3.724725718278128,
  longitude: -38.52883655378733,
};

const Geolocalizacao = () => {
  const [lat, setLatitude] = useState(0);
  const [lon, setLongititude] = useState(0);

  const UserLocation = async () => {
    Local.getCurrentPosition(
      pos => {
        setLatitude(pos.coords.latitude);
        setLongititude(pos.coords.longitude);
      },
      erro => {
        alert(`Erro: ${erro.message}`);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  let distancia = haversine(LBStudioLocation, {lat, lon}).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>
          Teste de distância de localização LBStudio
        </Text>
        <Button title="Ver distância" onPress={UserLocation} />
      </View>
      <View>
        <Text style={styles.title}>Latitude: {lat}</Text>
        <Text style={styles.title}>Longititude: {lon}</Text>
        <Text style={styles.title}>Distâcia: {distancia}m</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
    marginTop: 0,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 18,
    marginBottom: 50,
    marginTop: 50,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Geolocalizacao;
