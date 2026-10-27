
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";

const relationships = ["Family", "Friend", "Doctor", "Other"];

export default function AddContactScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("Family");
  const [error, setError] = useState("");

  const handleSave = () => {
    const cleanName = name.trim();
    const cleanPhone = phone.replace(/[\s()-]/g, "");

    if (!cleanName) {
      setError("Please enter the contact's name.");
      return;
    }

    if (!/^\+?\d{10,15}$/.test(cleanPhone)) {
      setError("Please enter a valid phone number (10–15 digits).");
      return;
    }

    setError("");

    // Phase 1 demo: data is not persisted yet.
    Alert.alert(
      "Contact Validated",
      "The form is valid. Contact saving will be implemented next."
    );
  };

  return (
    <ScrollView className="flex-1 bg-[#F8FAF9]">
      <View className="px-5 pb-12 pt-12">
        <Pressable
          onPress={() => router.back()}
          className="mb-7 h-11 w-11 items-center justify-center rounded-xl bg-white"
        >
          <Ionicons name="arrow-back" size={24} color="#123D2B" />
        </Pressable>

        <Text className="text-3xl font-bold text-[#123D2B]">
          Add Emergency Contact
        </Text>
        <Text className="mt-2 text-sm leading-6 text-gray-500">
          Add a trusted person you may need to contact during an emergency.
        </Text>

        <View className="mt-8 rounded-3xl border border-gray-100 bg-white p-5">
          <View className="mb-6 flex-row items-center">
            <View className="h-12 w-12 items-center justify-center rounded-xl bg-green-50">
              <Ionicons name="person-add-outline" size={25} color="#166534" />
            </View>
            <View className="ml-3 flex-1">
              <Text className="text-lg font-bold text-gray-900">
                Contact Details
              </Text>
              <Text className="text-xs text-gray-500">
                Enter accurate contact information
              </Text>
            </View>
          </View>

          <Text className="mb-2 font-semibold text-gray-800">
            Full Name
          </Text>
          <TextInput
            value={name}
            onChangeText={(value) => {
              setName(value);
              setError("");
            }}
            placeholder="Enter full name"
            placeholderTextColor="#94A3B8"
            className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
            autoCapitalize="words"
          />

          <Text className="mb-2 font-semibold text-gray-800">
            Phone Number
          </Text>
          <TextInput
            value={phone}
            onChangeText={(value) => {
              setPhone(value);
              setError("");
            }}
            placeholder="e.g. 01012345678"
            placeholderTextColor="#94A3B8"
            keyboardType="phone-pad"
            className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
          />

          <Text className="mb-3 font-semibold text-gray-800">
            Relationship
          </Text>
          <View className="mb-5 flex-row flex-wrap">
            {relationships.map((item) => (
              <Pressable
                key={item}
                onPress={() => setRelationship(item)}
                className={`mb-2 mr-2 rounded-xl border px-4 py-3 ${
                  relationship === item
                    ? "border-[#166534] bg-green-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <Text
                  className={
                    relationship === item
                      ? "font-semibold text-[#166534]"
                      : "text-gray-600"
                  }
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>

          {error !== "" && (
            <View className="mb-5 rounded-xl bg-red-50 p-4">
              <Text className="text-sm text-red-700">{error}</Text>
            </View>
          )}

          <Pressable
            onPress={handleSave}
            className="items-center rounded-2xl bg-[#166534] p-5"
          >
            <Text className="text-base font-bold text-white">
              Validate Contact
            </Text>
          </Pressable>
        </View>

        <View className="mt-6 flex-row rounded-2xl bg-[#E8F4EC] p-4">
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#166534"
          />
          <Text className="ml-3 flex-1 text-xs leading-5 text-[#166534]">
            this form validates contact information
            but does not save it to the database yet.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
