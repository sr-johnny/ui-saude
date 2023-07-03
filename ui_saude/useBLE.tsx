import { useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';

  type PermissionCallback = (result: boolean) => void;

  const bleManager = new BleManager();

  interface BluetoothLowEnergyApi {
    requestPermissions(callback: PermissionCallback): Promise<void>;
    connectToDevice(device: Device): Promise<void>;
    scanForDevices(): void;
    allDevices: Device[];
  }

  export default function useBLE(): BluetoothLowEnergyApi {
    const [allDevices, setAllDevices] = useState<Device[]>([]);
    const [device, setConnectedDevice] = useState<Device | null>(null);

    const requestPermissions = async (callback: PermissionCallback) => {
      if(Platform.OS === 'android') {
        const grantedStatus = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACESS_FINE_LOCATION,
          {
            title: 'Permissão de Acesso à Localização',
            message: 'Bluetooth Low Energy precisa acessar a localização',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Ok',
            buttonNeutral: 'Talvez Depois'
          },
        );
        callback(grantedStatus === PermissionsAndroid.RESULTS.GRANTED);
      }else{
        callback(true);
      }
    };

    const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
      devices.findIndex(device => nextDevice.id === device.id) > -1;

    const scanForDevices = () => {
      bleManager.startDeviceScan(null, null, (error, device) => {
        if(error) {
          console.log(error);
        }
        if(device && device.name?.includes('CorSense')){
          setAllDevices((prevState) => {
            if(!isDuplicateDevice(prevState, device)){
              return [...prevState, device];
            }
            return prevState;
          })
        }
      });
    }

    const connectToDevice = async (device: Device) => {
      try {
        const deviceConnection = await bleManager.connectToDevice(device.id);
        setConnectedDevice(deviceConnection);
        bleManager.stopDeviceScan();
      } catch (e) {
        console.log('ERRO AO CONECTAR', e)
      }
    }

    return {
      requestPermissions,
      connectToDevice,
      scanForDevices,
      allDevices,
    };
  }