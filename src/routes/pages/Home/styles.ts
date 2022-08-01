import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        padding: '5%',
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 12
    },
    inputContainer: {
        marginBottom: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',
        borderRadius: 8,
    },
    inputIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
    }
});

export default styles;