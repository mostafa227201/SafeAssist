
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";

type Contact = {
  id: number;
  name: string;
  relation: string;
  phone: string;
};

export default function ContactsScreen() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Ahmed Mohamed",
      relation: "Family",
      phone: "01000000000",
    },
    {
      id: 2,
      name: "Sara Ali",
      relation: "Friend",
      phone: "01100000000",
    },
  ]);

  function removeContact(id: number) {
    setContacts((previous) =>
      previous.filter((contact) => contact.id !== id)
    );
  }

  return (
    <View className="flex-1 bg-[#F8FAF9]">
      <ScrollView className="flex-1 px-5 pt-12">
        <Pressable
          onPress={() => router.back()}
          className="mb-7 h-11 w-11 items-center justify-center rounded-xl bg-white"
        >
          <Ionicons name="arrow-back" size={24} color="#123D2B" />
        </Pressable>

        <Text className="text-3xl font-bold text-[#123D2B]">
          Emergency Contacts
        </Text>
        <Text className="mt-2 text-gray-500">
          Manage the people you trust during emergencies.
        </Text>

        <View className="mt-7 rounded-2xl bg-[#E8F4EC] p-5">
          <View className="flex-row items-center">
            <Ionicons
              name="shield-checkmark-outline"
              size={26}
              color="#166534"
            />
            <Text className="ml-3 flex-1 font-semibold text-[#166534]">
              Your trusted network
            </Text>
          </View>
          <Text className="mt-3 text-sm leading-6 text-gray-600">
            Keep your emergency contact information updated
            so you can access it quickly when needed.
          </Text>
        </View>

        <View className="mb-4 mt-8 flex-row items-center justify-between">
          <Text className="text-xl font-bold text-gray-900">
            Saved Contacts
          </Text>
          <Text className="font-medium text-[#166534]">
            {contacts.length} Total
          </Text>
        </View>

        {contacts.map((contact) => (
          <View
            key={contact.id}
            className="mb-3 rounded-2xl border border-gray-100 bg-white p-4"
          >
            <View className="flex-row items-center">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <Ionicons
                  name="person-outline"
                  size={24}
                  color="#166534"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-base font-bold text-gray-900">
                  {contact.name}
                </Text>
                <Text className="mt-1 text-xs text-gray-500">
                  {contact.relation} • {contact.phone}
                </Text>
              </View>

              <Pressable
                accessibilityLabel={`Delete ${contact.name}`}
                onPress={() =>
                  Alert.alert(
                    "Remove Contact",
                    `Remove ${contact.name}?`,
                    [
                      { text: "Cancel", style: "cancel" },
                      {
                        text: "Remove",
                        style: "destructive",
                        onPress: () => removeContact(contact.id),
                      },
                    ]
                  )
                }
                className="rounded-xl bg-red-50 p-3"
              >
                <Ionicons
                  name="trash-outline"
                  size={20}
                  color="#DC2626"
                />
              </Pressable>
            </View>
          </View>
        ))}

        {contacts.length === 0 && (
          <View className="items-center rounded-2xl bg-white p-8">
            <Ionicons
              name="people-outline"
              size={40}
              color="#94A3B8"
            />
            <Text className="mt-3 text-gray-500">
              No emergency contacts yet.
            </Text>
          </View>
        )}

        <Pressable
          onPress={() => router.push("/add-contact")}
          className="mb-12 mt-5 flex-row items-center justify-center rounded-2xl bg-[#166534] p-5"
        >
          <Ionicons name="add-circle-outline" size={23} color="white" />
          <Text className="ml-2 font-bold text-white">
            Add Emergency Contact
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
