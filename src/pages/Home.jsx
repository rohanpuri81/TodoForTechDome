import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import React, {useEffect, useState} from 'react';
import {rw, rh} from '../components/commonFunctions ';

const Home = () => {
  const [pastedURL, setPastedURL] = useState(
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  );
  const requestWriteExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'This app needs access to write to your external storage.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Write external storage permission granted.');
        // Perform actions that require storage access
      } else {
        console.log('Write external storage permission denied.');
        // Handle permission denial (optional)
      }
    } catch (err) {
      console.warn('Error requesting permission:', err);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.MANAGE_EXTERNAL_STORAGE,
        {
          title: 'Camera Permission',
          message: 'This app needs permission to manege external storage.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
        // You can now proceed with using the camera
      } else {
        console.log('Camera permission denied');
        // Handle the case where permission is denied
      }
    } catch (err) {
      console.warn('Error requesting camera permission:', err);
    }
  };

  const downloadFile = () => {
    const {config, fs} = RNFetchBlob;
    const date = new Date();
    const fileDir = fs.dirs.DownloadDir;

    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          fileDir +
          '/download_' +
          Math.floor(date.getDate() + date.getSeconds() / 2) +
          '.mp4',
        description: 'file download',
      },
    })
      .fetch('GET', pastedURL, {})
      .then(res => {
        console.log('The file saved to ', res.path());
        Alert('file downloaded successfully');
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter / Paste link here"
          style={styles.textInput}
          value={pastedURL}
          onChangeText={txt => setPastedURL(txt)}
        />
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          paddingVertical: rh(16),
          alignSelf: 'center',
          backgroundColor: 'purple',
          borderRadius: 10,
        }}
        onPress={() => requestWriteExternalStoragePermission()}>
        <Text style={{alignSelf: 'center', color: 'white'}}>Download now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    gap: rh(14),
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 6,
    paddingLeft: 12,
  },
});
