import { Text, View, StyleSheet, Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Link href="/about">
        <Text style={styles.helloworldTitle}>
          happy birthday france nigger esclamado
        </Text>
      </Link>
      <Button title="click" onPress={() => router.push("/about")} />
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
  helloworldTitle: {
    color: "green",
  },
  button: {
    width: 200,
    height: 200,
  },
});
