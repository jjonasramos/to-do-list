import { useEffect, useState } from "react";
import { 
    View, 
    FlatList, 
    Text, 
    SafeAreaView, 
    TextInput, 
    TouchableWithoutFeedback, 
    Keyboard,
    Button,
    Animated,
    Easing
} from "react-native";
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

    const [isFocused, setIsFocused] = useState(false);
    const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if(isFocused) animateIn();
        else animateOut();
    }, [isFocused]);

    const animateIn = () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
        }).start();

        Animated.timing(animation, {
            toValue: 1,
            duration: 250,
            useNativeDriver: false,
            easing: Easing.sin,
        }).start();
    }

    const animateOut = () => {
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true
        }).start();
        
        Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
            easing: Easing.sin
        }).start();
    }

    const handleCancelSearch = () => {
        setSearchText('');
        setIsFocused(false);
        Keyboard.dismiss();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Your Tasks</Text>
                <View style={styles.searchContainer}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <Animated.View style={[styles.inputContainer, {
                            width: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['100%', '79%']
                            })
                        }]}>
                            <Icon style={styles.inputIcon} name="search-outline" size={16} color="#777" />
                            <TextInput 
                                underlineColorAndroid="transparent" 
                                style={styles.input} 
                                placeholder="Search" 
                                placeholderTextColor="#777" 
                                clearButtonMode="always"
                                onChangeText={(text) => setSearchText(text)}
                                value={searchText}
                                onFocus={() => setIsFocused(true)}
                                returnKeyLabel="Search"
                                returnKeyType="search"
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <Animated.View style={[styles.cancel, {
                        opacity: fadeAnimation
                    }]}>
                        <Button title="Cancel" onPress={handleCancelSearch}/>
                    </Animated.View>
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