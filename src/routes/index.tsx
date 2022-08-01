import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { TabNavigation } from './navigation';

const Routes = () => {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="blue"
                barStyle="dark-content"
            />
            <TabNavigation />
        </NavigationContainer>
    );
};

export default Routes;