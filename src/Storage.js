import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeSessionValues(token) {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
}

export async function getSessionValues() {
  try {
    const token = await AsyncStorage.getItem('token');
    return {token};
  } catch (error) {
    console.log(error);
  }
}

export async function clearSession() {
  try {
    await AsyncStorage.removeItem('token');
    console.log('Session Cleared.');
  } catch (error) {
    console.log('Session NOT cleared.');
    console.log(error);
  }
  return;
}
