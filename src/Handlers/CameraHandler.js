import {Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export async function userImageSelection() {
  return new Promise(resolve => {
    const options = [];

    options.push({
      text: 'Take Photo',
      onPress: async () => {
        const result = await launchCamera();
        resolve(result.assets[0].uri);
      },
    });

    options.push({
      text: 'Choose Photo',
      onPress: async () => {
        const result = await launchImageLibrary();
        resolve(result.assets[0].uri);
      },
    });

    Alert.alert(
      'Profile Picture',
      'Please choose from the options below to select a profile picture.',
      options,
    );
  });
}