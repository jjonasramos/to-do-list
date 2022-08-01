import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    CreateTask: undefined;
};

export type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type CreateTaskScreenProp = NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;