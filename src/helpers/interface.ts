import { ImageSourcePropType } from "react-native";
export interface NavigationProps {
    route: routeInterface,
    navigation: {
        toggleDrawer: () => void,
        goBack: () => void
        navigate: (screenName: string, params : object) => void;
        
    }
}
export interface routeInterface {
    key: string,
    name: string,
    params: paramsobject,
    path: undefined | string
}
export interface paramsobject { 
    id: number,
    date: string,
    CaseId : number;
    name: string,
   
}
export interface DrawerItem {
    icon: ImageSourcePropType,
    title: string,
    toNavigate: string
}
export interface ScreenRoute {
    key: 'string',
    title: 'string',
    name: 'string'
}
export interface Customer  {
    id: number;
    name: string;
    Address : string;
    location: string;
    supervisor: string;
    Driver: string;
    Reason: string;
    acount: string;
};
export type DriverInterface = {
    id: number;
    name: string;
    company : string
}
export interface StormDataInterface  {
    id: number;
    name: string;
    date : string;
  };
  export interface EventDataInterface  {
    id: number;
    visit: string;
    date : string;
    time : string;
  };
  
  export interface Item {
    id: number;
    name: string;
    image: any;
  };
  
  export interface CasesInterface  {
    id: number;
    label: string;
    value: string;
    closed: number;
    open: number
};
export interface CasesDetailsInterface  {
    id: number;
    CaseName: string;
    caseId: number;
    owner: string;
    location: string;
    date: string;
    time : string;
};