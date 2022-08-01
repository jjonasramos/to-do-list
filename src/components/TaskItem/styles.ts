import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
        marginBottom: 24,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#999',
        marginLeft: 8
    },
    priority: {
        position: 'absolute',
        width: 6,
        top: 0,
        left: 0,
        bottom: 0,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    datetime: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {

    }
});

export default styles;