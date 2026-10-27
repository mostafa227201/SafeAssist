
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

const durations = [15, 30, 45, 60];

export default function CheckInScreen() {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState(30);
  const [status, setStatus] = useState<
    "idle" | "active" | "completed"
  >("idle");
  const [error, setError] = useState("");

  function startCheckIn() {
    if (!destination.trim()) {
      setError("Please enter your destination.");
      return;
    }

    setError("");
    setStatus("active");
  }

  function completeCheckIn() {
    setStatus("completed");
  }

  function resetCheckIn() {
    setDestination("");
    setDuration(30);
    setStatus("idle");
    setError("");
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
          Safety Check-In
        </Text>

        <Text className="mt-2 text-sm leading-6 text-gray-500">
          Plan a safe arrival and track your check-in status.
        </Text>

        <View className="mt-7 flex-row items-center rounded-2xl bg-[#E8F4EC] p-5">
          <Ionicons
            name="shield-checkmark-outline"
            size={27}
            color="#166534"
          />
          <View className="ml-3 flex-1">
            <Text className="font-bold text-[#166534]">
              Stay connected
            </Text>
            <Text className="mt-1 text-xs leading-5 text-gray-600">
              Create a check-in to record your planned arrival.
            </Text>
          </View>
        </View>

        {status === "idle" && (
          <View className="mt-7 rounded-3xl border border-gray-100 bg-white p-5">
            <Text className="mb-5 text-xl font-bold text-gray-900">
              New Check-In
            </Text>

            <Text className="mb-2 font-semibold text-gray-800">
              Destination
            </Text>

            <TextInput
              value={destination}
              onChangeText={(value) => {
                setDestination(value);
                setError("");
              }}
              placeholder="Where are you going?"
              placeholderTextColor="#94A3B8"
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900"
            />

            <Text className="mb-3 mt-6 font-semibold text-gray-800">
              Estimated Travel Time
            </Text>

            <View className="flex-row flex-wrap">
              {durations.map((minutes) => (
                <Pressable
                  key={minutes}
                  onPress={() => setDuration(minutes)}
                  className={
                    duration === minutes
                      ? "mb-3 mr-2 rounded-xl border border-green-700 bg-green-50 px-4 py-3"
                      : "mb-3 mr-2 rounded-xl border border-gray-200 bg-white px-4 py-3"
                  }
                >
                  <Text
                    className={
                      duration === minutes
                        ? "font-bold text-[#166534]"
                        : "text-gray-600"
                    }
                  >
                    {minutes} min
                  </Text>
                </Pressable>
              ))}
            </View>

            {error !== "" && (
              <View className="mb-4 rounded-xl bg-red-50 p-3">
                <Text className="text-red-700">{error}</Text>
              </View>
            )}

            <Pressable
              onPress={startCheckIn}
              className="mt-4 items-center rounded-2xl bg-[#166534] p-5"
            >
              <Text className="font-bold text-white">
                Start Safety Check-In
              </Text>
            </Pressable>
          </View>
        )}

        {status === "active" && (
          <View className="mt-7 items-center rounded-3xl bg-white p-6">
            <View className="h-20 w-20 items-center justify-center rounded-full bg-green-50">
              <Ionicons
                name="time-outline"
                size={40}
                color="#166534"
              />
            </View>

            <Text className="mt-5 text-xl font-bold text-gray-900">
              Check-In Active
            </Text>

            <Text className="mt-3 text-center text-gray-500">
              Destination: {destination}
            </Text>

            <Text className="mt-2 text-gray-500">
              Planned travel time: {duration} minutes
            </Text>

            <Pressable
              onPress={completeCheckIn}
              className="mt-8 w-full items-center rounded-2xl bg-[#166534] p-5"
            >
              <Text className="font-bold text-white">
                I've Arrived Safely
              </Text>
            </Pressable>

            <Pressable
              onPress={resetCheckIn}
              className="mt-3 w-full items-center rounded-2xl border border-gray-200 p-4"
            >
              <Text className="font-semibold text-gray-600">
                Cancel Check-In
              </Text>
            </Pressable>
          </View>
        )}

        {status === "completed" && (
          <View className="mt-7 items-center rounded-3xl bg-white p-7">
            <Ionicons
              name="checkmark-circle"
              size={75}
              color="#166534"
            />

            <Text className="mt-5 text-xl font-bold text-gray-900">
              Arrived Safely!
            </Text>

            <Text className="mt-3 text-center leading-6 text-gray-500">
              Your check-in has been completed in this demo.
            </Text>

            <Pressable
              onPress={resetCheckIn}
              className="mt-7 w-full items-center rounded-2xl bg-[#166534] p-5"
            >
              <Text className="font-bold text-white">
                Create Another Check-In
              </Text>
            </Pressable>
          </View>
        )}

        <View className="mt-7 rounded-2xl bg-amber-50 p-4">
          <Text className="text-center text-xs leading-5 text-amber-800">
            no automatic timer, emergency alert,
            or trusted-contact notification is active.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
