
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

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSignup() {
    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\+?\d{10,15}$/.test(phone.replace(/[\s()-]/g, ""))) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    // Account creation is not connected yet.
    // Return to Login to continue exploring the prototype.
    router.replace("/login");
  }

  return (
    <ScrollView
      className="flex-1 bg-[#F8FAF9]"
      keyboardShouldPersistTaps="handled"
    >
      <View className="px-6 pb-12 pt-12">
        <Pressable
          onPress={() => router.back()}
          className="mb-7 h-11 w-11 items-center justify-center rounded-xl bg-white"
        >
          <Ionicons name="arrow-back" size={24} color="#123D2B" />
        </Pressable>

        <View className="items-center">
          <View className="h-16 w-16 items-center justify-center rounded-2xl bg-[#123D2B]">
            <Ionicons
              name="person-add-outline"
              size={31}
              color="white"
            />
          </View>

          <Text className="mt-5 text-3xl font-bold text-[#123D2B]">
            Create Account
          </Text>
          <Text className="mt-2 text-center text-gray-500">
            Get started with SafeAssist
          </Text>
        </View>

        <View className="mt-8 rounded-3xl border border-gray-100 bg-white p-5">
          <Text className="mb-2 font-semibold text-gray-800">
            Full Name
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Your full name"
            placeholderTextColor="#94A3B8"
            className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
          />

          <Text className="mb-2 font-semibold text-gray-800">
            Email Address
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="example@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#94A3B8"
            className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
          />

          <Text className="mb-2 font-semibold text-gray-800">
            Phone Number
          </Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="01012345678"
            keyboardType="phone-pad"
            placeholderTextColor="#94A3B8"
            className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
          />

          <Text className="mb-2 font-semibold text-gray-800">
            Password
          </Text>
          <View className="mb-5 flex-row items-center rounded-xl border border-gray-200 bg-gray-50 pr-3">
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Minimum 8 characters"
              secureTextEntry={!showPassword}
              placeholderTextColor="#94A3B8"
              className="flex-1 px-4 py-4 text-gray-900"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#64748B"
              />
            </Pressable>
          </View>

          <Text className="mb-2 font-semibold text-gray-800">
            Confirm Password
          </Text>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm your password"
            secureTextEntry
            placeholderTextColor="#94A3B8"
            className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
          />

          {error !== "" && (
            <View className="mb-4 rounded-xl bg-red-50 p-4">
              <Text className="text-sm text-red-700">
                {error}
              </Text>
            </View>
          )}

          <Pressable
            onPress={handleSignup}
            className="items-center rounded-2xl bg-[#166534] p-5"
          >
            <Text className="text-base font-bold text-white">
              Continue
            </Text>
          </Pressable>

          <View className="mt-6 flex-row justify-center">
            <Text className="text-gray-500">
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => router.replace("/login")}>
              <Text className="font-bold text-[#166534]">
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>

        <Text className="mt-6 text-center text-xs leading-5 text-gray-500">
          Account creation is currently unavailable.
          This form demonstrates input validation only.
          Do not enter a real password.
        </Text>
      </View>
    </ScrollView>
  );
}
