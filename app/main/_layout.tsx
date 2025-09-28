// app/(main)/_layout.tsx
import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Главная" }} />
    </Tabs>
  );
}
