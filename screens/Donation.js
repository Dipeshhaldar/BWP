import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Donation = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Direct Payment UPI QR Code</Text>
      <Image source={require('../assets/QRCODE.jpg')} style={styles.qrCode} />
      <View style={styles.bankDetailsContainer}>
        <Text style={styles.bankDetailsHeader}>Bank Details</Text>
        <View style={styles.bankDetails}>
          <Text style={styles.bankDetail}>Name: Naglok Sanskruti Samvardhan Samitee</Text>
          <Text style={styles.bankDetail}>Bank Name: Central Bank</Text>
          <Text style={styles.bankDetail}>Account Number: 5313453199</Text>
          <Text style={styles.bankDetail}>MICR Code: 441016002</Text>
          <Text style={styles.bankDetail}>IFSC Code: CBIN0280687</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e6f0ff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrCode: {
    width: 210,
    height: 400,
    marginBottom: 40,
  },
  bankDetailsContainer: {
    alignItems: 'center',
  },
  bankDetailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bankDetails: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    alignItems: 'flex-start',
  },
  bankDetail: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Donation;
