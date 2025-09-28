// app/_layout.tsx
import {Stack} from "expo-router";
import {useState} from "react";

export default function RootLayout() {


  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="auth" options={{headerShown: false}}/>
      <Stack.Screen name="main" options={{headerShown: false}}/>
    </Stack>
  );
}
