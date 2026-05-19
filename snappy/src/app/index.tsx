import { Redirect } from "expo-router";

export default function Index() {
  const isAuth = true; // replace with real auth check later

  return <Redirect href={isAuth ? "/(tabs)" : "/(auth)/login"} />;
}
