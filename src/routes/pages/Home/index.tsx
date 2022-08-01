import { View, FlatList, Text, SafeAreaView, TextInput } from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import TaskItem from "../../../components/TaskItem";
import styles from './styles';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Estudar inglês 🤓',
        description: 'Every day',
        time: '2h',
        priority: 'high',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Academia 💪',
        description: 'Mon Tue Wed Thu Fri',
        time: '1h',
        priority: 'medium',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Beber água 💦',
        description: 'Every day',
        time: '15m',
        priority: 'low'
    },
];

const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Your Tasks</Text>
                <View style={styles.inputContainer}>
                    <Icon style={styles.inputIcon} name="search-outline" size={16} color="#777" />
                    <TextInput underlineColorAndroid="transparent" style={styles.input} placeholder="Search" placeholderTextColor="#777" clearButtonMode="always" />
                </View>
                <FlatList
                    style={{ paddingBottom: '3%'}}
                    data={DATA}
                    renderItem={({ item }) => <TaskItem key={item} item={item} />}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;