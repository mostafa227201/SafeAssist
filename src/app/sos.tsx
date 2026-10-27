
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";

export default function SOSScreen() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <ScrollView className="flex-1 bg-[#F8FAF9]">
      <View className="px-5 pb-10 pt-12">
        {/* Header */}
        <Pressable
          onPress={() => router.back()}
          className="mb-8 h-11 w-11 items-center justify-center rounded-xl bg-white"
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#123D2B"
          />
        </Pressable>

        <Text className="text-3xl font-bold text-[#123D2B]">
          Emergency SOS
        </Text>
        <Text className="mt-2 text-gray-500">
          Quickly access your emergency options.
        </Text>

        {/* Emergency Card */}
        <View className="mt-8 items-center rounded-3xl bg-white p-6">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <Ionicons
              name="warning-outline"
              size={38}
              color="#DC2626"
            />
          </View>

          <Text className="mt-5 text-center text-xl font-bold text-gray-900">
            Need immediate assistance?
          </Text>

          <Text className="mt-3 text-center leading-6 text-gray-500">
            SafeAssist helps you access important
            emergency contact options.
          </Text>

          <Pressable
            onPress={() => setConfirmed(true)}
            className="mt-8 w-full items-center rounded-2xl bg-red-600 p-5"
          >
            <Text className="text-lg font-bold text-white">
              Activate SOS Demo
            </Text>
          </Pressable>
        </View>

        {/* Confirmation */}
        {confirmed && (
          <View className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
            <Text className="text-lg font-bold text-green-800">
              SOS Demo Activated
            </Text>
            <Text className="mt-2 leading-6 text-green-700">
              This is a demonstration only.
              No emergency notification has been sent.
            </Text>

            <Pressable
              onPress={() => setConfirmed(false)}
              className="mt-4 items-center rounded-xl bg-[#166534] p-3"
            >
              <Text className="font-semibold text-white">
                Reset Demo
              </Text>
            </Pressable>
          </View>
        )}

        {/* Emergency Options */}
        <Text className="mb-4 mt-8 text-xl font-bold text-gray-900">
          Emergency Options
        </Text>

        <View className="rounded-2xl bg-white p-5">
          <View className="flex-row items-center">
            <Ionicons
              name="call-outline"
              size={24}
              color="#166534"
            />
            <View className="ml-4 flex-1">
              <Text className="font-bold text-gray-900">
                Emergency Contacts
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                Access your trusted contacts
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-3 rounded-2xl bg-white p-5">
          <View className="flex-row items-center">
            <Ionicons
              name="location-outline"
              size={24}
              color="#166534"
            />
            <View className="ml-4 flex-1">
              <Text className="font-bold text-gray-900">
                Current Location
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                View location-sharing options
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-8 rounded-2xl bg-amber-50 p-4">
          <Text className="text-center text-xs leading-5 text-amber-800">
            SafeAssist is currently a prototype.
            This screen does not contact emergency services.
            In a real emergency, use your local emergency number.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
