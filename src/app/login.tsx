
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    // Demo navigation only; no password authentication occurs.
    router.replace("/home");
  }

  return (
    <ScrollView
      className="flex-1 bg-[#F8FAF9]"
      keyboardShouldPersistTaps="handled"
    >
      <View className="min-h-screen justify-center px-6 py-12">
        <View className="items-center">
          <View className="h-20 w-20 items-center justify-center rounded-3xl bg-[#123D2B]">
            <Ionicons
              name="shield-checkmark-outline"
              size={42}
              color="white"
            />
          </View>

          <Text className="mt-5 text-3xl font-bold text-[#123D2B]">
            Welcome Back
          </Text>
          <Text className="mt-2 text-center text-gray-500">
            Sign in to your SafeAssist account
          </Text>
        </View>

        <View className="mt-10 rounded-3xl border border-gray-100 bg-white p-6">
          <Text className="mb-2 font-semibold text-gray-800">
            Email Address
          </Text>
          <TextInput
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              setError("");
            }}
            placeholder="example@email.com"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
          />

          <Text className="mb-2 font-semibold text-gray-800">
            Password
          </Text>

          <View className="mb-5 flex-row items-center rounded-xl border border-gray-200 bg-gray-50 pr-3">
            <TextInput
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                setError("");
              }}
              placeholder="Enter password"
              placeholderTextColor="#94A3B8"
              secureTextEntry={!showPassword}
              className="flex-1 px-4 py-4 text-gray-900"
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              accessibilityLabel="Toggle password visibility"
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#64748B"
              />
            </Pressable>
          </View>

          {error !== "" && (
            <View className="mb-4 rounded-xl bg-red-50 p-3">
              <Text className="text-sm text-red-700">
                {error}
              </Text>
            </View>
          )}

          <Pressable
            onPress={handleLogin}
            className="items-center rounded-2xl bg-[#166534] p-5"
          >
            <Text className="text-base font-bold text-white">
              Continue to Dashboard
            </Text>
          </Pressable>

          <View className="mt-6 flex-row justify-center">
            <Text className="text-gray-500">
              Don't have an account?{" "}
            </Text>
            <Pressable onPress={() => router.push("/signup")}>
              <Text className="font-bold text-[#166534]">
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>

        <Text className="mt-6 text-center text-xs leading-5 text-gray-500">
          Authentication is not active yet.
          Do not enter a real password.
        </Text>
      </View>
    </ScrollView>
  );
}
