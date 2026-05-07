import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

type TabIconName = keyof typeof Ionicons.glyphMap;

const tabBarIcon =
  (name: TabIconName) =>
  ({ color, size }: { color: string; size: number }) =>
    <Ionicons color={color} name={name} size={size} />;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#111827",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#EEF2F7",
          height: 84,
          paddingBottom: 24,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explorer",
          tabBarIcon: tabBarIcon("sparkles-outline"),
        }}
      />
      <Tabs.Screen
        name="missions"
        options={{
          title: "Missions",
          tabBarIcon: tabBarIcon("briefcase-outline"),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Portefeuille",
          tabBarIcon: tabBarIcon("wallet-outline"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: tabBarIcon("person-circle-outline"),
        }}
      />
    </Tabs>
  );
}
