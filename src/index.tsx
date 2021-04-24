import { NativeModules } from 'react-native';

type VnptBridgeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { VnptBridge } = NativeModules;

export default VnptBridge as VnptBridgeType;
