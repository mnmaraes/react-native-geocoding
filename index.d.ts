declare module "react-native-geocoding" {
  export function init(apiKey: string, options?: Object): void;
  export function isInit(): boolean;
  export function setApiKey(API_KEY: string): void;
  export function from(...params: any[]): Promise<void>;
  export function getFromLocation(address: string): Promise<any>;
  export function getFromLatLng(lat: number, lng: number): Promise<any>;
}
