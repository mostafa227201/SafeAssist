
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const [selectedFeature, setSelectedFeature] =
    useState<string | null>(null);

  const [notificationsVisible, setNotificationsVisible] =
    useState(false);

  const services = [
    {
      title: "Emergency Map",
      subtitle: "Find help nearby",
      icon: "map-outline",
    },
    {
      title: "My Contacts",
      subtitle: "Trusted people",
      icon: "people-outline",
    },
    {
      title: "Nearby Services",
      subtitle: "Hospitals & clinics",
      icon: "medkit-outline",
    },
    {
      title: "Safety Check-In",
      subtitle: "Stay connected",
      icon: "checkmark-circle-outline",
    },
  ] as const;

  const handleServicePress = (title: string) => {
    if (title === "Emergency Map") {
      router.push("/map");
    } else if (title === "My Contacts") {
      router.push("/contacts");
    } else if (title === "Nearby Services") {
      router.push("/nearby-services");
    } else if (title === "Safety Check-In") {
      router.push("/check-in");
    } else {
      setSelectedFeature(title);
    }
  };

  return (
    <View className="flex-1 bg-[#F8FAF9]">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="rounded-b-[32px] bg-[#123D2B] px-6 pb-8 pt-12">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-3 rounded-xl bg-[#285A45] p-3">
                <Ionicons
                  name="shield-checkmark-outline"
                  size={26}
                  color="white"
                />
              </View>

              <View>
                <Text className="text-2xl font-bold text-white">
                  SafeAssist
                </Text>
                <Text className="text-xs tracking-widest text-green-200">
                  YOUR SAFETY COMPANION
                </Text>
              </View>
            </View>

            {/* Notification Button */}
            <Pressable
              onPress={() => setNotificationsVisible(true)}
              className="h-11 w-11 items-center justify-center rounded-xl bg-[#285A45]"
              accessibilityRole="button"
              accessibilityLabel="Open notifications"
            >
              <Ionicons
                name="notifications-outline"
                size={25}
                color="white"
              />
            </Pressable>
          </View>

          <View className="mt-10">
            <Text className="text-xs font-semibold tracking-widest text-green-200">
              WELCOME TO SAFEASSIST
            </Text>

            <Text className="mt-2 text-3xl font-bold text-white">
              Your safety, simplified.
            </Text>

            <Text className="mt-3 text-sm leading-6 text-green-100">
              Access important safety tools and emergency
              information whenever you need them.
            </Text>
          </View>

          <View className="mt-7 flex-row items-center rounded-2xl bg-[#285A45] p-4">
            <Ionicons
              name="information-circle-outline"
              size={26}
              color="#BBF7D0"
            />

            <View className="ml-3 flex-1">
              <Text className="font-semibold text-white">
                Service Status
              </Text>
              <Text className="mt-1 text-xs text-green-100">
                Live emergency services are currently unavailable.
              </Text>
            </View>
          </View>
        </View>

        {/* Emergency Section */}
        <View className="px-5 pt-6">
          <View className="items-center rounded-3xl border border-gray-100 bg-white px-5 py-8">
            <View className="flex-row items-center">
              <Ionicons
                name="warning-outline"
                size={20}
                color="#DC2626"
              />

              <Text className="ml-2 text-base font-semibold text-gray-800">
                Emergency Assistance
              </Text>
            </View>

            <Pressable
              onPress={() => router.push("/sos")}
              accessibilityRole="button"
              accessibilityLabel="Open emergency assistance"
              className="my-7 h-44 w-44 items-center justify-center rounded-full bg-red-100"
            >
              <View className="h-36 w-36 items-center justify-center rounded-full bg-red-600">
                <Ionicons
                  name="alert-circle-outline"
                  size={34}
                  color="white"
                />

                <Text className="mt-1 text-4xl font-bold text-white">
                  SOS
                </Text>
              </View>
            </Pressable>

            <Text className="text-center text-sm text-gray-500">
              Tap to view emergency assistance options
            </Text>

            <View className="mt-5 w-full rounded-xl bg-red-50 p-3">
              <Text className="text-center text-xs text-red-700">
                Emergency alerts are not active. No assistance
                request will be sent.
              </Text>
            </View>
          </View>

          {/* Quick Access */}
          <View className="mb-5 mt-8 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-gray-900">
              Quick Access
            </Text>

            <Text className="text-sm font-medium text-primary">
              Services
            </Text>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {services.map((service) => (
              <Pressable
                key={service.title}
                onPress={() => handleServicePress(service.title)}
                className="mb-4 w-[48%] rounded-2xl border border-gray-100 bg-white p-4"
                accessibilityRole="button"
                accessibilityLabel={service.title}
              >
                <View className="mb-4 h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                  <Ionicons
                    name={service.icon}
                    size={25}
                    color="#166534"
                  />
                </View>

                <Text className="text-sm font-bold text-gray-800">
                  {service.title}
                </Text>

                <Text className="mt-1 text-xs text-gray-500">
                  {service.subtitle}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Emergency Profile */}
          <Pressable
            onPress={() => router.push("/emergency-profile")}
            className="mb-5 flex-row items-center rounded-2xl border border-gray-100 bg-white p-5"
          >
            <Ionicons
              name="person-circle-outline"
              size={26}
              color="#166534"
            />

            <View className="ml-3 flex-1">
              <Text className="font-bold text-gray-800">
                Emergency Profile
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                Manage your personal safety information
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#94A3B8"
            />
          </Pressable>

          {/* Emergency History */}
          <Pressable
            onPress={() => router.push("/history")}
            className="mb-5 flex-row items-center rounded-2xl border border-gray-100 bg-white p-5"
          >
            <Ionicons
              name="time-outline"
              size={26}
              color="#166534"
            />

            <View className="ml-3 flex-1">
              <Text className="font-bold text-gray-800">
                Emergency History
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                Review your previous safety activities
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#94A3B8"
            />
          </Pressable>

          {/* Footer */}
          <View className="mb-10 mt-3 flex-row items-center justify-center">
            <Ionicons
              name="shield-checkmark-outline"
              size={15}
              color="#64748B"
            />

            <Text className="ml-2 text-xs text-gray-500">
              SafeAssist • Your safety companion
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Unavailable Feature Modal */}
      <Modal
        visible={selectedFeature !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedFeature(null)}
      >
        <View className="flex-1 items-center justify-center bg-black/50 px-6">
          <View className="w-full max-w-sm rounded-3xl bg-white p-6">
            <Ionicons
              name="information-circle-outline"
              size={34}
              color="#166534"
            />

            <Text className="mt-4 text-xl font-bold text-gray-900">
              {selectedFeature}
            </Text>

            <Text className="mt-3 text-sm leading-6 text-gray-600">
              This feature is currently unavailable.
            </Text>

            <Pressable
              onPress={() => setSelectedFeature(null)}
              className="mt-6 items-center rounded-xl bg-primary p-4"
            >
              <Text className="font-semibold text-white">
                Got it
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Notifications Modal — separate from the other modal */}
      <Modal
        visible={notificationsVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setNotificationsVisible(false)}
      >
        <Pressable
          onPress={() => setNotificationsVisible(false)}
          className="flex-1 justify-end bg-black/50"
        >
          <Pressable
            onPress={(event) => event.stopPropagation()}
            className="rounded-t-3xl bg-[#F8FAF9] px-5 pb-10 pt-6"
          >
            {/* Notifications Header */}
            <View className="mb-6 flex-row items-center justify-between">
              <View>
                <Text className="text-2xl font-bold text-[#123D2B]">
                  Notifications
                </Text>
                <Text className="mt-1 text-sm text-gray-500">
                  Your safety updates
                </Text>
              </View>

              <Pressable
                onPress={() => setNotificationsVisible(false)}
                className="h-10 w-10 items-center justify-center rounded-full bg-white"
                accessibilityLabel="Close notifications"
              >
                <Ionicons
                  name="close"
                  size={24}
                  color="#123D2B"
                />
              </Pressable>
            </View>

            {/* Notification 1 */}
            <View className="mb-3 flex-row items-center rounded-2xl border border-gray-100 bg-white p-4">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <Ionicons
                  name="shield-checkmark-outline"
                  size={24}
                  color="#166534"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-bold text-gray-900">
                  Welcome to SafeAssist
                </Text>
                <Text className="mt-1 text-xs leading-5 text-gray-500">
                  Your safety dashboard is ready to explore.
                </Text>
                <Text className="mt-2 text-xs text-green-700">
                  Example notification
                </Text>
              </View>
            </View>

            {/* Notification 2 */}
            <View className="mb-3 flex-row items-center rounded-2xl border border-gray-100 bg-white p-4">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="#D97706"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-bold text-gray-900">
                  Emergency Features
                </Text>
                <Text className="mt-1 text-xs leading-5 text-gray-500">
                  Live emergency notifications are not enabled.
                </Text>
                <Text className="mt-2 text-xs text-amber-700">
                  Example notification
                </Text>
              </View>
            </View>

            <View className="mt-3 rounded-xl bg-amber-50 p-4">
              <Text className="text-center text-xs text-amber-800">
                Push notifications are currently unavailable.
                These messages are examples only.
              </Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
