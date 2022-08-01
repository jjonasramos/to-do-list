import { TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import styles from './styles';

const FloatingButton = ({ onPress }: any) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.5}>
            <Icon name='add-outline' size={30} color='white' />
        </TouchableOpacity>
    );
};

export default FloatingButton;