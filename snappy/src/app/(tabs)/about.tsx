import { Text, View, StyleSheet } from "react-native";
import {Image} from "expo-image"

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2bzXnECuGnA44OZ8-0jsESY7lB77WH7p0g&s" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },

})
