import { TouchableOpacity, View } from "react-native";
import GlobalStyles from "../../../styles";
import styles from './styles';

const AddButton = ({ children, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, GlobalStyles.softShadow]} activeOpacity={0.5}>
            <View style={styles.buttonStyle}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

export default AddButton;