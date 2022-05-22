import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LoginParamList = {
  Login: undefined;
  Main: undefined;
};
export interface LoginProps {
  navigation: NativeStackNavigationProp<LoginParamList>;
}
