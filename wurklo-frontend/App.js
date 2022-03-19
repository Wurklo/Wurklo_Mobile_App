import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux/store';
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