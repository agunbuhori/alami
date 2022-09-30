import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import useDeviceModule from '../native-modules/DeviceModule';

const DeviceScreen = () => {
  const [deviceUID, setDeviceUID] = React.useState<string | undefined>();
  const deviceModule = useDeviceModule();

  const handleGetDeviceUID = () => {
    setDeviceUID(deviceModule.getDeviceUID());
  };

  return (
    <View style={styles.container}>
      {deviceUID && (
        <Text style={styles.uidText}>
          Your {Platform.OS} device UID : {deviceUID}
        </Text>
      )}
      <Button title="Get My Device UID!" onPress={handleGetDeviceUID} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uidText: {
    marginVertical: 18,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default DeviceScreen;
