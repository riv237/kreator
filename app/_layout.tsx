import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#F8FAFC" },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="chat/[id]"
          options={{
            headerShown: true,
            title: "Conversation",
            headerBackTitle: "Retour",
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#F8FAFC" },
          }}
        />
      </Stack>
    </>
  );
}
