
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

type Category = "All" | "Hospitals" | "Pharmacies" | "Police";

type Service = {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  description: string;
  icon: "medkit-outline" | "medical-outline" | "shield-outline";
};

const categories: Category[] = [
  "All",
  "Hospitals",
  "Pharmacies",
  "Police",
];

const services: Service[] = [
  {
    id: 1,
    name: "Sample General Hospital",
    category: "Hospitals",
    description: "Medical emergency services",
    icon: "medkit-outline",
  },
  {
    id: 2,
    name: "Sample Pharmacy",
    category: "Pharmacies",
    description: "Medicines and healthcare products",
    icon: "medical-outline",
  },
  {
    id: 3,
    name: "Sample Police Station",
    category: "Police",
    description: "Police assistance and reporting",
    icon: "shield-outline",
  },
];

export default function NearbyServicesScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("All");
  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" ||
      service.category === selectedCategory;

    const matchesSearch = service.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <ScrollView className="flex-1 bg-[#F8FAF9]">
      <View className="px-5 pb-12 pt-12">

        {/* Header */}
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

        <Text className="text-3xl font-bold text-[#123D2B]">
          Nearby Services
        </Text>
        <Text className="mt-2 leading-6 text-gray-500">
          Browse emergency service categories and find
          important assistance options.
        </Text>

        {/* Demo Banner */}
        <View className="mt-7 flex-row items-center rounded-2xl bg-green-50 p-4">
          <Ionicons
            name="information-circle-outline"
            size={25}
            color="#166534"
          />
          <View className="ml-3 flex-1">
            <Text className="font-bold text-[#166534]">
              Service Directory Preview
            </Text>
            <Text className="mt-1 text-xs text-gray-600">
              Sample entries only. Live nearby results are not active.
            </Text>
          </View>
        </View>

        {/* Search */}
        <View className="mt-7 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4">
          <Ionicons
            name="search-outline"
            size={22}
            color="#64748B"
          />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search emergency services..."
            placeholderTextColor="#94A3B8"
            className="ml-3 flex-1 py-4 text-gray-900"
          />
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-5"
        >
          {categories.map((category) => (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "mr-2 rounded-full bg-[#166534] px-5 py-3"
                  : "mr-2 rounded-full border border-gray-200 bg-white px-5 py-3"
              }
            >
              <Text
                className={
                  selectedCategory === category
                    ? "font-semibold text-white"
                    : "font-medium text-gray-600"
                }
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Results */}
        <View className="mb-4 mt-8 flex-row items-center justify-between">
          <Text className="text-xl font-bold text-gray-900">
            Available Services
          </Text>
          <Text className="text-sm font-semibold text-[#166534]">
            {filteredServices.length} Results
          </Text>
        </View>

        {filteredServices.map((service) => (
          <View
            key={service.id}
            className="mb-3 flex-row items-center rounded-2xl border border-gray-100 bg-white p-4"
          >
            <View className="h-14 w-14 items-center justify-center rounded-xl bg-green-50">
              <Ionicons
                name={service.icon}
                size={27}
                color="#166534"
              />
            </View>

            <View className="ml-4 flex-1">
              <Text className="font-bold text-gray-900">
                {service.name}
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                {service.category}
              </Text>
              <Text className="mt-1 text-xs text-gray-500">
                {service.description}
              </Text>
            </View>
          </View>
        ))}

        {filteredServices.length === 0 && (
          <View className="items-center rounded-2xl bg-white p-8">
            <Ionicons
              name="search-outline"
              size={40}
              color="#94A3B8"
            />
            <Text className="mt-3 text-gray-600">
              No matching services found.
            </Text>
          </View>
        )}

        <View className="mt-5 rounded-2xl bg-amber-50 p-4">
          <Text className="text-center text-xs leading-5 text-amber-800">
            Google Maps,
            GPS location, and verified nearby services
            will be implemented in a later.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
