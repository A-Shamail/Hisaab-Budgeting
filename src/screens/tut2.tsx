import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import styles from "../styles";

const Tut2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tutorialPage}>
      <Image
        style={styles.tutorialImage}
        source={require("../images/(2).png")}
      />

      <View style={styles.tutorialButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tut3")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tut2;
