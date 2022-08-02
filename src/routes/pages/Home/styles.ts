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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ececec',
        borderRadius: 8
    },
    searchContainer: {
        marginBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },
    inputIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 9
    },
    cancel: {
        marginLeft: 10
    }
});

export default styles;