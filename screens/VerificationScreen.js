import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const VerificationScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    try {
      const response = await fetch('https://yourbackend.com/verifyOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: route.params.email, otp }),
      });
      if (response.ok) {
        // OTP verification successful, navigate to main app screen
        navigation.navigate('Homepage');
      } else {
        // Handle OTP verification failure
        console.error('Invalid OTP');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default VerificationScreen;
