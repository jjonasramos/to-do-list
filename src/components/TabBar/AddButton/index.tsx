import { TouchableOpacity, View } from "react-native";
import GlobalStyles from "../../../styles";
import styles from './styles';

const AddButton = ({ children, onPress }: any) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity style={GlobalStyles.softShadow} onPress={onPress} activeOpacity={0.5}>
                <View style={styles.buttonStyle}>
                    {children}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default AddButton;