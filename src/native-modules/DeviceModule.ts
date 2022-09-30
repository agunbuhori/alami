import {NativeModules} from 'react-native';

const {DeviceModule} = NativeModules;

const useDeviceModule = () => {
  const getDeviceUID = (): string | undefined => {
    try {
      return DeviceModule.getDeviceUID();
    } catch (error) {
      console.error('Failed to get device uid');
    }
  };

  return {
    getDeviceUID,
  };
};

export default useDeviceModule;
