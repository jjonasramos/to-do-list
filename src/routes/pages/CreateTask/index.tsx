import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import Button from '../../../components/Button';
import { CreateTaskScreenProp } from '../../../interfaces/Routes';
import styles from './styles';

const CreateTask = () => {
    const navigate = useNavigation<CreateTaskScreenProp>();

    const onPress = () => navigate.goBack();

    return (
        <View style={styles.container}>
            <Button title="Cancel" onPress={onPress}/>
        </View>
    );
};

export default CreateTask;