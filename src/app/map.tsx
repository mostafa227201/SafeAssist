
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function EmergencyMapScreen() {
  return (
    <ScrollView className="flex-1 bg-[#F8FAF9]">
      <View className="px-5 pb-10 pt-12">
        <Pressable
          onPress={() => router.back()}
          className="mb-7 h-11 w-11 items-center justify-center rounded-xl bg-white"
        >
          <Ionicons name="arrow-back" size={24} color="#123D2B" />
        </Pressable>

        <Text className="text-3xl font-bold text-[#123D2B]">
          Emergency Map
        </Text>
        <Text className="mt-2 text-gray-500">
          Find important emergency locations near you.
        </Text>

        <View className="mt-7 h-72 items-center justify-center rounded-3xl border border-green-100 bg-[#E5F0E9]">
          <Ionicons name="map-outline" size={64} color="#166534" />
          <Text className="mt-4 text-lg font-bold text-[#123D2B]">
            Map Preview
          </Text>
          <Text className="mt-2 text-center text-sm text-gray-500">
            Google Maps integration isn't available yet.
          </Text>
        </View>

        <Text className="mb-4 mt-8 text-xl font-bold text-gray-900">
          Emergency Services
        </Text>

        {[
          { title: "Hospitals", detail: "Medical assistance", icon: "medkit-outline" },
          { title: "Pharmacies", detail: "Medicine and healthcare", icon: "medical-outline" },
          { title: "Police Stations", detail: "Security assistance", icon: "shield-outline" },
        ].map((service) => (
          <View
            key={service.title}
            className="mb-3 flex-row items-center rounded-2xl bg-white p-5"
          >
            <View className="h-12 w-12 items-center justify-center rounded-xl bg-green-50">
              <Ionicons name={service.icon as any} size={24} color="#166534" />
            </View>
            <View className="ml-4 flex-1">
              <Text className="font-bold text-gray-900">{service.title}</Text>
              <Text className="mt-1 text-xs text-gray-500">{service.detail}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </View>
        ))}

        <View className="mt-5 rounded-xl bg-green-50 p-4">
          <Text className="text-center text-xs leading-5 text-green-800">
            This is a UI prototype. Live GPS and map services are not active.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
