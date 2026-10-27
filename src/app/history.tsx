
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

type Filter = "All" | "SOS" | "Check-In";

type Activity = {
  id: number;
  title: string;
  category: "SOS" | "Check-In";
  date: string;
  description: string;
  status: string;
};

const demoActivities: Activity[] = [
  {
    id: 1,
    title: "Safety Check-In",
    category: "Check-In",
    date: "October 20, 2026",
    description: "Demo destination: BUE Campus",
    status: "Completed",
  },
  {
    id: 2,
    title: "SOS Demonstration",
    category: "SOS",
    date: "October 19, 2026",
    description: "Prototype emergency activation test",
    status: "Demo Only",
  },
  {
    id: 3,
    title: "Safety Check-In",
    category: "Check-In",
    date: "October 18, 2026",
    description: "Demo destination: Home",
    status: "Completed",
  },
];

const filters: Filter[] = ["All", "SOS", "Check-In"];

export default function EmergencyHistoryScreen() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedActivity, setSelectedActivity] =
    useState<Activity | null>(null);

  const filteredActivities = demoActivities.filter(
    (activity) =>
      filter === "All" || activity.category === filter
  );

  return (
    <View className="flex-1 bg-[#F8FAF9]">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 pb-12 pt-12">
          {/* Back Button */}
          <Pressable
            onPress={() => router.back()}
            className="mb-7 h-11 w-11 items-center justify-center rounded-xl bg-white"
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="#123D2B"
            />
          </Pressable>

          {/* Header */}
          <Text className="text-3xl font-bold text-[#123D2B]">
            Emergency History
          </Text>
          <Text className="mt-2 text-sm leading-6 text-gray-500">
            Review your emergency activities and safety
            check-in records.
          </Text>

          {/* Demo Notice */}
          <View className="mt-7 flex-row items-center rounded-2xl bg-[#E8F4EC] p-4">
            <Ionicons
              name="information-circle-outline"
              size={25}
              color="#166534"
            />
            <View className="ml-3 flex-1">
              <Text className="font-bold text-[#166534]">
                Activity History Preview
              </Text>
              <Text className="mt-1 text-xs leading-5 text-gray-600">
                These are sample records, not real emergency events.
              </Text>
            </View>
          </View>

          {/* Summary Cards */}
          <View className="mt-7 flex-row justify-between">
            <View className="w-[48%] rounded-2xl border border-gray-100 bg-white p-5">
              <Ionicons
                name="document-text-outline"
                size={26}
                color="#166534"
              />
              <Text className="mt-3 text-3xl font-bold text-gray-900">
                {demoActivities.length}
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                Total Activities
              </Text>
            </View>

            <View className="w-[48%] rounded-2xl border border-gray-100 bg-white p-5">
              <Ionicons
                name="checkmark-circle-outline"
                size={26}
                color="#166534"
              />
              <Text className="mt-3 text-3xl font-bold text-gray-900">
                {demoActivities.filter(
                  (activity) => activity.status === "Completed"
                ).length}
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                Completed Check-Ins
              </Text>
            </View>
          </View>

          {/* Filters */}
          <Text className="mb-4 mt-8 text-xl font-bold text-gray-900">
            Recent Activity
          </Text>

          <View className="mb-5 flex-row">
            {filters.map((item) => (
              <Pressable
                key={item}
                onPress={() => setFilter(item)}
                className={
                  filter === item
                    ? "mr-2 rounded-full bg-[#166534] px-5 py-3"
                    : "mr-2 rounded-full border border-gray-200 bg-white px-5 py-3"
                }
              >
                <Text
                  className={
                    filter === item
                      ? "font-semibold text-white"
                      : "font-medium text-gray-600"
                  }
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Activity List */}
          {filteredActivities.map((activity) => (
            <Pressable
              key={activity.id}
              onPress={() => setSelectedActivity(activity)}
              className="mb-3 flex-row items-center rounded-2xl border border-gray-100 bg-white p-4"
            >
              <View
                className={
                  activity.category === "SOS"
                    ? "h-12 w-12 items-center justify-center rounded-xl bg-red-50"
                    : "h-12 w-12 items-center justify-center rounded-xl bg-green-50"
                }
              >
                <Ionicons
                  name={
                    activity.category === "SOS"
                      ? "warning-outline"
                      : "checkmark-circle-outline"
                  }
                  size={25}
                  color={
                    activity.category === "SOS"
                      ? "#DC2626"
                      : "#166534"
                  }
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-bold text-gray-900">
                  {activity.title}
                </Text>
                <Text className="mt-1 text-xs text-gray-500">
                  {activity.date}
                </Text>
                <Text
                  className={
                    activity.status === "Completed"
                      ? "mt-2 text-xs font-semibold text-green-700"
                      : "mt-2 text-xs font-semibold text-red-600"
                  }
                >
                  {activity.status}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#94A3B8"
              />
            </Pressable>
          ))}

          <View className="mt-5 rounded-2xl bg-amber-50 p-4">
            <Text className="text-center text-xs leading-5 text-amber-800">
              Activity records are
              demonstration data and are not yet
              stored in a database.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Activity Details Modal */}
      <Modal
        visible={selectedActivity !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedActivity(null)}
      >
        <View className="flex-1 items-center justify-center bg-black/50 px-6">
          <View className="w-full max-w-sm rounded-3xl bg-white p-6">
            <Ionicons
              name="document-text-outline"
              size={34}
              color="#166534"
            />

            <Text className="mt-4 text-xl font-bold text-gray-900">
              {selectedActivity?.title}
            </Text>

            <Text className="mt-3 text-sm text-gray-500">
              {selectedActivity?.date}
            </Text>

            <Text className="mt-4 text-sm leading-6 text-gray-700">
              {selectedActivity?.description}
            </Text>

            <Text className="mt-4 font-semibold text-[#166534]">
              Status: {selectedActivity?.status}
            </Text>

            <Pressable
              onPress={() => setSelectedActivity(null)}
              className="mt-7 items-center rounded-xl bg-[#166534] p-4"
            >
              <Text className="font-semibold text-white">
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
