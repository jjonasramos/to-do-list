import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../../styles';
import Icon from '@expo/vector-icons/Ionicons';
import styles from './styles';

const priorities = [
    { type: 'high', color: '#e32f45' },
    { type: 'medium', color: '#ffc107' },
    { type: 'low', color: '#4caf50' }
]

const TaskItem = ({ item }: any) => {
    const [priority, setPriority] = useState('');

    useEffect(() => {
        const color = priorities.find(p => p.type === item.priority)!.color;
        setPriority(color);
    }, [item]);

    return (
        <View style={[styles.container, GlobalStyles.softShadow]}>
            <View style={[styles.priority, { backgroundColor: priority || 'black' }]} />
            <Text style={styles.title}>{ item.title }</Text>
            <View style={styles.datetime}>
                <Icon name="calendar-outline" size={16} color="#748c94" />
                <Text style={styles.description}>{ item.description }</Text>
                <Text style={styles.description}>-</Text>
                <Text style={styles.description}>{ item.time }</Text>
            </View>
        </View>
    );
};

export default TaskItem;