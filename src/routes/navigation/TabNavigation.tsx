import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';
import { Home, CreateTask, Dashboard } from '../pages';

import styles from './styles';
import { AddButton, Bar } from '../../components/TabBar';
import TabItem from '../../components/TabBar/TabItem';
import GlobalStyles from '../../styles';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: [styles.tabBar, GlobalStyles.softShadow],
				tabBarActiveTintColor: '#e32f45'
			}}
		>
			<Tab.Screen 
				name="Home" 
				component={Home} 
				options={{
					tabBarIcon: (props) => <TabItem {...props} title="Home" icon="home-outline" />
				}} 
			/>
			<Tab.Screen 
				name="CreateTask" 
				component={CreateTask} 
				options={{
					tabBarIcon: () => <Icon name="add-outline" color="white" size={32} />,
					tabBarButton: (props) => <AddButton {...props} />
				}} 
			/>
			<Tab.Screen 
				name="Dashboard" 
				component={Dashboard} 
				options={{
					tabBarIcon: (props) => <TabItem {...props} title="Dashboard" icon="pie-chart-outline"/>
				}} 
			/>
		</Tab.Navigator>
	);
}

export default TabNavigation;