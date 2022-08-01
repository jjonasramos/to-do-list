import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from '../../interfaces/Button';
import styles from './styles';

const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.5}>
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;