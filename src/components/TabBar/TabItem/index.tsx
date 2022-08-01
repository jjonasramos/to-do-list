import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import styles from './styles';

const TabItem = ({ color, size, focused, title, icon }: any) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} color={color} size={size} />
            <Text style={[styles.title, { color: focused ? '#e32f45' : '#748c94' }]}>
                {title}
            </Text>
        </View>
    );
};

export default TabItem;