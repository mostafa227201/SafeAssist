
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

export default function EmergencyProfileScreen() {
  const [fullName, setFullName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medicalNotes, setMedicalNotes] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function handleSave() {
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    setError("");
    setSaved(true);
  }

  function handleEdit() {
    setSaved(false);
  }

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
          Emergency Profile
        </Text>
        <Text className="mt-2 text-sm leading-6 text-gray-500">
          Organize important information that may be useful
          during an emergency.
        </Text>

        <View className="mt-7 flex-row items-center rounded-2xl bg-[#E8F4EC] p-5">
          <Ionicons
            name="shield-checkmark-outline"
            size={27}
            color="#166534"
          />
          <View className="ml-3 flex-1">
            <Text className="font-bold text-[#166534]">
              Personal Safety Information
            </Text>
            <Text className="mt-1 text-xs leading-5 text-gray-600">
              Keep these details accurate and up to date.
            </Text>
          </View>
        </View>

        {!saved ? (
          <View className="mt-7 rounded-3xl border border-gray-100 bg-white p-5">
            <Text className="mb-6 text-xl font-bold text-gray-900">
              Profile Details
            </Text>

            <Text className="mb-2 font-semibold text-gray-800">
              Full Name
            </Text>
            <TextInput
              value={fullName}
              onChangeText={(value) => {
                setFullName(value);
                setError("");
              }}
              placeholder="Enter full name"
              placeholderTextColor="#94A3B8"
              className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
            />

            <Text className="mb-2 font-semibold text-gray-800">
              Blood Type (Optional)
            </Text>
            <TextInput
              value={bloodType}
              onChangeText={setBloodType}
              placeholder="e.g. A+, O-"
              placeholderTextColor="#94A3B8"
              autoCapitalize="characters"
              className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
            />

            <Text className="mb-2 font-semibold text-gray-800">
              Allergies (Optional)
            </Text>
            <TextInput
              value={allergies}
              onChangeText={setAllergies}
              placeholder="Enter known allergies"
              placeholderTextColor="#94A3B8"
              multiline
              className="mb-5 min-h-20 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
            />

            <Text className="mb-2 font-semibold text-gray-800">
              Medical Notes (Optional)
            </Text>
            <TextInput
              value={medicalNotes}
              onChangeText={setMedicalNotes}
              placeholder="Other important emergency information"
              placeholderTextColor="#94A3B8"
              multiline
              className="mb-5 min-h-24 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
            />

            {error !== "" && (
              <View className="mb-4 rounded-xl bg-red-50 p-4">
                <Text className="text-red-700">{error}</Text>
              </View>
            )}

            <Pressable
              onPress={handleSave}
              className="items-center rounded-2xl bg-[#166534] p-5"
            >
              <Text className="font-bold text-white">
                Save Profile Preview
              </Text>
            </Pressable>
          </View>
        ) : (
          <View className="mt-7 rounded-3xl border border-gray-100 bg-white p-6">
            <View className="items-center">
              <Ionicons
                name="checkmark-circle"
                size={65}
                color="#166534"
              />
              <Text className="mt-3 text-xl font-bold text-gray-900">
                Profile Preview
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                Saved in this screen only
              </Text>
            </View>

            <View className="mt-7">
              <Text className="mb-4 text-gray-800">
                Full Name: {fullName}
              </Text>
              <Text className="mb-4 text-gray-800">
                Blood Type: {bloodType || "Not provided"}
              </Text>
              <Text className="mb-4 text-gray-800">
                Allergies: {allergies || "Not provided"}
              </Text>
              <Text className="text-gray-800">
                Medical Notes: {medicalNotes || "Not provided"}
              </Text>
            </View>

            <Pressable
              onPress={handleEdit}
              className="mt-8 items-center rounded-2xl bg-[#166534] p-5"
            >
              <Text className="font-bold text-white">
                Edit Profile
              </Text>
            </Pressable>
          </View>
        )}

        <View className="mt-7 rounded-2xl bg-amber-50 p-4">
          <Text className="text-center text-xs leading-5 text-amber-800">
            Information is not saved permanently.
            Do not enter sensitive real medical information for testing.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
