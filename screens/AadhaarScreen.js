import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';

const AadhaarScreen = ({ navigation, route }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [aadhaarImage, setAadhaarImage] = useState(null);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === 'ios');
    setDob(currentDate);
  };

  const handleRegister = () => {
    // Handle registration logic here with all collected data
    console.log({
      ...route.params,
      aadhaarNumber,
      dob,
      aadhaarImage
    });
    navigation.navigate('Login');
  };

  const selectImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setAadhaarImage({ uri: pickerResult.uri });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Registration</Text>
      <View style={styles.uploadContainer}>
        <TextInput
          placeholder="Upload Aadhaar"
          style={styles.uploadInput}
          editable={false}
          value={aadhaarImage ? "Aadhaar Uploaded" : ""}
        />
        <TouchableOpacity style={styles.cameraIconContainer} onPress={selectImage}>
          <Icon name="camera-alt" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {aadhaarImage && (
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: aadhaarImage.uri }} style={styles.imagePreview} />
        </View>
      )}
      <TextInput
        placeholder="Aadhaar Number"
        value={aadhaarNumber}
        onChangeText={setAadhaarNumber}
        style={styles.input}
      />
      <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.datePickerText}>
          {dob.toDateString()}
        </Text>
        <Icon name="calendar-today" size={24} color="#000" />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#fff',
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#fff',
  },
  uploadInput: {
    flex: 1,
  },
  cameraIconContainer: {
    padding: 5,
  },
  imagePreviewContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  imagePreview: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  datePickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  datePickerText: {
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AadhaarScreen;
