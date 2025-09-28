// app/(auth)/index.tsx
import {Redirect} from "expo-router";

export default function AuthIndex() {
  setTimeout(() => {
    return <Redirect href="/auth/login"/>;
  }, 3000)
}
