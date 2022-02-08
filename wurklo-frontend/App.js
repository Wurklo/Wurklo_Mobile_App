import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}